import type { Campaign } from "./types";

let currentCampaign: Campaign | null = null;

export function setCurrentCampaign(campaign: Campaign) {
  currentCampaign = campaign;
}

export function getCurrentCampaign() {
  return currentCampaign;
}

export function clearCurrentCampaign() {
  currentCampaign = null;
}
