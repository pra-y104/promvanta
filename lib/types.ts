export type CampaignStatus =
  | "draft"
  | "pending_payment"
  | "paid"
  | "processing"
  | "active"
  | "delayed"
  | "completed"
  | "failed"
  | "cancelled"
  | "refunded";

export type CampaignType =
  | "social"
  | "video"
  | "music"
  | "website"
  | "product"
  | "business"
  | "app"
  | "creator";

export type PricingMode = "quantity" | "budget";

export type Campaign = {
  id: string;
  title: string;
  type: CampaignType;
  service: string;
  platform?: string;
  status: CampaignStatus;
  pricingMode: PricingMode;
  quantity?: number;
  budget?: number;
  total: number;
};
