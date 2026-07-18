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
