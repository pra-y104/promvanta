"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./create-campaign.module.css";

const campaignTypes = [
  "Social Media Promotion",
  "Video Promotion",
  "Music Promotion",
  "Website Promotion",
  "Product Promotion",
  "Business Promotion",
  "App Promotion",
  "Creator Promotion",
];

const platforms = [
  "YouTube",
  "TikTok",
  "Instagram",
  "Facebook",
  "X",
  "Google",
  "Website",
  "Music Platform",
];

const servicesByType: Record<string, string[]> = {
  "Social Media Promotion": [
    "Followers",
    "Reach",
    "Likes",
    "Comments",
    "Shares",
    "Engagement",
    "Audience Growth",
    "Content Reach",
  ],

  "Video Promotion": [
    "Video Views",
    "Reach",
    "Engagement",
    "Subscribers",
    "Likes",
    "Comments",
    "Shares",
    "Audience Growth",
  ],

  "Music Promotion": [
    "Music Discovery",
    "Music Reach",
    "Video Views",
    "Audience Growth",
    "Followers",
    "Subscribers",
    "Engagement",
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

const budgetServices = [
  "Reach",
  "Brand Awareness",
  "Website Visits",
  "Landing-Page Traffic",
  "Leads",
  "Leads / Sign-ups",
  "Sales / Conversions",
  "Conversions",
  "Local Promotion",
  "Music Discovery",
  "Music Reach",
];

export default function CreateCampaignPage() {
  const router = useRouter();

  const [campaignType, setCampaignType] = useState("");
  const [platform, setPlatform] = useState("");
  const [destination, setDestination] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");

  const services = campaignType
    ? servicesByType[campaignType] || []
    : [];

  const isBudgetBased = budgetServices.includes(service);

  const canContinue =
    campaignType &&
    destination &&
    service &&
    (isBudgetBased ? Number(budget) > 0 : Number(quantity) > 0);

  function continueToReview() {
    if (!canContinue) return;

    const campaign = {
      campaignType,
      platform,
      destination,
      service,
      mode: isBudgetBased ? "budget" : "quantity",
      quantity: isBudgetBased ? null : Number(quantity),
      budget: isBudgetBased ? Number(budget) : null,
    };

    sessionStorage.setItem(
      "promvanta_campaign",
      JSON.stringify(campaign)
    );

    router.push("/review-campaign");
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>PROMVANTA</p>

          <h1>Create Campaign</h1>

          <p className={styles.subtitle}>
            Tell us what you want to promote and what you want to achieve.
            PROMVANTA will calculate the appropriate campaign price.
          </p>
        </div>

        <section className={styles.card}>
          <div className={styles.step}>
            <span>1</span>
            <div>
              <h2>Campaign Type</h2>
              <p>What are you promoting?</p>
            </div>
          </div>

          <div className={styles.options}>
            {campaignTypes.map((item) => (
              <button
                key={item}
                type="button"
                className={
                  campaignType === item
                    ? `${styles.option} ${styles.selected}`
                    : styles.option
                }
                onClick={() => {
                  setCampaignType(item);
                  setService("");
                }}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {campaignType && (
          <section className={styles.card}>
            <div className={styles.step}>
              <span>2</span>
              <div>
                <h2>Platform / Destination</h2>
                <p>Select where your promotion will happen.</p>
              </div>
            </div>

            <div className={styles.options}>
              {platforms.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    platform === item
                      ? `${styles.option} ${styles.selected}`
                      : styles.option
                  }
                  onClick={() => setPlatform(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {campaignType && (
          <section className={styles.card}>
            <div className={styles.step}>
              <span>3</span>
              <div>
                <h2>Promotion Link</h2>
                <p>Enter the public link or destination you want to promote.</p>
              </div>
            </div>

            <input
              className={styles.input}
              type="url"
              placeholder="https://example.com/your-content"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            />
          </section>
        )}

        {campaignType && destination && (
          <section className={styles.card}>
            <div className={styles.step}>
              <span>4</span>
              <div>
                <h2>Choose Your Goal</h2>
                <p>Select one specific promotion goal.</p>
              </div>
            </div>

            <div className={styles.options}>
              {services.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={
                    service === item
                      ? `${styles.option} ${styles.selected}`
                      : styles.option
                  }
                  onClick={() => setService(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {service && (
          <section className={styles.card}>
            <div className={styles.step}>
              <span>5</span>
              <div>
                <h2>
                  {isBudgetBased
                    ? "Campaign Budget"
                    : "Quantity Needed"}
                </h2>

                <p>
                  {isBudgetBased
                    ? "Set the amount you want to invest in this campaign."
                    : "Tell PROMVANTA how much promotion you need."}
                </p>
              </div>
            </div>

            {isBudgetBased ? (
              <div className={styles.inputGroup}>
                <label>Campaign Budget</label>

                <div className={styles.amountInput}>
                  <span>₦</span>

                  <input
                    type="number"
                    min="2500"
                    placeholder="2500"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                  />
                </div>

                <small>
                  Minimum campaign value: ₦2,500
                </small>
              </div>
            ) : (
              <div className={styles.inputGroup}>
                <label>Quantity Needed</label>

                <input
                  className={styles.input}
                  type="number"
                  min="1"
                  placeholder="Enter quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                />

                <small>
                  PROMVANTA will calculate the price from the configured
                  service rate.
                </small>
              </div>
            )}
          </section>
        )}

        {canContinue && (
          <section className={styles.continueSection}>
            <button
              type="button"
              className={styles.continueButton}
              onClick={continueToReview}
            >
              Continue to Review →
            </button>

            <p>
              Your final price will be shown before payment.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
