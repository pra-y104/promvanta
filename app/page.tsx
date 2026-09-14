"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  ["Music Promotion", "Promote music and build legitimate discovery."],
  ["Video Promotion", "Reach more viewers through legitimate promotion."],
  ["Website Traffic", "Drive visitors to eligible websites and landing pages."],
  ["Social Content", "Promote eligible social content and audiences."],
  ["Product Promotion", "Put your products in front of relevant audiences."],
  ["Business Promotion", "Build awareness and reach for your business."],
  ["Brand Awareness", "Increase visibility with legitimate campaigns."],
  ["Creator Promotion", "Help eligible creators reach new audiences."],
];

const faqs = [
  [
    "Is PROMVANTA a legitimate platform?",
    "Yes. PROMVANTA is designed for legitimate digital promotion and advertising. We do not sell fake followers, bots, fake likes, or artificial campaign results.",
  ],
  [
    "Where do campaign results come from?",
    "Campaign results come from connected legitimate advertising and fulfillment providers. If provider data is unavailable, PROMVANTA does not invent results.",
  ],
  [
    "How are campaigns reviewed?",
    "Campaigns are checked against supported services, destinations, pricing rules, and fulfillment availability before legitimate fulfillment begins.",
  ],
  [
    "How does pricing work?",
    "Pricing is calculated dynamically. Quantity-based services use the configured service rate, while campaign-based services can use a customer-selected budget and honest estimated outcomes.",
  ],
  [
    "Can I get a refund?",
    "Refund eligibility depends on the payment, campaign, provider, and applicable refund rules. Refunds are handled through the secure transaction system.",
  ],
  [
    "Which payment methods are supported?",
    "Available payment methods depend on the payment provider configured for PROMVANTA.",
  ],
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main className="site">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f8f8fc;
          color: #17172f;
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
          color: inherit;
          text-decoration: none;
        }

        button {
          font: inherit;
          cursor: pointer;
        }

        .site {
          min-height: 100vh;
          background: #f8f8fc;
        }

        .header {
          position: sticky;
          top: 0;
          z-index: 50;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid #e8e8f1;
        }

        .header-inner {
          max-width: 1180px;
          height: 74px;
          margin: auto;
          padding: 0 22px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        .brand {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.8px;
        }

        .brand span {
          color: #6657e8;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 25px;
          color: #62627a;
          font-size: 14px;
          font-weight: 650;
        }

        .desktop-nav button {
          border: 0;
          background: transparent;
          color: inherit;
        }

        .desktop-nav button:hover {
          color: #6657e8;
        }

        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .sign-in {
          font-size: 14px;
          font-weight: 750;
          color: #6657e8;
        }

        .button {
          border: 0;
          border-radius: 11px;
          padding: 13px 19px;
          font-weight: 800;
          transition:
            transform 0.15s ease,
            box-shadow 0.15s ease;
        }

        .button:hover {
          transform: translateY(-1px);
        }

        .primary {
          background: #6657e8;
          color: white;
          box-shadow: 0 8px 20px rgba(102, 87, 232, 0.18);
        }

        .secondary {
          background: white;
          color: #6657e8;
          border: 1px solid #dcd9fa;
        }

        .container {
          max-width: 1180px;
          margin: auto;
          padding: 0 22px;
        }

        .hero {
          padding: 86px 0 70px;
          text-align: center;
        }

        .eyebrow {
          display: inline-block;
          padding: 7px 11px;
          border-radius: 999px;
          background: #eeecff;
          color: #6657e8;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.7px;
          margin-bottom: 18px;
        }

        .hero h1 {
          max-width: 820px;
          margin: auto;
          font-size: clamp(42px, 7vw, 72px);
          line-height: 0.99;
          letter-spacing: -3.5px;
        }

        .hero h1 span {
          color: #6657e8;
        }

        .hero p {
          max-width: 690px;
          margin: 22px auto 28px;
          color: #66677e;
          line-height: 1.7;
          font-size: 17px;
        }

        .hero-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
        }

        .trust-line {
          margin-top: 18px;
          color: #56586e;
          font-size: 13px;
          font-weight: 750;
        }

        .dashboard-card {
          max-width: 1040px;
          margin: 0 auto;
          background: white;
          border: 1px solid #e5e5ef;
          border-radius: 24px;
          padding: 24px;
          box-shadow: 0 22px 60px rgba(32, 29, 72, 0.08);
          text-align: left;
        }

        .demo-label {
          display: inline-block;
          background: #fff3c9;
          color: #856500;
          padding: 5px 9px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
          margin-bottom: 15px;
        }

        .dashboard-top {
          display: flex;
          justify-content: space-between;
          gap: 15px;
          align-items: center;
          margin-bottom: 22px;
        }

        .dashboard-title {
          font-weight: 850;
          font-size: 18px;
        }

        .dashboard-title small {
          display: block;
          color: #88899c;
          font-size: 12px;
          font-weight: 500;
          margin-top: 4px;
        }

        .chart {
          height: 170px;
          border: 1px solid #ededf4;
          border-radius: 16px;
          background:
            linear-gradient(#f1f0f8 1px, transparent 1px),
            linear-gradient(90deg, #f1f0f8 1px, transparent 1px);
          background-size: 25% 50px;
          padding: 25px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #aaaabd;
          font-size: 13px;
        }

        .days {
          display: flex;
          justify-content: space-between;
          color: #8a8b9d;
          font-size: 11px;
          margin-top: 8px;
        }

        .demo-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-top: 18px;
        }

        .demo-stat {
          border: 1px solid #e9e9f1;
          border-radius: 15px;
          padding: 18px;
        }

        .demo-stat-label {
          color: #85869a;
          font-size: 12px;
          font-weight: 650;
        }

        .demo-stat-value {
          font-size: 25px;
          font-weight: 900;
          margin-top: 6px;
        }

        section {
          scroll-margin-top: 90px;
        }

        .section {
          padding: 82px 0;
        }

        .section-heading {
          max-width: 700px;
          margin: 0 auto 40px;
          text-align: center;
        }

        .section-heading h2 {
          font-size: clamp(30px, 5vw, 44px);
          letter-spacing: -1.5px;
          margin: 0 0 12px;
        }

        .section-heading p {
          color: #707188;
          line-height: 1.65;
          margin: 0;
        }

        .feature-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .feature {
          background: white;
          border: 1px solid #e7e7f0;
          border-radius: 18px;
          padding: 24px;
        }

        .feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: #efedff;
          color: #6657e8;
          display: grid;
          place-items: center;
          font-weight: 900;
          margin-bottom: 16px;
        }

        .feature h3 {
          margin: 0 0 8px;
          font-size: 17px;
        }

        .feature p {
          margin: 0;
          color: #707188;
          line-height: 1.6;
          font-size: 14px;
        }

        .category-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .category {
          background: white;
          border: 1px solid #e7e7f0;
          border-radius: 17px;
          padding: 21px;
          font-weight: 800;
        }

        .category:hover {
          border-color: #cfcafa;
          box-shadow: 0 10px 25px rgba(102, 87, 232, 0.07);
        }

        .category small {
          display: block;
          color: #77788d;
          font-size: 12px;
          font-weight: 500;
          line-height: 1.5;
          margin-top: 7px;
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 15px;
        }

        .step {
          background: white;
          border: 1px solid #e7e7f0;
          border-radius: 18px;
          padding: 23px;
        }

        .step-number {
          color: #6657e8;
          font-size: 26px;
          font-weight: 900;
        }

        .step h3 {
          margin: 12px 0 7px;
          font-size: 16px;
        }

        .step p {
          color: #74758a;
          line-height: 1.55;
          font-size: 13px;
          margin: 0;
        }

        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 17px;
          align-items: stretch;
        }

        .pricing-card {
          background: white;
          border: 1px solid #e5e5ee;
          border-radius: 20px;
          padding: 26px;
          position: relative;
        }

        .pricing-card.popular {
          border: 2px solid #6657e8;
          box-shadow: 0 15px 40px rgba(102, 87, 232, 0.11);
        }

        .popular-label {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #6657e8;
          color: white;
          padding: 5px 10px;
          border-radius: 999px;
          font-size: 10px;
          font-weight: 900;
        }

        .pricing-card h3 {
          margin: 0 0 10px;
        }

        .price {
          font-size: 36px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .price span {
          color: #77788d;
          font-size: 13px;
          font-weight: 600;
        }

        .pricing-card p {
          color: #77788d;
          font-size: 13px;
          line-height: 1.5;
        }

        .pricing-card ul {
          list-style: none;
          padding: 0;
          margin: 22px 0;
          display: grid;
          gap: 11px;
          color: #55566d;
          font-size: 13px;
        }

        .pricing-card li::before {
          content: "✓";
          color: #6657e8;
          font-weight: 900;
          margin-right: 8px;
        }

        .faq {
          max-width: 850px;
          margin: auto;
          display: grid;
          gap: 10px;
        }

        .faq-item {
          background: white;
          border: 1px solid #e6e6ef;
          border-radius: 14px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          background: white;
          border: 0;
          padding: 18px;
          text-align: left;
          display: flex;
          justify-content: space-between;
          gap: 20px;
          font-weight: 800;
          color: #252540;
        }

        .faq-answer {
          padding: 0 18px 18px;
          color: #74758a;
          line-height: 1.65;
          font-size: 14px;
        }

        .cta {
          margin: 20px auto 80px;
          max-width: 1040px;
          background: #6657e8;
          color: white;
          border-radius: 25px;
          padding: 58px 25px;
          text-align: center;
        }

        .cta h2 {
          margin: 0;
          font-size: clamp(30px, 5vw, 46px);
          letter-spacing: -1.5px;
        }

        .cta p {
          max-width: 620px;
          margin: 14px auto 25px;
          color: #e8e6ff;
          line-height: 1.65;
        }

        .cta .button {
          background: white;
          color: #6657e8;
        }

        .footer {
          background: white;
          border-top: 1px solid #e6e6ef;
          padding: 50px 0 25px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr;
          gap: 35px;
        }

        .footer h4 {
          margin: 0 0 13px;
          font-size: 14px;
        }

        .footer a,
        .footer button {
          display: block;
          border: 0;
          background: transparent;
          padding: 5px 0;
          color: #74758a;
          font-size: 13px;
          text-align: left;
        }

        .footer-description {
          color: #74758a;
          line-height: 1.6;
          max-width: 360px;
          font-size: 13px;
        }

        .copyright {
          border-top: 1px solid #ededf3;
          margin-top: 35px;
          padding-top: 20px;
          color: #85869a;
          font-size: 12px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .feature-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .category-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .pricing-grid {
            grid-template-columns: 1fr;
            max-width: 500px;
            margin: auto;
          }
        }

        @media (max-width: 600px) {
          .header-inner {
            padding: 0 15px;
          }

          .header-actions .sign-in {
            display: none;
          }

          .hero {
            padding: 58px 0 45px;
          }

          .hero h1 {
            letter-spacing: -2px;
          }

          .hero p {
            font-size: 15px;
          }

          .dashboard-card {
            padding: 15px;
            border-radius: 19px;
          }

          .demo-stats {
            grid-template-columns: 1fr;
          }

          .feature-grid,
          .category-grid,
          .steps,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .section {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <Link href="/" className="brand">
            PROM<span>VANTA</span>
          </Link>

          <nav className="desktop-nav">
            <button onClick={() => scrollTo("how-it-works")}>
              How It Works
            </button>

            <button onClick={() => scrollTo("campaigns")}>
              Campaigns
            </button>

            <button onClick={() => scrollTo("pricing")}>Pricing</button>

            <button onClick={() => scrollTo("faq")}>FAQ</button>
          </nav>

          <div className="header-actions">
            <Link href="/login" className="sign-in">
              Sign In
            </Link>

            <Link href="/signup">
              <button className="button primary">Create Account</button>
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container">
          <div className="eyebrow">
            LEGITIMATE DIGITAL PROMOTION
          </div>

          <h1>
            Promote smarter.
            <br />
            <span>Reach further.</span>
          </h1>

          <p>
            Launch legitimate digital promotion campaigns, manage your
            budget and track real campaign results from one simple platform.
          </p>

          <div className="hero-actions">
            <Link href="/create-campaign">
              <button className="button primary">
                Create a Campaign
              </button>
            </Link>

            <button
              className="button secondary"
              onClick={() => scrollTo("how-it-works")}
            >
              See How It Works
            </button>
          </div>

          <div className="trust-line">
            No fake engagement. No bots. Real campaigns only.
          </div>
        </div>
      </section>

      <section className="container">
        <div className="dashboard-card">
          <span className="demo-label">DEMO DATA</span>

          <div className="dashboard-top">
            <div className="dashboard-title">
              Campaign performance
              <small>Example customer dashboard</small>
            </div>
          </div>

          <div className="chart">
            Example performance chart — real customer data appears only after
            provider reporting is available.
          </div>

          <div className="days">
            <span>Tue</span>
            <span>Wed</span>
            <span>Thu</span>
            <span>Fri</span>
            <span>Sat</span>
            <span>Sun</span>
          </div>

          <div className="demo-stats">
            <div className="demo-stat">
              <div className="demo-stat-label">Wallet</div>
              <div className="demo-stat-value">₦48,500</div>
            </div>

            <div className="demo-stat">
              <div className="demo-stat-label">Active</div>
              <div className="demo-stat-value">3</div>
            </div>

            <div className="demo-stat">
              <div className="demo-stat-label">Reach</div>
              <div className="demo-stat-value">12.4k</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="trust">
        <div className="container">
          <div className="section-heading">
            <h2>Built on trust and transparency</h2>
            <p>
              Everything you need to run legitimate campaigns with
              confidence.
            </p>
          </div>

          <div className="feature-grid">
            {[
              [
                "₦",
                "Transparent pricing",
                "Clear campaign pricing and applicable charges are shown before you pay.",
              ],
              [
                "✓",
                "Secure payments",
                "Payments are designed to use verified server-side processing.",
              ],
              [
                "↗",
                "Real campaign tracking",
  
