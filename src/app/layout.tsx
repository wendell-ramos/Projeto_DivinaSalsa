import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Divina Salsa Restaurante | Pedra Branca",
    template: "%s | Divina Salsa Restaurante",
  },
  description:
    "Gastronomia contemporânea, frutos do mar, carnes, massas e risotos no Passeio Pedra Branca, em Palhoça.",
  metadataBase: new URL("https://divinasalsarestaurante.com.br"),
  openGraph: {
    title: "Divina Salsa Restaurante",
    description:
      "Uma experiência gastronômica no coração do Passeio Pedra Branca.",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
