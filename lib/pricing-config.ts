export type PricingRule = {
  service: string;
  platform: string;
  mode: "quantity" | "budget";
  rate: number;
  minimumQuantity?: number;
  minimumCampaignValue: number;
  active: boolean;
};

export const pricingRules: PricingRule[] = [
  {
    service: "Video Views",
    platform: "YouTube",
    mode: "quantity",
    rate: 1,
    minimumQuantity: 100,
    minimumCampaignValue: 2500,
    active: true,
  },
  {
    service: "Likes",
    platform: "YouTube",
    mode: "quantity",
    rate: 2,
    minimumQuantity: 100,
    minimumCampaignValue: 2500,
    active: true,
  },
  {
    service: "Subscribers",
    platform: "YouTube",
    mode: "quantity",
    rate: 10,
    minimumQuantity: 50,
    minimumCampaignValue: 2500,
    active: true,
  },
];
