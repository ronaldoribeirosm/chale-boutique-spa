export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "hospedes",
    question: "Para quantas pessoas é o chalé?",
    answer:
      "O chalé foi pensado para casais. Conseguimos confirmar a capacidade exata com o anfitrião antes da reserva — pergunte pelo WhatsApp com a data que você tem em mente.",
  },
  {
    id: "cafe",
    question: "O café da manhã está incluso?",
    answer:
      "Sim. Café da manhã, além de um welcome de vinho, espumante e frutas na chegada, já está incluso na diária.",
  },
  {
    id: "checkin",
    question: "Qual o horário de check-in e check-out?",
    answer:
      "Check-in a partir das 15h, check-out até 12h. Late check-out costuma ser possível para quem reserva direto — combine no WhatsApp.",
  },
  {
    id: "sauna-privativa",
    question: "A sauna e a jacuzzi são privativas?",
    answer:
      "Sim, uso exclusivo dos hóspedes do chalé, sem horário marcado e sem dividir com outras unidades.",
  },
  {
    id: "pet",
    question: "Aceita pet?",
    answer:
      "Confirme com o anfitrião antes de reservar — a política pode variar conforme a época do ano.",
  },
  {
    id: "estacionamento",
    question: "Tem estacionamento?",
    answer: "Sim, vaga gratuita no próprio terreno.",
  },
  {
    id: "cancelamento",
    question: "Como funciona o cancelamento?",
    answer:
      "As regras completas estão na página de política de cancelamento, visível antes de qualquer pagamento.",
  },
];
