"use client";

import { useState } from "react";

type Screen =
  | "home"
  | "dashboard"
  | "campaigns"
  | "create"
  | "review"
  | "wallet"
  | "results"
  | "transactions"
  | "rewards"
  | "invite"
  | "support"
  | "profile"
  | "login"
  | "signup";

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
  "Website",
  "Music Platform",
];

const quantityServices = [
  "Followers",
  "Subscribers",
  "Likes",
  "Comments",
  "Shares",
  "Video Views",
];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [campaignType, setCampaignType] = useState("");
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");
  const [message, setMessage] = useState("");

  const isQuantity = quantityServices.includes(service);

  const calculatedPrice = isQuantity
    ? Math.max(Number(quantity || 0) * 10, 0)
    : Math.max(Number(budget || 0), 0);

  const go = (next: Screen) => {
    setMessage("");
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetCampaign = () => {
    setCampaignType("");
    setPlatform("");
    setService("");
    setLink("");
    setQuantity("");
    setBudget("");
  };

  const submitCampaign = () => {
    if (!campaignType || !service || !link) {
      setMessage("Please complete the required campaign information.");
      return;
    }

    if (campaignType === "Social Media Promotion" && !platform) {
      setMessage("Please select a platform.");
      return;
    }

    if (isQuantity && Number(quantity) <= 0) {
      setMessage("Please enter the quantity you need.");
      return;
    }

    if (!isQuantity && Number(budget) <= 0) {
      setMessage("Please enter your campaign budget.");
      return;
    }

    if (calculatedPrice < 2500) {
      setMessage(
        "Minimum campaign value is ₦2,500. Please increase your campaign value to continue."
      );
      return;
    }

    go("review");
  };

  const nav = [
    ["dashboard", "Home"],
    ["campaigns", "Campaigns"],
    ["create", "Create Campaign"],
    ["wallet", "Wallet"],
    ["results", "Results"],
    ["transactions", "Transactions"],
    ["rewards", "Rewards"],
    ["invite", "Invite & Earn"],
    ["support", "Support"],
    ["profile", "Profile"],
  ] as const;

  return (
    <main className="app">
      <style>{`
        *{box-sizing:border-box}
        body{margin:0;font-family:Inter,Arial,sans-serif;background:#f7f8fc;color:#171827}
        button,input,select,textarea{font:inherit}
        button{cursor:pointer}
        .app{min-height:100vh}
        .top{height:70px;background:#fff;border-bottom:1px solid #ececf3;display:flex;align-items:center;justify-content:space-between;padding:0 6%;position:sticky;top:0;z-index:10}
        .logo{font-weight:900;letter-spacing:-.5px;font-size:22px;color:#171827}
        .logo span{color:#5b4df5}
        .topnav{display:flex;gap:10px;align-items:center}
        .linkbtn{background:none;border:0;color:#55576a;padding:10px}
        .primary{background:#5b4df5;color:#fff;border:0;border-radius:10px;padding:12px 18px;font-weight:700}
        .secondary{background:#fff;color:#4e45d8;border:1px solid #dddafa;border-radius:10px;padding:12px 18px;font-weight:700}
        .hero{padding:90px 6% 70px;text-align:center;background:linear-gradient(180deg,#fff 0%,#f7f8fc 100%)}
        .badge{display:inline-block;background:#efedff;color:#5548d8;padding:8px 13px;border-radius:999px;font-size:13px;font-weight:700}
        h1{font-size:clamp(40px,7vw,72px);line-height:1.02;letter-spacing:-3px;margin:22px auto 18px;max-width:850px}
        .hero p{font-size:18px;color:#686a79;max-width:650px;margin:0 auto 28px;line-height:1.6}
        .actions{display:flex;justify-content:center;gap:12px;flex-wrap:wrap}
        .trust{margin-top:24px;font-weight:700;color:#454652}
        .section{padding:70px 6%;max-width:1200px;margin:auto}
        .section h2{font-size:34px;margin:0 0 12px}
        .muted{color:#727483;line-height:1.6}
        .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px}
        .card{background:#fff;border:1px solid #e9e9f0;border-radius:18px;padding:22px;box-shadow:0 5px 25px rgba(25,25,60,.04)}
        .card h3{margin:0 0 8px}
        .icon{width:42px;height:42px;border-radius:12px;background:#efedff;color:#5b4df5;display:flex;align-items:center;justify-content:center;font-weight:900;margin-bottom:18px}
        .steps{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .stepnum{font-size:13px;color:#5b4df5;font-weight:900}
        .pricing{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
        .price{font-size:30px;font-weight:900;margin:14px 0}
        .faq{border-bottom:1px solid #e6e6ed;padding:20px 0}
        .footer{background:#171827;color:#fff;padding:50px 6%;margin-top:30px}
        .footer p{color:#b9bac7;max-width:550px;line-height:1.6}
        .dashboard{display:flex;min-height:calc(100vh - 70px)}
        .side{width:240px;background:#fff;border-right:1px solid #e8e8ef;padding:24px 14px}
        .side button{display:block;width:100%;text-align:left;border:0;background:none;padding:12px 14px;border-radius:10px;color:#55576a;margin:3px 0}
        .side button.active,.side button:hover{background:#efedff;color:#5144d8;font-weight:700}
        .content{flex:1;padding:35px;max-width:1300px}
        .welcome{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:25px}
        .stats{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
        .stat strong{display:block;font-size:25px;margin-top:8px}
        .label{font-size:13px;color:#777989}
        .empty{text-align:center;padding:55px 20px}
        .formbox{max-width:760px;margin:auto;background:#fff;border:1px solid #e6e6ef;border-radius:18px;padding:25px}
        label{display:block;font-weight:700;font-size:14px;margin:18px 0 8px}
        input,select,textarea{width:100%;padding:13px 14px;border:1px solid #dfe0e8;border-radius:10px;background:#fff;outline:none}
        input:focus,select:focus,textarea:focus{border-color:#6559e9;box-shadow:0 0 0 3px #efedff}
        .notice{background:#fff5df;border:1px solid #f0d99a;color:#735900;padding:13px;border-radius:10px;margin:15px 0}
        .error{background:#fff0f0;border:1px solid #f0caca;color:#9b3030;padding:13px;border-radius:10px;margin:15px 0}
        .reviewrow{display:flex;justify-content:space-between;gap:20px;padding:14px 0;border-bottom:1px solid #eee}
        .reviewrow span:first-child{color:#777989}
        .total{font-size:25px;font-weight:900}
        .auth{min-height:calc(100vh - 70px);display:flex;align-items:center;justify-content:center;padding:30px}
        .authbox{width:100%;max-width:430px;background:#fff;border:1px solid #e6e6ef;border-radius:18px;padding:30px}
        @media(max-width:900px){
          .grid,.steps{grid-template-columns:repeat(2,1fr)}
          .pricing{grid-template-columns:1fr}
          .stats{grid-template-columns:repeat(2,1fr)}
          .side{width:205px}
        }
        @media(max-width:650px){
          .top{padding:0 18px}.topnav .linkbtn{display:none}
          .hero{padding:65px 18px 50px}h1{letter-spacing:-2px}
          .section{padding:50px 18px}
          .grid,.steps{grid-template-columns:1fr}
          .dashboard{display:block}
          .side{width:100%;border-right:0;border-bottom:1px solid #eee;display:flex;overflow:auto;padding:8px}
          .side button{min-width:max-content;width:auto}
          .content{padding:20px 16px}
          .welcome{display:block}
          .stats{grid-template-columns:1fr 1fr}
        }
      `}</style>

      <header className="top">
        <button className="logo" onClick={() => go("home")}>
          PROM<span>VANTA</span>
        </button>

        <div className="topnav">
          <button className="linkbtn" onClick={() => go("home")}>
            Home
          </button>
          <button className="linkbtn" onClick={() => go("campaigns")}>
            Campaigns
          </button>
          <button className="linkbtn" onClick={() => go("support")}>
            Support
          </button>
          <button className="secondary" onClick={() => go("login")}>
            Sign in
          </button>
          <button className="primary" onClick={() => go("create")}>
            Create Campaign
          </button>
        </div>
      </header>

      {screen === "home" && (
        <>
          <section className="hero">
            <span className="badge">Legitimate promotion, real tracking</span>
            <h1>Promote smarter. Reach further.</h1>
            <p>
              Launch legitimate digital promotion campaigns, manage your
              budget and track real campaign results from one simple platform.
            </p>
            <div className="actions">
              <button className="primary" onClick={() => go("create")}>
                Create a Campaign
              </button>
              <button className="secondary" onClick={() => go("dashboard")}>
                See How It Works
              </button>
            </div>
            <div className="trust">
              No fake engagement. No bots. Real campaigns only.
            </div>
          </section>

          <section className="section">
            <h2>Campaign performance</h2>
            <p className="muted">DEMO DATA — example dashboard preview</p>

            <div className="grid">
              <div className="card">
                <span className="label">Wallet</span>
                <strong>₦48,500</strong>
              </div>
              <div className="card">
                <span className="label">Active</span>
                <strong>3</strong>
              </div>
              <div className="card">
                <span className="label">Reach</span>
                <strong>12.4k</strong>
              </div>
              <div className="card">
                <span className="label">Campaigns</span>
                <strong>8</strong>
              </div>
            </div>
          </section>

          <section className="section">
            <h2>Built on trust and transparency</h2>
            <div className="grid">
              {[
                ["✓", "Transparent pricing"],
                ["✓", "Secure payments"],
                ["✓", "Real campaign tracking"],
                ["✓", "Legitimate services"],
                ["✓", "Customer support"],
                ["✓", "No fake engagement"],
              ].map(([icon, title]) => (
                <div className="card" key={title}>
                  <div className="icon">{icon}</div>
                  <h3>{title}</h3>
                  <p className="muted">
                    Designed to keep promotion clear, legitimate and
                    trustworthy.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Campaign categories</h2>
            <div className="grid">
              {campaignTypes.map((x) => (
                <div className="card" key={x}>
                  <div className="icon">↗</div>
                  <h3>{x}</h3>
                  <p className="muted">
                    Choose a relevant goal and let PROMVANTA calculate the
                    applicable campaign price.
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>How PROMVANTA works</h2>
            <div className="steps">
              {[
                ["01", "Create your campaign", "Pick a category and add your promotion URL."],
                ["02", "Choose your goal", "Tell us what you want to achieve."],
                ["03", "Pay securely", "Review the final amount before payment."],
                ["04", "Track your campaign", "Watch real results come in from connected providers."],
              ].map(([n, t, d]) => (
                <div className="card" key={n}>
                  <div className="stepnum">{n}</div>
                  <h3>{t}</h3>
                  <p className="muted">{d}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Simple, transparent pricing</h2>
            <p className="muted">
              Example pricing only — final fees are configurable by
              administrators.
            </p>
            <div className="pricing">
              {[
                ["Starter", "₦0", "10% per campaign"],
                ["Growth", "10%", "Reduced campaign rate"],
                ["Business", "Custom", "Tailored pricing"],
              ].map(([name, price, detail]) => (
                <div className="card" key={name}>
                  <h3>{name}</h3>
                  <div className="price">{price}</div>
                  <p className="muted">{detail}</p>
                  <button className="primary" onClick={() => go("create")}>
                    Get Started
                  </button>
                </div>
              ))}
            </div>
          </section>

          <section className="section">
            <h2>Frequently asked questions</h2>
            {[
              "Is PROMVANTA a legitimate platform?",
              "Where do campaign results come from?",
              "How are campaigns reviewed?",
              "How does pricing work?",
              "Can I get a refund?",
              "Which payment methods are supported?",
            ].map((q) => (
              <div className="faq" key={q}>
                <strong>{q}</strong>
                <p className="muted">
                  PROMVANTA is designed around legitimate provider-backed
                  promotion, transparent pricing and real campaign tracking.
                </p>
              </div>
            ))}
          </section>

          <section className="hero">
            <h2>Ready to launch your first campaign?</h2>
            <p>Promote smarter. Reach further.</p>
            <button className="primary" onClick={() => go("create")}>
              Create a Campaign
            </button>
          </section>

          <footer className="footer">
            <h2>PROMVANTA</h2>
            <p>
              Create, manage and track legitimate digital promotion campaigns
              from one powerful platform.
            </p>
            <p>Promote smarter. Reach further.</p>
            <p>
              © 2026 PROMVANTA. All rights reserved.
              <br />
              No fake engagement. No bots. Real campaigns only.
            </p>
          </footer>
        </>
      )}

      {screen !== "home" && !["login", "signup"].includes(screen) && (
        <div className="dashboard">
          <aside className="side">
            {nav.map(([id, label]) => (
              <button
                key={id}
                className={screen === id ? "active" : ""}
                onClick={() => go(id)}
              >
                {label}
              </button>
            ))}
          </aside>

          <section className="content">
            {screen === "dashboard" && (
              <>
                <div className="welcome">
                  <div>
                    <h2>Welcome back 👋</h2>
                    <p className="muted">
                      Manage your campaigns and track real results.
                    </p>
                  </div>
                  <button className="primary" onClick={() => go("create")}>
                    Create Campaign
                  </button>
                </div>

                <div className="stats">
                  {[
                    ["Wallet Balance", "₦0.00"],
                    ["Active Campaigns", "0"],
                    ["Total Spend", "₦0.00"],
                    ["Completed Campaigns", "0"],
                  ].map(([a, b]) => (
                    <div className="card stat" key={a}>
                      <span className="label">{a}</span>
                      <strong>{b}</strong>
                    </div>
                  ))}
                </div>

                <div className="card" style={{ marginTop: 18 }}>
                  <h3>Campaign performance</h3>
                  <div className="empty">
                    <h3>No campaign data yet</h3>
                    <p className="muted">
                      Your real provider results will appear here after a
                      campaign is active.
                    </p>
                    <button className="primary" onClick={() => go("create")}>
                      Create your first campaign
                    </button>
                  </div>
                </div>
              </>
            )}

            {screen === "campaigns" && (
              <Page title="Campaigns">
                <div className="card empty">
                  <h3>No campaigns yet</h3>
                  <p className="muted">
                    Your campaigns will appear here after you create one.
                  </p>
                  <button className="primary" onClick={() => go("create")}>
                    Create Campaign
                  </button>
                </div>
              </Page>
            )}

            {screen === "create" && (
              <Page title="Create Campaign">
                <div className="formbox">
                  <p className="muted">
                    Tell PROMVANTA what you want to promote and what you want
                    to achieve.
                  </p>

                  <label>Campaign Type</label>
                  <select
                    value={campaignType}
                    onChange={(e) => {
                      setCampaignType(e.target.value);
                      setPlatform("");
                      setService("");
                    }}
                  >
                    <option value="">Select campaign type</option>
                    {campaignTypes.map((x) => (
                      <option key={x}>{x}</option>
                    ))}
                  </select>

                  {campaignType &&
            
