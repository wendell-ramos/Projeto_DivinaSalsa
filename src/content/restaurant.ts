export const restaurant = {
  name: "Divina Salsa Restaurante",
  shortName: "Divina Salsa",
  since: 2016,
  description:
    "Gastronomia contemporânea com a tradição do sabor, no coração da Pedra Branca.",
  address: "Passeio Pedra Branca, Palhoça - SC",
  phone: "(48) 3283.0019",
  phoneHref: "tel:+554832830019",
  whatsapp: "https://wa.me/554832830019",
  reservation: "https://wa.me/554832830019",
  instagram: "https://www.instagram.com/divinasalsa/",
  maps:
    "https://www.google.com/maps/search/?api=1&query=Divina+Salsa+Restaurante+Pedra+Branca+Palhoca+SC",
  ifood:
    "https://www.ifood.com.br/delivery/palhoca-sc/divina-salsa-restaurante-pedra-branca/",
  hours: [
    { days: "Domingo e segunda", time: "11h30 às 15h" },
    { days: "Terça a sábado", time: "11h30 às 15h · 18h às 20h30" },
  ],
} as const;

export const pendingRestaurantContent = [
  "Slogans oficiais",
  "Endereço completo com rua e número",
  "Texto institucional sobre a história da casa",
] as const;

export const menuHighlights = [
  {
    name: "Camarão Tropical",
    category: "Frutos do mar",
    description:
      "Camarões, abacaxi, leite de coco e temperos da casa em uma combinação marcante.",
    image: "/images/camarao-tropical.jpg",
  },
  {
    name: "Polvo Pedra Branca",
    category: "Pescados",
    description:
      "Polvo grelhado com ervas finas, alho e purê de mandioquinha.",
    image: "/images/polvo-pedra-branca.png",
  },
  {
    name: "Risoto de Camarão",
    category: "Massas e risotos",
    description:
      "Arroz arbóreo cremoso, camarões e o equilíbrio dos sabores da casa.",
    image: "/images/risoto-camarao.jpg",
  },
] as const;

export const experiences = [
  {
    number: "01",
    title: "Almoço com sabor",
    text: "Executivos, opções leves e pratos individuais para transformar a pausa do dia.",
  },
  {
    number: "02",
    title: "Encontros à mesa",
    text: "Pratos para compartilhar, carta de bebidas e um ambiente feito para ficar.",
  },
  {
    number: "03",
    title: "Momentos especiais",
    text: "Jantares, celebrações e experiências no coração do Passeio Pedra Branca.",
  },
] as const;
