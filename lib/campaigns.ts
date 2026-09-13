export const campaignTypes = [
  "Social Media Promotion",
  "Video Promotion",
  "Music Promotion",
  "Website Promotion",
  "Product Promotion",
  "Business Promotion",
  "App Promotion",
  "Creator Promotion",
];

export const servicesByCampaignType: Record<string, string[]> = {
  "Social Media Promotion": [
    "Followers",
    "Reach",
    "Likes",
    "Comments",
    "Shares",
    "Engagement",
    "Audience Growth",
    "Content Reach",
    "Video Views",
  ],

  "Video Promotion": [
    "Video Views",
    "Reach",
    "Engagement",
    "Audience Growth",
    "Subscribers",
    "Likes",
    "Comments",
    "Shares",
  ],

  "Music Promotion": [
    "Music Discovery",
    "Music/Content Reach",
    "Video Views",
    "Audience Growth",
    "Followers",
    "Subscribers",
    "Engagement",
    "Streaming Promotion",
  ],

  "Website Promotion": [
    "Website Visits",
    "Landing-Page Traffic",
    "Brand Awareness",
    "Leads / Sign-ups",
    "Sales / Conversions",
  ],

  "Product Promotion": [
    "Reach",
    "Brand Awareness",
    "Website Visits",
    "Leads",
    "Sales / Conversions",
    "Engagement",
  ],

  "Business Promotion": [
    "Brand Awareness",
    "Reach",
    "Website Visits",
    "Leads",
    "Local Promotion",
    "Sales / Conversions",
  ],

  "App Promotion": [
    "App Visits",
    "App Installs",
    "Sign-ups",
    "Engagement",
    "Brand Awareness",
    "Conversions",
  ],

  "Creator Promotion": [
    "Followers",
    "Subscribers",
    "Video Views",
    "Reach",
    "Engagement",
    "Audience Growth",
    "Content Reach",
  ],
};

export function getServicesForCampaignType(campaignType: string) {
  return servicesByCampaignType[campaignType] ?? [];
}
