import type { Metadata } from "next";

const localUrl = "http://localhost:3000";

export const siteUrl = (process.env.SITE_URL ?? localUrl).replace(/\/+$/, "");
export const isSiteIndexable = process.env.SITE_INDEXABLE === "true";

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteUrl}${normalizedPath}`;
}

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
  image?: string;
  imageAlt?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  absoluteTitle = false,
  image = "/images/optimized/camarao-tropical.webp",
  imageAlt = "Camarão Tropical servido pelo Divina Salsa Restaurante",
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path);
  const socialImage = absoluteUrl(image);
  const socialTitle = absoluteTitle
    ? title
    : `${title} | Divina Salsa Restaurante`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description,
      url: canonical,
      siteName: "Divina Salsa Restaurante",
      locale: "pt_BR",
      type: "website",
      images: [
        {
          url: socialImage,
          alt: imageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage],
    },
  };
}
