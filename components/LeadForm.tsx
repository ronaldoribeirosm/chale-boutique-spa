"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function LeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Não foi possível enviar agora.");

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
      setErrorMsg("Algo deu errado. Tenta de novo ou chama no WhatsApp.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-linha/40 bg-surface p-8 text-center" role="status">
        <p className="font-display text-xl text-carvao">Recebemos sua mensagem</p>
        <p className="mt-2 text-sm text-musgo">
          Normalmente respondemos em poucas horas — se for urgente, chama no WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-carvao">
            Nome <span className="text-cobre-fundo">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="mt-2 w-full rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-carvao">
            WhatsApp <span className="text-cobre-fundo">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="mt-2 w-full rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-carvao">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="mt-2 w-full rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="checkIn" className="text-sm font-medium text-carvao">
            Check-in
          </label>
          <input
            id="checkIn"
            name="checkIn"
            type="date"
            className="mt-2 w-full rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
          />
        </div>
        <div>
          <label htmlFor="checkOut" className="text-sm font-medium text-carvao">
            Check-out
          </label>
          <input
            id="checkOut"
            name="checkOut"
            type="date"
            className="mt-2 w-full rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="text-sm font-medium text-carvao">
          Mensagem
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-2 w-full resize-none rounded-sm border border-linha bg-nevoa px-4 py-3 text-sm text-carvao outline-none transition-colors focus:border-cobre"
        />
      </div>

      {status === "error" && (
        <p role="alert" className="text-sm text-[#a33]">
          {errorMsg}
        </p>
      )}

      <button type="submit" disabled={status === "loading"} className="btn w-full justify-center disabled:opacity-60 sm:w-auto">
        {status === "loading" ? "Enviando…" : "Solicitar disponibilidade"}
      </button>
    </form>
  );
}
