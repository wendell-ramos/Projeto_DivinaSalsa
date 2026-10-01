/**
 * Serializa dados estruturados sem permitir que um valor encerre a tag script.
 * Isso também protege o JSON-LD caso textos passem a vir do painel no futuro.
 */
export function serializeJsonLd(value: unknown): string {
  return JSON.stringify(value)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
