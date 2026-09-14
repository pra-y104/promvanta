"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type Campaign = {
  campaignType: string;
  platform: string;
  destination: string;
  service: string;
  quantity?: number;
  budget?: number;
  amount: number;
};

export default function ReviewCampaignPage() {
  const [campaign, setCampaign] = useState<Campaign | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("promvanta_campaign");

    if (saved) {
      try {
        setCampaign(JSON.parse(saved));
      } catch {
        setCampaign(null);
      }
    }
  }, []);

  if (!campaign) {
    return (
      <main
        style={{
          minHeight: "100vh",
          background: "#f7f8fc",
          padding: "40px 20px",
          fontFamily:
            "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: 760,
            margin: "0 auto",
            background: "#fff",
            borderRadius: 20,
            padding: 32,
            textAlign: "center",
            boxShadow: "0 10px 30px rgba(20, 25, 60, 0.06)",
          }}
        >
          <h1 style={{ marginBottom: 10, color: "#171b3a" }}>
            Campaign not found
          </h1>

          <p style={{ color: "#69708a", marginBottom: 24 }}>
            Please return to campaign creation and try again.
          </p>

          <Link
            href="/create-campaign"
            style={{
              display: "inline-block",
              background: "#5b4df5",
              color: "#fff",
              padding: "13px 20px",
              borderRadius: 12,
              fontWeight: 700,
            }}
          >
            Create Campaign
          </Link>
        </div>
      </main>
    );
  }

  const total = Number(campaign.amount || 0);

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        color: "#171b3a",
        fontFamily:
          "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif",
        padding: "24px 16px 60px",
      }}
    >
      <div style={{ maxWidth: 850, margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginBottom: 28,
          }}
        >
          <Link
            href="/campaigns"
            style={{
              color: "#5b4df5",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            ← Back to Campaigns
          </Link>

          <span
            style={{
              background: "#fff7e6",
              color: "#a56800",
              padding: "8px 12px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 700,
            }}
          >
            Pending Payment
          </span>
        </div>

        <div style={{ marginBottom: 24 }}>
          <p
            style={{
              margin: "0 0 6px",
              color: "#5b4df5",
              fontWeight: 700,
              fontSize: 14,
            }}
          >
            Review Campaign
          </p>

          <h1
            style={{
              margin: 0,
              fontSize: "clamp(28px, 6vw, 42px)",
              lineHeight: 1.1,
              letterSpacing: "-1px",
            }}
          >
            Review your campaign
          </h1>

          <p
            style={{
              marginTop: 10,
              color: "#69708a",
              lineHeight: 1.6,
            }}
          >
            Check your campaign details carefully before proceeding to
            payment.
          </p>
        </div>

        <section
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 10px 30px rgba(20, 25, 60, 0.06)",
            marginBottom: 18,
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: 20,
              fontSize: 20,
            }}
          >
            Campaign Details
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
            }}
          >
            <Detail label="Campaign Type" value={campaign.campaignType} />

            {campaign.platform && (
              <Detail label="Platform" value={campaign.platform} />
            )}

            <Detail label="Goal" value={campaign.service} />

            {campaign.quantity !== undefined && (
              <Detail
                label="Quantity Needed"
                value={campaign.quantity.toLocaleString()}
              />
            )}

            {campaign.budget !== undefined && (
              <Detail
                label="Campaign Budget"
                value={`₦${campaign.budget.toLocaleString()}`}
              />
            )}
          </div>

          <div
            style={{
              marginTop: 20,
              padding: 16,
              background: "#f7f8fc",
              borderRadius: 14,
            }}
          >
            <div
              style={{
                fontSize: 13,
                color: "#69708a",
                marginBottom: 6,
              }}
            >
              Promotion Destination
            </div>

            <div
              style={{
                wordBreak: "break-word",
                fontWeight: 600,
              }}
            >
              {campaign.destination}
            </div>
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 10px 30px rgba(20, 25, 60, 0.06)",
            marginBottom: 18,
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: 18,
              fontSize: 20,
            }}
          >
            Campaign Period
          </h2>

          <div
            style={{
              padding: 16,
              background: "#f7f8fc",
              borderRadius: 14,
            }}
          >
            <strong>Estimated campaign period</strong>

            <p
              style={{
                margin: "6px 0 0",
                color: "#69708a",
                lineHeight: 1.5,
              }}
            >
              The campaign period will be determined by the configured
              service and legitimate fulfillment provider. Results are not
              guaranteed to arrive at an exact time.
            </p>
          </div>
        </section>

        <section
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: 24,
            boxShadow: "0 10px 30px rgba(20, 25, 60, 0.06)",
          }}
        >
          <h2
            style={{
              marginTop: 0,
              marginBottom: 18,
              fontSize: 20,
            }}
          >
            Payment Summary
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              paddingBottom: 14,
              borderBottom: "1px solid #eceef5",
            }}
          >
            <span style={{ color: "#69708a" }}>Campaign amount</span>

            <strong>₦{total.toLocaleString()}</strong>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              padding: "16px 0",
            }}
          >
            <span style={{ color: "#69708a" }}>Applicable charges</span>

            <span>Calculated at checkout</span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 20,
              paddingTop: 16,
              borderTop: "1px solid #eceef5",
              fontSize: 20,
            }}
          >
            <strong>Total</strong>

            <strong style={{ color: "#5b4df5" }}>
              ₦{total.toLocaleString()}
            </strong>
          </div>

          <button
            type="button"
            onClick={() => {
              alert(
                "Secure payment will be connected here. No payment has been processed."
              );
            }}
            style={{
              width: "100%",
              marginTop: 24,
              border: 0,
              borderRadius: 14,
              padding: "16px 20px",
              background: "#5b4df5",
              color: "#fff",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            Proceed to Secure Payment
          </button>

          <p
            style={{
              textAlign: "center",
              color: "#7a8198",
              fontSize: 13,
              marginTop: 12,
              lineHeight: 1.5,
            }}
          >
            Payment will only activate the campaign after successful
            server-side payment verification.
          </p>
        </section>
      </div>
    </main>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div
      style={{
        padding: 16,
        background: "#f7f8fc",
        borderRadius: 14,
      }}
    >
      <div
        style={{
          color: "#69708a",
          fontSize: 13,
          marginBottom: 6,
        }}
      >
        {label}
      </div>

      <strong>{value}</strong>
    </div>
  );
          }
