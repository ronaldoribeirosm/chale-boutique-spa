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
  // finalizada (preço real, disponibilidade real, pagamento). Não há parâmetro
  // de URL documentado para pré-preencher check-in/check-out nessa página, então
  // o link abre a busca em branco e a data selecionada aqui vai só na mensagem
  // do WhatsApp como referência.
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
