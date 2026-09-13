export function calculateQuantityPrice(
  quantity: number,
  rate: number,
  minimumCampaignValue = 2500
) {
  const subtotal = quantity * rate;

  return Math.max(subtotal, minimumCampaignValue);
}

export function calculateBudgetEstimate(
  budget: number,
  estimatedRate: number
) {
  if (estimatedRate <= 0) return 0;

  return Math.floor(budget / estimatedRate);
}
