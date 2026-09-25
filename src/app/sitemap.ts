import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/cardapio/", priority: 0.9 },
    { path: "/espaco/", priority: 0.8 },
    { path: "/eventos/", priority: 0.8 },
    { path: "/contato/", priority: 0.8 },
  ];

  return pages.map(({ path, priority }) => ({
    url: absoluteUrl(path),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
