import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

const PRODUCT_NAMES: Record<string, string> = {
  "samarreta-nucs": "Samarreta Nucs de Vidre — 15€",
  "dessuadora-nucs": "Dessuadora Nucs de Vidre — 20€",
  "samarreta-pnhp": "Samarreta PNHP — 20€",
  "disc-fisic": "Disc físic — 8€",
};

export async function POST(req: Request) {
  const { product, size, email, phone, comments } = await req.json();

  if (!product || !email || !phone) {
    return NextResponse.json({ error: "Falten dades obligatòries" }, { status: 400 });
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
      subject: `Nova comanda — ${PRODUCT_NAMES[product] ?? product}`,
      html: `
        <h2>Nova comanda de merxandatge</h2>
        <p><strong>Producte:</strong> ${PRODUCT_NAMES[product] ?? product}</p>
        <p><strong>Talla:</strong> ${size || "No especificada"}</p>
        <hr />
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telèfon:</strong> ${phone}</p>
        ${comments ? `<p><strong>Comentaris:</strong> ${comments}</p>` : ""}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Error enviant el correu" }, { status: 500 });
  }
}