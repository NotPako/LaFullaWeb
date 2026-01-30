'use client';
import { useState } from "react";
import "./Contacto.css";

export default function Contacto() {
  const [form, setForm] = useState({
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ email: "", phone: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="contacto-section">
      <h2 className="contacto-title">Contacte</h2>

      <form className="contacto-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="El teu correu"
          required
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="El teu telèfon"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Escriu el teu missatge aquí..."
          required
          rows={5}
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviant..." : "Enviar"}
        </button>

        {status === "sent" && <p className="success">Missatge enviat correctament 🎉</p>}
        {status === "error" && <p className="error">Haguí un error. Intenta-ho de nou.</p>}
      </form>
    </section>
  );
}
