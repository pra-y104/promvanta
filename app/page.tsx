"use client";

import { useState } from "react";

type Section =
  | "home"
  | "campaigns"
  | "create"
  | "wallet"
  | "results"
  | "transactions"
  | "rewards"
  | "invite"
  | "support"
  | "profile";

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

const services: Record<string, string[]> = {
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

export default function Home() {
  const [section, setSection] = useState<Section>("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const [campaignType, setCampaignType] = useState("");
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [destination, setDestination] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");

  const [campaignCreated, setCampaignCreated] = useState(false);

  const go = (next: Section) => {
    setSection(next);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentServices = campaignType
    ? services[campaignType] || []
    : [];

  const isBudgetService =
    service === "Brand Awareness" ||
    service === "Reach" ||
    service === "Leads" ||
    service === "Leads / Sign-ups" ||
    service === "Sales / Conversions" ||
    service === "Conversions" ||
    service === "Website Visits" ||
    service === "Landing-Page Traffic" ||
    service === "Local Promotion";

  const amount = isBudgetService
    ? Number(budget || 0)
    : Number(quantity || 0) * 1;

  const canContinue =
    campaignType &&
    service &&
    destination &&
    (isBudgetService ? Number(budget) > 0 : Number(quantity) > 0);

  return (
    <main className="app">
      <style jsx global>{`
        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: #f7f8fc;
          color: #172033;
          font-family:
            Inter,
            ui-sans-serif,
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        button,
        input,
        select {
          font: inherit;
        }

        button {
          cursor: pointer;
        }

        .app {
          min-height: 100vh;
          background: #f7f8fc;
        }

        .topbar {
          height: 72px;
          background: rgba(255,255,255,.96);
          border-bottom: 1px solid #e8eaf1;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 50;
          backdrop-filter: blur(14px);
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 12px;
          font-weight: 800;
          font-size: 21px;
          letter-spacing: -.5px;
          color: #171b3a;
        }

        .brandMark {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          background: linear-gradient(135deg,#5b4df5,#7b61ff);
          color: white;
          font-weight: 900;
          box-shadow: 0 8px 22px rgba(91,77,245,.22);
        }

        .tagline {
          display: none;
        }

        .topActions {
          display: flex;
          gap: 10px;
          align-items: center;
        }

        .headerButton {
          border: 1px solid #e2e5ef;
          background: white;
          padding: 10px 16px;
          border-radius: 10px;
          color: #42485a;
          font-weight: 650;
        }

        .primaryButton {
          border: 0;
          background: linear-gradient(135deg,#5b4df5,#7459f7);
          color: white;
          padding: 12px 18px;
          border-radius: 11px;
          font-weight: 750;
          box-shadow: 0 9px 22px rgba(91,77,245,.2);
        }

        .layout {
          display: flex;
          min-height: calc(100vh - 72px);
        }

        .sidebar {
          width: 246px;
          background: #ffffff;
          border-right: 1px solid #e8eaf1;
          padding: 22px 14px;
          flex-shrink: 0;
        }

        .sideLabel {
          font-size: 11px;
          font-weight: 800;
          color: #9aa1b2;
          letter-spacing: .08em;
          padding: 12px 12px 8px;
          text-transform: uppercase;
        }

        .navButton {
          width: 100%;
          border: 0;
          background: transparent;
          color: #646b7d;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 11px 13px;
          border-radius: 10px;
          margin-bottom: 3px;
          text-align: left;
          font-weight: 620;
        }

        .navButton:hover {
          background: #f3f1ff;
          color: #5948e8;
        }

        .navButton.active {
          background: #eeeaff;
          color: #5948e8;
          font-weight: 760;
        }

        .content {
          flex: 1;
          min-width: 0;
          padding: 32px;
        }

        .page {
          max-width: 1180px;
          margin: 0 auto;
        }

        .welcome {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 28px;
        }

        .eyebrow {
          color: #6d61df;
          font-size: 13px;
          font-weight: 750;
          margin-bottom: 7px;
        }

        h1 {
          margin: 0;
          font-size: clamp(27px,4vw,38px);
          line-height: 1.1;
          letter-spacing: -.9px;
          color: #171b3a;
        }

        h2 {
          margin: 0;
          font-size: 23px;
          color: #171b3a;
        }

        .subtext {
          color: #737b8d;
          margin-top: 9px;
          line-height: 1.6;
        }

        .cards {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 16px;
        }

        .stat {
          background: white;
          border: 1px solid #e8eaf1;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(26,32,54,.035);
        }

        .statTop {
          color: #858c9d;
          font-size: 13px;
          font-weight: 650;
        }

        .statValue {
          margin-top: 10px;
          color: #171b3a;
          font-size: 26px;
          font-weight: 800;
        }

        .grid2 {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 18px;
          margin-top: 20px;
        }

        .panel {
          background: white;
          border: 1px solid #e8eaf1;
          border-radius: 16px;
          padding: 22px;
          box-shadow: 0 5px 20px rgba(26,32,54,.035);
        }

        .panelHeader {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 18px;
        }

        .empty {
          min-height: 180px;
          display: grid;
          place-items: center;
          text-align: center;
          color: #858c9d;
        }

        .emptyIcon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #f0eeff;
          color: #6252ee;
          margin: 0 auto 12px;
          font-size: 22px;
        }

        .formGrid {
          display: grid;
          gap: 18px;
        }

        .field label {
          display: block;
          font-size: 13px;
          font-weight: 700;
          color: #454b5d;
          margin-bottom: 8px;
        }

        .field input,
        .field select {
          width: 100%;
          padding: 13px 14px;
          border: 1px solid #dfe2eb;
          border-radius: 10px;
          outline: none;
          background: white;
          color: #22283a;
        }

        .field input:focus,
        .field select:focus {
          border-color: #6b5bf2;
          box-shadow: 0 0 0 3px rgba(107,91,242,.1);
        }

        .serviceGrid {
          display: grid;
          grid-template-columns: repeat(3,1fr);
          gap: 10px;
        }

        .serviceButton {
          border: 1px solid #e1e4ed;
          background: white;
          border-radius: 11px;
          padding: 14px;
          text-align: left;
          color: #51586a;
          font-weight: 650;
        }

        .serviceButton:hover {
          border-color: #897df5;
        }

        .serviceButton.selected {
          border-color: #6252ee;
          background: #f1efff;
          color: #5646dc;
        }

        .info {
          background: #f3f1ff;
          border: 1px solid #e3dfff;
          border-radius: 12px;
          padding: 14px;
          color: #5147a4;
          line-height: 1.5;
          font-size: 13px;
        }

        .categoryGrid {
          display: grid;
          grid-template-columns: repeat(4,1fr);
          gap: 15px;
        }

        .category {
          border: 1px solid #e7e9f0;
          background: white;
          border-radius: 15px;
          padding: 20px;
          text-align: left;
          transition: .2s;
        }

        .category:hover {
          transform: translateY(-2px);
          border-color: #cfc9ff;
          box-shadow: 0 10px 28px rgba(50,45,100,.08);
        }

        .categoryIcon {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          background: #f0eeff;
          color: #5b4df5;
          margin-bottom: 14px;
        }

        .categoryTitle {
          font-weight: 750;
          color: #242a3c;
        }

        .categoryText {
          color: #858c9d;
          font-size: 13px;
          line-height: 1.5;
          margin-top: 6px;
        }

        .hero {
          background:
            radial-gradient(circle at 85% 20%,rgba(133,112,255,.25),transparent 32%),
            linear-gradient(135deg,#171b3d,#30246b);
          border-radius: 22px;
          padding: 45px;
          color: white;
          margin-bottom: 25px;
          overflow: hidden;
          position: relative;
        }

        .hero h1 {
          color: white;
          max-width: 650px;
          font-size: clamp(34px,6vw,58px);
        }

        .hero p {
          color: rgba(255,255,255,.78);
          max-width: 620px;
          line-height: 1.7;
          font-size: 16px;
        }

        .heroActions {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          flex-wrap: wrap;
        }

        .heroPrimary {
          border: 0;
          background: white;
          color: #4e40cf;
          padding: 13px 19px;
          border-radius: 11px;
          font-weight: 800;
        }

        .heroSecondary {
          border: 1px solid rgba(255,255,255,.25);
          background: rgba(255,255,255,.08);
          color: white;
          padding: 13px 19px;
          border-radius: 11px;
          font-weight: 700;
        }

        .demo {
          display: inline-flex;
          padding: 6px 10px;
          border-radius: 999px;
          background: rgba(255,255,255,.13);
          color: #ddd9ff;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: .06em;
          margin-bottom: 18px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 14px 10px;
          border-bottom: 1px solid #eef0f5;
          text-align: left;
          font-size: 13px;
        }

        .table th {
          color: #858c9d;
          font-weight: 700;
        }

        .status {
          display: inline-flex;
          padding: 5px 9px;
          border-radius: 999px;
          background: #f1f0ff;
          color: #5b4df5;
          font-size: 11px;
          font-weight: 750;
        }

        .mobileToggle {
          display: none;
          border: 0;
          background: #f0eeff;
          color: #5948e8;
          border-radius: 9px;
          padding: 9px 11px;
          font-size: 18px;
        }

        @media (max-width: 900px) {
          .sidebar {
            position: fixed;
            left: -260px;
            top: 72px;
            bottom: 0;
            z-index: 40;
            transition: .2s;
          }

          .sidebar.open {
            left: 0;
          }

          .mobileToggle {
            display: block;
          }

          .content {
            padding: 20px;
          }

          .cards {
            grid-template-columns: repeat(2,1fr);
          }

          .grid2 {
            grid-template-columns: 1fr;
          }

          .categoryGrid {
            grid-template-columns: repeat(2,1fr);
          }

          .tagline {
            display: none;
          }
        }

        @media (max-width: 600px) {
          .topbar {
            padding: 0 15px;
          }

          .topActions .headerButton {
            display: none;
          }

          .content {
            padding: 15px;
          }

          .welcome {
            align-items: flex-start;
            flex-direction: column;
          }

          .cards {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          .stat {
            padding: 15px;
          }

          .statValue {
            font-size: 21px;
          }

          .categoryGrid,
          .serviceGrid {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 28px 22px;
            border-radius: 17px;
          }

          .hero h1 {
            font-size: 35px;
          }

          .table {
            min-width: 600px;
          }

          .tableWrap {
            overflow-x: auto;
          }
        }
      `}</style>

      <header className="topbar">
        <div className="brand">
          <button
            className="mobileToggle"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            ☰
          </button>

          <div className="brandMark">P</div>
          PROMVANTA
        </div>

        <div className="topActions">
          <button className="headerButton" onClick={() => go("support")}>
            Support
          </button>

          <button
            className="primaryButton"
            onClick={() => go("create")}
          >
            Create Campaign
          </button>
        </div>
      </header>

      <div className="layout">
        <aside className={`sidebar ${mobileMenu ? "open" : ""}`}>
          <div className="sideLabel">Workspace</div>

          <button
            className={`navButton ${section === "home" ? "active" : ""}`}
            onClick={() => go("home")}
          >
            ◉ Home
          </button>

          <button
            className={`navButton ${section === "campaigns" ? "active" : ""}`}
            onClick={() => go("campaigns")}
          >
            ◫ My Campaigns
          </button>

          <button
            className={`navButton ${section === "create" ? "active" : ""}`}
            onClick={() => go("create")}
          >
            ＋ Create Campaign
          </button>

          <button
            className={`navButton ${section === "wallet" ? "active" : ""}`}
            onClick={() => go("wallet")}
          >
            ◈ Wallet
          </button>

          <button
            className={`navButton ${section === "results" ? "active" : ""}`}
            onClick={() => go("results")}
          >
            ◒ Results
          </button>

          <button
            className={`navButton ${section === "transactions" ? "active" : ""}`}
            onClick={() => go("transactions")}
          >
            ⇄ Transactions
          </button>

          <div className="sideLabel">Benefits</div>

          <button
            className={`navButton ${section === "rewards" ? "active" : ""}`}
            onClick={() => go("rewards")}
          >
            ✦ Rewards
          </button>

          <button
            className={`navButton ${section === "invite" ? "active" : ""}`}
            onClick={() => go("invite")}
          >
            ♧ Invite & Earn
          </button>

          <div className="sideLabel">Account</div>

          <button
            className={`navButton ${section === "support" ? "active" : ""}`}
            onClick={() => go("support")}
          >
            ? Support
          </button>

          <button
            className={`navButton ${section === "profile" ? "active" : ""}`}
            onClick={() => go("profile")}
          >
            ◯ Profile & Settings
          </button>
        </aside>

        <section className="content">
          <div className="page">

            {section === "home" && (
              <>
                <div className="welcome">
                  <div>
                    <div className="eyebrow">
                      Legitimate promotion, real tracking
                    </div>

                    <h1>Welcome back 👋</h1>

                    <div className="subtext">
                      Promote smarter. Reach further.
                    </div>
                  </div>

                  <button
                    className="primaryButton"
                    onClick={() => go("create")}
                  >
                    Create Campaign
                  </button>
                </div>

                <div className="cards">
                  <div className="stat">
                    <div className="statTop">Wallet Balance</div>
                    <div className="statValue">₦0.00</div>
                  </div>

                  <div className="stat">
                    <div className="statTop">Active Campaigns</div>
                    <div className="statValue">0</div>
                  </div>

                  <div className="stat">
                    <div className="statTop">Total Spend</div>
                    <div className="statValue">₦0.00</div>
                  </div>

                  <div className="stat">
                    <div className="statTop">Completed Campaigns</div>
                    <div className="statValue">0</div>
                  </div>
                </div>

                <div className
