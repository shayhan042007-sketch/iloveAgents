export function formatTokenCost(cost: number, perThousandRate: number): string {
  const calculated = cost * perThousandRate;
  if (calculated > 0 && calculated < 0.0001) {
    return "< $0.0001";
  }
  return `$${calculated.toFixed(4)}`;
}

export function formatCostShort(inputCost: number, outputCost: number): string {
  const total = inputCost + outputCost;
  if (total === 0) {
    return "$0.00";
  }
  return `$${total.toFixed(4)}`;
}
