import type { VercelRequest, VercelResponse } from '@vercel/node';

export const config = {
  runtime: 'nodejs',
};

const REQUIRED_ENV_VARS = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'] as const;
const RESEND_API_URL = 'https://api.resend.com/emails';

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method not allowed' });
    }

    const body = await readRequestBody(req);
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Please complete all required fields.' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    if (message.length > 5000) {
      return res.status(400).json({ error: 'Message is too long.' });
    }

    const missingEnv = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
    if (missingEnv.length > 0) {
      console.error('Missing environment variables:', missingEnv.join(', '));
      return res.status(500).json({ error: 'Email service is not configured.' });
    }

    await sendEmailViaResend({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      reply_to: email,
      subject: `Portfolio contact form: ${name}`,
      html: buildHtmlEmail({ name, email, message }),
      text: buildTextEmail({ name, email, message }),
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Unhandled contact form error:', error);
    return res.status(500).json({ error: extractErrorMessage(error) });
  }
}

async function sendEmailViaResend(payload: Record<string, string>) {
  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const result = await response.json().catch(() => null);

  if (!response.ok) {
    console.error('Resend API returned non-OK status', response.status, result);
    throw new Error(extractResendError(result));
  }

  if (result?.error) {
    console.error('Resend API reported error payload', result.error);
    throw new Error(extractResendError(result.error));
  }
}

async function readRequestBody(req: VercelRequest): Promise<ContactPayload | null> {
  if (req.body) {
    if (typeof req.body === 'string') {
      return safeJsonParse(req.body);
    }

    if (typeof req.body === 'object') {
      return req.body as ContactPayload;
    }
  }

  const rawBody = await readStream(req);
  if (!rawBody) return null;
  return safeJsonParse(rawBody);
}

function readStream(req: VercelRequest) {
  return new Promise<string>((resolve, reject) => {
    if (typeof req.on !== 'function') {
      resolve('');
      return;
    }

    let data = '';

    req.on('data', (chunk) => {
      data += chunk;
    });

    req.on('end', () => {
      resolve(data);
    });

    req.on('error', (error) => {
      reject(error);
    });
  });
}

function safeJsonParse(payload: string) {
  try {
    return JSON.parse(payload);
  } catch (error) {
    console.error('Failed to parse JSON payload', error);
    return null;
  }
}

function extractResendError(error: any) {
  if (!error) return 'Failed to send the message. Please try again later.';
  if (typeof error === 'string') return error;
  if (error?.message) return error.message;
  if (Array.isArray(error?.errors) && error.errors.length > 0) {
    return error.errors[0]?.message ?? 'Failed to send the message. Please try again later.';
  }
  return 'Failed to send the message. Please try again later.';
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function buildHtmlEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  const sanitizedMessage = escapeHtml(message).replace(/\n/g, '<br/>');

  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">New message from your portfolio</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p style="margin-top: 24px;"><strong>Message:</strong></p>
      <p>${sanitizedMessage}</p>
      <hr style="margin: 24px 0;">
      <p style="font-size: 12px; color: #555;">This email was sent from orgesisufi.com.</p>
    </div>
  `;
}

function buildTextEmail({ name, email, message }: { name: string; email: string; message: string }) {
  return `New message from your portfolio

Name: ${name}
Email: ${email}

${message}`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;';
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '"':
        return '&quot;';
      case "'":
        return '&#039;';
      default:
        return char;
    }
  });
}

function extractErrorMessage(error: unknown) {
  if (!error) return 'Failed to send the message. Please try again later.';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message || 'Failed to send the message. Please try again later.';
  if (typeof error === 'object') {
    const maybeMessage = (error as { message?: string }).message;
    if (maybeMessage) return maybeMessage;
  }
  return 'Failed to send the message. Please try again later.';
}
