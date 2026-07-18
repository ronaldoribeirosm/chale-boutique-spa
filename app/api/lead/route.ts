import { NextResponse } from "next/server";

type LeadPayload = {
  name?: string;
  phone?: string;
  email?: string;
  checkIn?: string;
  checkOut?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: LeadPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido." }, { status: 400 });
  }

  const { name, phone, email, checkIn, checkOut, message } = body;

  if (!name?.trim() || !phone?.trim()) {
    return NextResponse.json({ error: "Nome e WhatsApp são obrigatórios." }, { status: 400 });
  }

  const lead = {
    name: name.trim(),
    phone: phone.trim(),
    email: email?.trim() || null,
    checkIn: checkIn || null,
    checkOut: checkOut || null,
    message: message?.trim() || null,
    source: "form" as const,
    createdAt: new Date().toISOString(),
  };

  // Sem RESEND_API_KEY configurada (ver .env.example), o lead só é logado —
  // suficiente pra v1 rodar localmente. Em produção, plugar Resend + alerta
  // no WhatsApp do anfitrião (ver ESTRUTURA_FUNCIONALIDADES_CHALE.md, seção 7).
  if (process.env.RESEND_API_KEY) {
    try {
      await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev",
          to: process.env.LEAD_TO_EMAIL,
          subject: `Novo lead — ${lead.name}`,
          text: JSON.stringify(lead, null, 2),
        }),
      });
    } catch (err) {
      console.error("Falha ao enviar e-mail do lead:", err);
    }
  } else {
    console.log("[lead]", lead);
  }

  return NextResponse.json({ ok: true });
}
