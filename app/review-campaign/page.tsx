"use client";

import Link from "next/link";
import styles from "./review-campaign.module.css";

export default function ReviewCampaignPage() {
  const campaign = {
    type: "Video Promotion",
    platform: "YouTube",
    service: "Video Views",
    destination: "https://youtube.com/",
    quantity: 500,
    campaignPrice: 2500,
    processingFee: 0,
    total: 2500,
    duration: "Estimated period based on provider configuration",
  };

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <Link href="/create-campaign" className={styles.back}>
          ← Back to Campaigns
        </Link>

        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>PROMVANTA</p>
            <h1>Review Campaign</h1>
            <p>Check your campaign details before payment.</p>
          </div>

          <span className={styles.status}>Pending Payment</span>
        </div>

        <section className={styles.card}>
          <h2>Campaign Details</h2>

          <div className={styles.row}>
            <span>Campaign Type</span>
            <strong>{campaign.type}</strong>
          </div>

          <div className={styles.row}>
            <span>Platform</span>
            <strong>{campaign.platform}</strong>
          </div>

          <div className={styles.row}>
            <span>Goal</span>
            <strong>{campaign.service}</strong>
          </div>

          <div className={styles.row}>
            <span>Destination</span>
            <strong className={styles.destination}>
              {campaign.destination}
            </strong>
          </div>

          <div className={styles.row}>
            <span>Quantity Needed</span>
            <strong>{campaign.quantity.toLocaleString()}</strong>
          </div>

          <div className={styles.row}>
            <span>Campaign Period</span>
            <strong>{campaign.duration}</strong>
          </div>
        </section>

        <section className={styles.card}>
          <h2>Payment Summary</h2>

          <div className={styles.row}>
            <span>Campaign Amount</span>
            <strong>₦{campaign.campaignPrice.toLocaleString()}</strong>
          </div>

          <div className={styles.row}>
            <span>Processing Fee</span>
            <strong>₦{campaign.processingFee.toLocaleString()}</strong>
          </div>

          <div className={styles.total}>
            <span>Total</span>
            <strong>₦{campaign.total.toLocaleString()}</strong>
          </div>

          <p className={styles.note}>
            Your payment will only activate the campaign after PROMVANTA
            verifies the payment successfully.
          </p>

          <button
            type="button"
            className={styles.payButton}
            onClick={() => {
              alert(
                "Secure payment will be connected here after the payment provider is configured."
              );
            }}
          >
            Pay Securely
          </button>

          <p className={styles.secure}>
            Secure payment verification • No provider credentials exposed
          </p>
        </section>
      </div>
    </main>
  );
            }
