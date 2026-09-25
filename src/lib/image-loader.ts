"use client";

import type { ImageLoaderProps } from "next/image";
import variants from "./image-variants.json";

// Arquivos pré-gerados: funciona no export estático, sem API ou serviço pago.
export default function imageLoader({ src, width }: ImageLoaderProps): string {
  const match = src.match(/^(.*\/images\/optimized\/)([\w-]+)\.webp$/);
  if (!match) return src;
  const available = (variants as Record<string, number[]>)[match[2]];
  if (!available?.length) return src;
  const selected = available.find((size) => size >= width) ?? available[available.length - 1];
  return `${match[1]}responsive/${match[2]}-${selected}.webp`;
}
