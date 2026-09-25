import type { Metadata } from "next";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { isSiteIndexable, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Divina Salsa Restaurante | Pedra Branca",
    template: "%s | Divina Salsa Restaurante",
  },
  description:
    "Gastronomia contemporânea, frutos do mar, carnes, massas e risotos no Passeio Pedra Branca, em Palhoça.",
  metadataBase: new URL(`${siteUrl}/`),
  applicationName: "Divina Salsa Restaurante",
  keywords: [
    "Divina Salsa Restaurante",
    "restaurante em Palhoça",
    "restaurante Pedra Branca",
    "frutos do mar",
    "massas e risotos",
    "eventos em Palhoça",
  ],
  category: "restaurante",
  robots: {
    index: isSiteIndexable,
    follow: isSiteIndexable,
    googleBot: {
      index: isSiteIndexable,
      follow: isSiteIndexable,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
