import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const REQUIRED_ENV_VARS = ['RESEND_API_KEY', 'CONTACT_FROM_EMAIL', 'CONTACT_TO_EMAIL'] as const;
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = parseRequestBody(req.body);
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

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: email,
      subject: `Portfolio contact form: ${name}`,
      html: buildHtmlEmail({ name, email, message }),
      text: buildTextEmail({ name, email, message }),
    });

    if (error) {
      console.error('Resend email error:', error);
      return res.status(500).json({ error: extractErrorMessage(error) });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Unhandled email error:', error);
    return res.status(500).json({ error: extractErrorMessage(error) });
  }
}

function parseRequestBody(body: VercelRequest['body']) {
  if (!body) return null;
  if (typeof body === 'string') return safeJsonParse(body);
  if (Buffer.isBuffer(body)) return safeJsonParse(body.toString('utf8'));
  if (typeof body === 'object') return body as Record<string, string>;
  return null;
}

function safeJsonParse(payload: string) {
  try {
    return JSON.parse(payload);
  } catch (error) {
    console.error('Failed to parse JSON payload', error);
    return null;
  }
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
