import { pricingRules, type PricingRule } from "./pricing-config";

export function getPricingRule(
  platform: string,
  service: string
): PricingRule | null {
  const rule = pricingRules.find(
    (item) =>
      item.active &&
      item.platform.toLowerCase() === platform.toLowerCase() &&
      item.service.toLowerCase() === service.toLowerCase()
  );

  return rule ?? null;
}
