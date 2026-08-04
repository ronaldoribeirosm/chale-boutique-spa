// Dados de demonstração — nome e endereço vêm dos docs de planejamento do projeto.
// TODO antes de publicar com a marca real: confirmar autorização do anfitrião,
// trocar telefone/WhatsApp placeholder pelo número real, e trocar SITE_URL pelo domínio comprado.

export const SITE_URL = "https://chaleboutiquespa.com.br";

export const site = {
  name: "Chalé Boutique Spa",
  tagline: "Sauna seca, jacuzzi, rede suspensa",
  city: "Campos do Jordão",
  state: "SP",
  address: "Avenida dos Alpes, 2550 — Campos do Jordão/SP",
  host: "Gabriel",
  bookingRating: 9.4,
  bookingUrl: "https://www.booking.com/",
  // Sistema de reservas oficial (Desbravador) — onde a reserva é de fato
  // finalizada (preço real, disponibilidade real, pagamento).
  desbravadorUrl: "https://reservas.desbravador.com.br/hotel-app/chale-boutique",
  // Placeholder — substituir pelo número real do anfitrião antes de publicar.
  whatsapp: "5512999999999",
  email: "contato@chaleboutiquespa.com.br",
  instagram: "https://instagram.com/",
  geo: {
    lat: -22.7394,
    lng: -45.5844,
  },
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage = `Olá! Vi o ${site.name} no site e queria saber sobre disponibilidade.`;

function formatDateBR(date: Date) {
  return date.toLocaleDateString("pt-BR");
}

export function whatsappMessageForDates(checkIn: Date, checkOut: Date) {
  return `Olá! Vi o ${site.name} no site e queria saber sobre disponibilidade de ${formatDateBR(
    checkIn,
  )} a ${formatDateBR(checkOut)}.`;
}

function formatDateISO(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

// Formato de URL observado no fluxo real do site da Desbravador (seleção de
// datas na home → página de acomodações e tarifas). Leva check-in/check-out
// prontos; o hóspede ainda precisa completar o reCAPTCHA deles pra ver os
// quartos — isso não dá pra pular, e não tentamos.
export function desbravadorReservationUrl(checkIn: Date, checkOut: Date, adults = 2) {
  const params = new URLSearchParams({
    checkin: formatDateISO(checkIn),
    checkout: formatDateISO(checkOut),
    adults: String(adults),
    child1: "0",
    child2: "0",
    child3: "0",
    voucher: "",
    resident: "0",
  });
  return `${site.desbravadorUrl}/reservation?${params.toString()}`;
}
