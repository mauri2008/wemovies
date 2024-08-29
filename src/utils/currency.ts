function formatCurrencyToBRL(value: number): string {
  if (!value) return "R$ -";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export { formatCurrencyToBRL };
