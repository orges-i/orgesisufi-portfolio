import type { VercelRequest, VercelResponse } from "@vercel/node";

export const config = {
  runtime: "nodejs",
};

const REQUIRED_ENV_VARS = [
  "RESEND_API_KEY",
  "CONTACT_FROM_EMAIL",
  "CONTACT_TO_EMAIL",
] as const;
const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
};

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  try {
    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const body = await readRequestBody(req);
    const name = body?.name?.trim();
    const email = body?.email?.trim();
    const message = body?.message?.trim();

    if (!name || !email || !message) {
      console.warn("Missing required fields:", {
        name: !!name,
        email: !!email,
        message: !!message,
      });
      return res
        .status(400)
        .json({ error: "Please complete all required fields." });
    }

    if (!isValidEmail(email)) {
      console.warn("Invalid email:", email);
      return res
        .status(400)
        .json({ error: "Please provide a valid email address." });
    }

    if (message.length > 5000) {
      return res.status(400).json({ error: "Message is too long." });
    }

    const missingEnv = REQUIRED_ENV_VARS.filter((key) => !process.env[key]);
    if (missingEnv.length > 0) {
      console.error("Missing environment variables:", missingEnv.join(", "));
      console.error(
        "Available env vars:",
        Object.keys(process.env).filter(
          (k) => k.includes("CONTACT") || k.includes("RESEND")
        )
      );
      return res.status(500).json({
        error:
          "Email service is not configured. Missing: " + missingEnv.join(", "),
      });
    }

    await sendEmailViaResend({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: [process.env.CONTACT_TO_EMAIL!],
      reply_to: [email],
      subject: `Portfolio contact form: ${name}`,
      html: buildHtmlEmail({ name, email, message }),
      text: buildTextEmail({ name, email, message }),
    });

    console.log("Contact form submission successful");
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("=== ERROR IN CONTACT HANDLER ===");
    console.error("Error type:", error?.constructor?.name);
    console.error("Error:", error);

    if (error instanceof ResendRequestError) {
      console.error("ResendRequestError - Status:", error.status);
      console.error("ResendRequestError - Message:", error.message);
      console.error("ResendRequestError - Details:", error.details);
      return res.status(error.status).json({ error: error.message });
    }

    console.error(
      "Error stack:",
      error instanceof Error ? error.stack : "No stack trace"
    );
    const errorMsg = extractErrorMessage(error);
    console.error("Final error message:", errorMsg);
    return res.status(500).json({ error: errorMsg });
  }
}

class ResendRequestError extends Error {
  status: number;
  details?: unknown;

  constructor(status: number, message: string, details?: unknown) {
    super(message);
    this.status = status;
    this.details = details;
  }
}

async function sendEmailViaResend(payload: {
  from: string;
  to: string[];
  reply_to: string[];
  subject: string;
  html: string;
  text: string;
}) {
  try {
    console.log("Sending email via Resend with payload:", {
      from: payload.from,
      to: payload.to,
      reply_to: payload.reply_to,
      subject: payload.subject,
    });

    const response = await fetch(RESEND_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    console.log("Resend response status:", response.status);

    const result = await response.json().catch(() => null);
    console.log("Resend response result:", result);

    if (!response.ok) {
      const errorMsg =
        extractResendError(result) ??
        `Resend request failed with status ${response.status}`;
      console.error("Resend request failed:", errorMsg, result);
      throw new ResendRequestError(response.status, errorMsg, result);
    }

    if (result?.error) {
      const errorMsg =
        extractResendError(result.error) ?? "Resend rejected the request.";
      console.error("Resend error:", errorMsg, result.error);
      throw new ResendRequestError(response.status, errorMsg, result.error);
    }

    console.log("Email sent successfully:", result?.id);
  } catch (error) {
    if (error instanceof ResendRequestError) {
      throw error;
    }
    console.error("Unexpected error in sendEmailViaResend:", error);
    throw new ResendRequestError(
      500,
      error instanceof Error ? error.message : "Failed to send email",
      error
    );
  }
}

async function readRequestBody(
  req: VercelRequest
): Promise<ContactPayload | null> {
  try {
    if (req.body) {
      if (typeof req.body === "string") {
        const parsed = safeJsonParse(req.body);
        console.log("Parsed body from string:", parsed);
        return parsed;
      }

      if (typeof req.body === "object") {
        console.log("Using body object directly:", req.body);
        return req.body as ContactPayload;
      }
    }

    const rawBody = await readStream(req);
    if (!rawBody) {
      console.warn("No body received in request");
      return null;
    }
    const parsed = safeJsonParse(rawBody);
    console.log("Parsed body from stream:", parsed);
    return parsed;
  } catch (error) {
    console.error("Error reading request body:", error);
    return null;
  }
}

function readStream(req: VercelRequest) {
  return new Promise<string>((resolve, reject) => {
    if (typeof req.on !== "function") {
      resolve("");
      return;
    }

    let data = "";

    req.on("data", (chunk) => {
      data += chunk;
    });

    req.on("end", () => {
      resolve(data);
    });

    req.on("error", (error) => {
      reject(error);
    });
  });
}

function safeJsonParse(payload: string) {
  try {
    return JSON.parse(payload);
  } catch (error) {
    console.error("Failed to parse JSON payload", error);
    return null;
  }
}

function extractResendError(error: any) {
  if (!error) return "Failed to send the message. Please try again later.";
  if (typeof error === "string") return error;
  if (error?.message) return error.message;
  if (Array.isArray(error?.errors) && error.errors.length > 0) {
    return (
      error.errors[0]?.message ??
      "Failed to send the message. Please try again later."
    );
  }
  return "Failed to send the message. Please try again later.";
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
  const sanitizedMessage = escapeHtml(message).replace(/\n/g, "<br/>");

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

function buildTextEmail({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  return `New message from your portfolio

Name: ${name}
Email: ${email}

${message}`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      case "'":
        return "&#039;";
      default:
        return char;
    }
  });
}

function extractErrorMessage(error: unknown) {
  if (!error) return "Failed to send the message. Please try again later.";
  if (typeof error === "string") return error;
  if (error instanceof Error)
    return (
      error.message || "Failed to send the message. Please try again later."
    );
  if (typeof error === "object") {
    const maybeMessage = (error as { message?: string }).message;
    if (maybeMessage) return maybeMessage;
  }
  return "Failed to send the message. Please try again later.";
}
