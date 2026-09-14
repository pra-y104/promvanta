"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = [
  ["Home", "/dashboard"],
  ["Campaigns", "/campaigns"],
  ["Create Campaign", "/create-campaign"],
  ["Wallet", "/wallet"],
  ["Results", "/results"],
  ["Transactions", "/transactions"],
  ["Rewards", "/rewards"],
  ["Invite & Earn", "/invite"],
  ["Support", "/support"],
  ["Profile & Settings", "/profile"],
];

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

const services = [
  "Followers",
  "Reach",
  "Likes",
  "Comments",
  "Shares",
  "Engagement",
  "Audience Growth",
  "Content Reach",
  "Video Views",
  "Subscribers",
  "Music Discovery",
  "Music Reach",
  "Website Visits",
  "Landing-Page Traffic",
  "Brand Awareness",
  "Leads / Sign-ups",
  "Sales / Conversions",
  "Local Promotion",
  "App Visits",
  "App Installs",
  "Sign-ups",
  "Conversions",
];

export default function HomePage() {
  const [section, setSection] = useState("home");
  const [campaignType, setCampaignType] = useState(campaignTypes[0]);
  const [service, setService] = useState("Reach");
  const [quantity, setQuantity] = useState("");

  const displaySection = (name: string) => {
    setSection(name);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="page">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          background: #f7f8fc;
          color: #171b3a;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        a {
          text-decoration: none;
          color: inherit;
        }

        button,
        input,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .page {
          min-height: 100vh;
          background: #f7f8fc;
        }

        .topbar {
          height: 72px;
          background: white;
          border-bottom: 1px solid #e9ebf3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.7px;
          color: #171b3a;
        }

        .brand span {
          color: #5b4df5;
        }

        .tagline {
          font-size: 12px;
          color: #737a91;
          margin-top: 2px;
        }

        .top-actions {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .login {
          color: #5b4df5;
          font-weight: 700;
        }

        .primary {
          border: 0;
          background: #5b4df5;
          color: white;
          padding: 12px 18px;
          border-radius: 11px;
          font-weight: 800;
        }

        .layout {
          display: flex;
          min-height: calc(100vh - 72px);
        }

        .sidebar {
          width: 245px;
          background: white;
          border-right: 1px solid #e9ebf3;
          padding: 22px 14px;
          flex-shrink: 0;
        }

        .side-label {
          color: #9499ab;
          font-size: 11px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.8px;
          padding: 0 12px;
          margin: 8px 0 10px;
        }

        .nav {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }

        .nav button {
          width: 100%;
          text-align: left;
          border: 0;
          background: transparent;
          color: #596078;
          padding: 12px;
          border-radius: 10px;
          font-weight: 650;
        }

        .nav button:hover,
        .nav button.active {
          background: #f0eeff;
          color: #5b4df5;
        }

        .content {
          width: 100%;
          max-width: 1250px;
          margin: 0 auto;
          padding: 34px;
        }

        .hero {
          background: linear-gradient(135deg, #ffffff, #f2f0ff);
          border: 1px solid #e7e5f7;
          border-radius: 24px;
          padding: 38px;
          margin-bottom: 24px;
        }

        .eyebrow {
          color: #5b4df5;
          font-size: 13px;
          font-weight: 850;
          margin-bottom: 10px;
        }

        h1 {
          font-size: clamp(32px, 5vw, 52px);
          line-height: 1.05;
          letter-spacing: -2px;
          margin: 0;
        }

        .hero p {
          color: #69708a;
          max-width: 650px;
          line-height: 1.7;
          margin: 16px 0 24px;
          font-size: 16px;
        }

        .trust {
          margin-top: 15px;
          color: #50586f;
          font-size: 13px;
          font-weight: 700;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        .card {
          background: white;
          border: 1px solid #e8eaf2;
          border-radius: 18px;
          padding: 22px;
          box-shadow: 0 8px 28px rgba(26, 31, 67, 0.045);
        }

        .stat-label {
          color: #777e94;
          font-size: 13px;
          font-weight: 650;
        }

        .stat-value {
          margin-top: 8px;
          font-size: 27px;
          font-weight: 850;
          letter-spacing: -0.7px;
        }

        .section-title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 15px;
          margin-bottom: 14px;
        }

        .section-title h2 {
          margin: 0;
          font-size: 21px;
        }

        .muted {
          color: #747b91;
          line-height: 1.6;
        }

        .empty {
          text-align: center;
          padding: 45px 20px;
        }

        .empty-icon {
          width: 52px;
          height: 52px;
          margin: 0 auto 14px;
          border-radius: 15px;
          background: #f0eeff;
          display: grid;
          place-items: center;
          color: #5b4df5;
          font-size: 23px;
          font-weight: 900;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .form-card {
          background: white;
          border: 1px solid #e8eaf2;
          border-radius: 20px;
          padding: 24px;
        }

        label {
          display: block;
          color: #555d75;
          font-size: 13px;
          font-weight: 750;
          margin-bottom: 8px;
        }

        select,
        input {
          width: 100%;
          border: 1px solid #dfe2ec;
          border-radius: 11px;
          padding: 13px;
          background: white;
          color: #171b3a;
          outline: none;
        }

        select:focus,
        input:focus {
          border-color: #5b4df5;
          box-shadow: 0 0 0 3px rgba(91, 77, 245, 0.1);
        }

        .field {
          margin-bottom: 18px;
        }

        .price-box {
          background: #f6f5ff;
          border: 1px solid #e4e1ff;
          border-radius: 15px;
          padding: 18px;
          margin-top: 20px;
        }

        .price {
          font-size: 30px;
          font-weight: 900;
          color: #5b4df5;
        }

        .demo {
          display: inline-block;
          background: #fff4cf;
          color: #896700;
          border-radius: 999px;
          padding: 5px 9px;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .category {
          background: white;
          border: 1px solid #e8eaf2;
          border-radius: 16px;
          padding: 20px;
          font-weight: 750;
        }

        .category small {
          display: block;
          color: #7b8298;
          font-weight: 500;
          margin-top: 7px;
          line-height: 1.4;
        }

        .footer {
          margin-top: 40px;
          padding: 25px 0;
          border-top: 1px solid #e5e7ef;
          color: #777e94;
          font-size: 13px;
        }

        @media (max-width: 900px) {
          .sidebar {
            display: none;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 600px) {
          .topbar {
            padding: 0 16px;
          }

          .tagline {
            display: none;
          }

          .login {
            display: none;
          }

          .content {
            padding: 18px 14px 35px;
          }

          .hero {
            padding: 25px 20px;
            border-radius: 19px;
          }

          h1 {
            letter-spacing: -1.2px;
          }

          .stats,
          .grid,
          .category-grid {
            grid-template-columns: 1fr;
          }

          .card,
          .form-card {
            padding: 18px;
          }
        }
      `}</style>

      <header className="topbar">
        <div>
          <div className="brand">
            PROM<span>VANTA</span>
          </div>
          <div className="tagline">Legitimate promotion, real tracking</div>
        </div>

        <div className="top-actions">
          <Link className="login" href="/login">
            Sign in
          </Link>

          <Link href="/signup">
            <button className="primary">Create Account</button>
          </Link>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <div className="side-label">PROMVANTA</div>

          <nav className="nav">
            {navItems.map(([name, href]) => (
              <button
                key={name}
                className={section === name ? "active" : ""}
                onClick={() => {
                  setSection(name);
                  if (name === "Home") displaySection("home");
                }}
              >
                {name}
              </button>
            ))}
          </nav>
        </aside>

        <section className="content">
          {section === "home" && (
            <>
              <div className="hero">
                <div className="eyebrow">
                  LEGITIMATE DIGITAL PROMOTION
                </div>

                <h1>Promote smarter. Reach further.</h1>

                <p>
                  Launch legitimate digital promotion campaigns, manage your
                  budget and track real campaign results from one simple
                  platform.
                </p>

                <Link href="/create-campaign">
                  <button className="primary">Create a Campaign</button>
                </Link>

                <div className="trust">
                  ✓ No fake engagement. No bots. Real campaigns only.
                </div>
              </div>

              <div className="stats">
                <div className="card">
                  <div className="stat-label">Wallet Balance</div>
                  <div className="stat-value">₦0.00</div>
                </div>

                <div className="card">
                  <div className="stat-label">Active Campaigns</div>
                  <div className="stat-value">0</div>
                </div>

                <div className="card">
                  <div className="stat-label">Total Spend</div>
                  <div className="stat-value">₦0.00</div>
                </div>

                <div className="card">
                  <div className="stat-label">Completed Campaigns</div>
                  <div className="stat-value">0</div>
                </div>
              </div>

              <div className="card">
                <div className="section-title">
                  <h2>Campaign Performance</h2>
                </div>

                <div className="empty">
                  <div className="empty-icon">↗</div>
                  <h3>No campaign data yet</h3>
                  <p className="muted">
                    Your real campaign performance will appear here after a
                    campaign has been created and provider data is available.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 24 }}>
                <div className="section-title">
                  <h2>Campaign Categories</h2>
                </div>

                <div className="category-grid">
                  <div className="category">
                    Social Media
                    <small>Promote eligible social content and audiences.</small>
                  </div>

                  <div className="category">
                    Video Promotion
                    <small>Promote videos with legitimate advertising.</small>
                  </div>

                  <div className="category">
                    Music Promotion
                    <small>Increase discovery and legitimate reach.</small>
                  </div>

                  <div className="category">
                    Website Promotion
                    <small>Drive visitors to eligible websites.</small>
                  </div>

                  <div className="category">
                    Product Promotion
                    <small>Promote products and campaigns.</small>
                  </div>

                  <div className="category">
                    Business Promotion
                    <small>Build awareness and reach for businesses.</small>
                  </div>

                  <div className="category">
                    App Promotion
                    <small>Promote eligible apps and landing pages.</small>
                  </div>

                  <div className="category">
                    Creator Promotion
                    <small>Grow legitimate creator campaigns.</small>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: 24 }} className="grid">
                <div className="card">
                  <h2>Transparent pricing</h2>
                  <p className="muted">
                    Tell PROMVANTA what you need. Pricing is calculated from
                    configured service rules rather than permanent public
                    packages.
                  </p>
                </div>

                <div className="card">
                  <h2>Real tracking</h2>
                  <p className="muted">
                    Results are shown only when valid fulfillment or provider
                    data exists. No fabricated statistics.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: 24 }} className="card">
                <span className="demo">DEMO DATA</span>
                <h2>Example dashboard</h2>
                <p className="muted">
                  Any example figures used for demonstrations are clearly
                  labeled and are never copied into real customer accounts.
                </p>
              </div>
            </>
          )}

          {section !== "home" && (
            <>
              <div className="hero">
                <div className="eyebrow">PROMVANTA</div>

                <h1>{section}</h1>

                <p>
                  This area is part of the PROMVANTA customer experience.
                  Your real account information will appear here after secure
                  authentication and database integration are connected.
                </p>

                <Link
                  href={
                    navItems.find((item) => item[0] === section)?.[1] ||
                    "/dashboard"
                  }
                >
                  <button className="primary">Open {section}</button>
                </Link>
              </div>

              {section === "Create Campaign" && (
                <div className="grid">
                  <div className="form-card">
                    <h2>Start a campaign</h2>

                    <div className="field">
                      <label>Campaign Type</label>

                      <select
                        value={campaignType}
                        onChange={(e) => setCampaignType(e.target.value)}
                      >
                        {campaignTypes.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label>Goal / Service</label>

                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                      >
                        {services.map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                    </div>

                    <div className="field">
                      <label>Quantity Needed</label>

                      <input
                        type="number"
                        min="0"
                        placeholder="Enter quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                    </div>

                    <Link href="/create-campaign">
                      <button className="primary">
                        Continue to Campaign Setup
                      </button>
                    </Link>
                  </div>

                  <div className="form-card">
                    <h2>Important</h2>

                    <p className="muted">
                      PROMVANTA uses legitimate fulfillment. Available goals,
                      pricing, minimums, campaign periods and provider
                      availability will be determined by the configured
                      system.
                    </p>

                    <div className="price-box">
                      <div className="stat-label">Campaign minimum</div>
                      <div className="price">₦2,500</div>
                      <div className="muted">
                        Overall minimum campaign value.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {section !== "Create Campaign" && (
                <div className="card">
                  <div className="empty">
                    <div className="empty-icon">✓</div>
                    <h3>No data to display yet</h3>
                    <p className="muted">
                      New customer accounts begin with genuine zero-state
                      information. Real records will appear when they exist.
                    </p>
                  </div>
                </div>
              )}
            </>
          )}

          <footer className="footer">
            <strong>PROMVANTA</strong> — Legitimate promotion, real tracking.
            <br />
            No fake engagement. No bots. Real campaigns only.
          </footer>
        </section>
      </div>
    </main>
  );
  }
