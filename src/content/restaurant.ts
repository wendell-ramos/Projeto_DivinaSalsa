const whatsappBase = "https://wa.me/554832830019";

function whatsappLink(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}

export const restaurant = {
  name: "Divina Salsa Restaurante",
  shortName: "Divina Salsa",
  since: 2016,
  description:
    "Gastronomia contemporânea com a tradição do sabor, no coração da Pedra Branca.",
  address: "Rua da Universidade, Av. Pedra Branca, 346, Palhoça - SC, 88137-074",
  phone: "(48) 3283.0019",
  phoneHref: "tel:+554832830019",
  whatsapp: whatsappLink("Olá! Gostaria de mais informações sobre o Divina Salsa."),
  reservation: whatsappLink(
    "Olá! Gostaria de fazer uma reserva no Divina Salsa.\n\nData:\nHorário:\nNúmero de pessoas:",
  ),
  eventContact: whatsappLink(
    "Olá! Gostaria de conversar sobre um evento no Divina Salsa. Posso enviar a data, o horário e a estimativa de convidados?",
  ),
  instagram: "https://www.instagram.com/divinasalsa/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=-27.6226382%2C-48.6779509",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3535.060650115729!2d-48.6779509!3d-27.622638199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x952735821c3e9d5b%3A0xb920859c4e8ce484!2sDivina%20Salsa%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1789661235807!5m2!1spt-BR!2sbr",
  ifood:
    "https://www.ifood.com.br/delivery/palhoca-sc/divina-salsa-restaurante-pedra-branca/a98ac1e8-b1f5-4374-bf46-d5d95de6e611?utm_medium=share",
  hours: [
    { days: "Domingo e segunda", time: "11h30 às 15h" },
    { days: "Terça a sábado", time: "11h30 às 15h · 18h às 20h30" },
  ],
} as const;

export const menuHighlights = [
  {
    name: "Camarão Tropical",
    category: "Frutos do mar",
    description:
      "Camarões, abacaxi, leite de coco e temperos da casa em uma combinação marcante.",
    image: "/images/optimized/camarao-tropical.webp",
  },
  {
    name: "Polvo Pedra Branca",
    category: "Pescados",
    description:
      "Polvo grelhado com ervas finas, alho e purê de mandioquinha.",
    image: "/images/optimized/polvo-pedra-branca.webp",
  },
  {
    name: "Risoto de Camarão",
    category: "Massas e risotos",
    description:
      "Arroz arbóreo cremoso, camarões e o equilíbrio dos sabores da casa.",
    image: "/images/optimized/risoto-camarao.webp",
  },
] as const;
