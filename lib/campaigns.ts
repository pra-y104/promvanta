import type { CampaignType } from "./types";

export const campaignTypes: {
  id: CampaignType;
  name: string;
  description: string;
}[] = [
  {
    id: "social",
    name: "Social Media Promotion",
    description: "Promote eligible social content and profiles.",
  },
  {
    id: "video",
    name: "Video Promotion",
    description: "Promote videos with legitimate advertising.",
  },
  {
    id: "music",
    name: "Music Promotion",
    description: "Promote music and music content.",
  },
  {
    id: "website",
    name: "Website Promotion",
    description: "Drive legitimate traffic and awareness.",
  },
  {
    id: "product",
    name: "Product Promotion",
    description: "Promote products and offers.",
  },
  {
    id: "business",
    name: "Business Promotion",
    description: "Increase legitimate business awareness.",
  },
  {
    id: "app",
    name: "App Promotion",
    description: "Promote eligible apps and conversions.",
  },
  {
    id: "creator",
    name: "Creator Promotion",
    description: "Help creators reach relevant audiences.",
  },
];
