type WordmarkProps = {
  compact?: boolean;
  light?: boolean;
};

export function Wordmark({ compact = false, light = false }: WordmarkProps) {
  return (
    <span
      aria-label="Divina Salsa Restaurante"
      className={`wordmark ${compact ? "wordmark--compact" : ""} ${
        light ? "wordmark--light" : ""
      }`}
    >
      <span>Divina</span>
      <span>Salsa</span>
      <small>Restaurante</small>
    </span>
  );
}
