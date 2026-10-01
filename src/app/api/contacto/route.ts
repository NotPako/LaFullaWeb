import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const MAX_EMAIL = 254;
const MAX_PHONE = 30;
const MAX_MESSAGE = 5000;
const EMAIL_RE = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// Todo lo que escribe el usuario se escapa antes de meterlo en el HTML del correo
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const badRequest = () => NextResponse.json({ error: "Datos no válidos" }, { status: 400 });

export async function POST(req: Request) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return badRequest();
  }
  if (typeof body !== "object" || body === null) return badRequest();

  const { email, phone, message, website } = body as Record<string, unknown>;

  // Honeypot: campo invisible que solo rellenan los bots. Respondemos ok para no darles pistas
  if (website) return NextResponse.json({ ok: true });

  if (typeof email !== "string" || typeof message !== "string") return badRequest();
  if (phone !== undefined && typeof phone !== "string") return badRequest();

  const cleanEmail = email.trim();
  const cleanPhone = (phone ?? "").trim();
  const cleanMessage = message.trim();

  if (
    !cleanEmail ||
    !cleanMessage ||
    cleanEmail.length > MAX_EMAIL ||
    !EMAIL_RE.test(cleanEmail) ||
    cleanPhone.length > MAX_PHONE ||
    cleanMessage.length > MAX_MESSAGE
  ) {
    return badRequest();
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"La Fulla Web" <${process.env.EMAIL_USER}>`,
      to: "gruplafulla@gmail.com",
      subject: "Nuevo missatge desde la web",
      text: `Email: ${cleanEmail}\nTeléfono: ${cleanPhone || "No proporcionado"}\n\nMensaje:\n${cleanMessage}`,
      html: `
        <h2>Mos estan xarrant per la web</h2>
        <p><strong>Email:</strong> ${escapeHtml(cleanEmail)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(cleanPhone) || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(cleanMessage).replace(/\n/g, "<br>")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
  }
}
