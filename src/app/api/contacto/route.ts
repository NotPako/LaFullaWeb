import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, phone, message } = await req.json();

  if (!email || !message) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
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
      html: `
        <h2>Mos estan xarrant per la web</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${phone || "No proporcionado"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error enviando correo" }, { status: 500 });
  }
}
