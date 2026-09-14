"use client";

import Link from "next/link";

export default function CampaignsPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fc",
        color: "#171b3a",
        padding: "32px",
        fontFamily:
          'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <Link
          href="/dashboard"
          style={{
            color: "#5b4df5",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          ← Back to Dashboard
        </Link>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div>
            <div
              style={{
                color: "#6556e8",
                fontSize: 13,
                fontWeight: 750,
                marginBottom: 7,
              }}
            >
              Campaigns
            </div>

            <h1
              style={{
                margin: 0,
                fontSize: 36,
                letterSpacing: "-.8px",
              }}
            >
              My Campaigns
            </h1>

            <p style={{ color: "#747c8e" }}>
              Manage and track your promotion campaigns.
            </p>
          </div>

          <Link href="/create-campaign">
            <button
              style={{
                border: 0,
                borderRadius: 10,
                padding: "12px 18px",
                background: "#5b4df5",
                color: "#fff",
                fontWeight: 750,
              }}
            >
              Create Campaign
            </button>
          </Link>
        </div>

        <div
          style={{
            marginTop: 25,
            background: "#fff",
            border: "1px solid #e7e9f0",
            borderRadius: 16,
            padding: 25,
            minHeight: 300,
            display: "grid",
            placeItems: "center",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                background: "#f0eeff",
                color: "#5b4df5",
                display: "grid",
                placeItems: "center",
                margin: "0 auto 14px",
                fontSize: 22,
              }}
            >
              ＋
            </div>

            <strong style={{ fontSize: 18 }}>
              No campaigns yet
            </strong>

            <p style={{ color: "#858c9d" }}>
              Your campaigns will appear here after you create one.
            </p>

            <Link href="/create-campaign">
              <button
                style={{
                  border: 0,
                  borderRadius: 10,
                  padding: "12px 18px",
                  background: "#5b4df5",
                  color: "#fff",
                  fontWeight: 750,
                  marginTop: 8,
                }}
              >
                Create Your First Campaign
              </button>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
                }
