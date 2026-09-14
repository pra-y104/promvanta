"use client";

import { useState } from "react";

const menu = [
  ["home", "Home"],
  ["campaigns", "Campaigns"],
  ["create", "Create Campaign"],
  ["wallet", "Wallet"],
  ["results", "Results"],
  ["transactions", "Transactions"],
  ["rewards", "Rewards"],
  ["invite", "Invite & Earn"],
  ["support", "Support"],
  ["profile", "Profile & Settings"],
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

const goals: Record<string, string[]> = {
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

export default function Home() {
  const [screen, setScreen] = useState("landing");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");
  const [link, setLink] = useState("");
  const [amount, setAmount] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const quantityGoals = [
    "Followers",
    "Subscribers",
    "Likes",
    "Comments",
    "Shares",
    "Video Views",
  ];

  const quantityMode = quantityGoals.includes(goal);
  const number = Number(amount || 0);
  const price = quantityMode ? number * 10 : number;

  const go = (value: string) => {
    setScreen(value);
    setMobileMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (screen === "landing") {
    return (
      <div className="app">
        <style>{css}</style>

        <header className="landingHeader">
          <button className="brand" onClick={() => go("landing")}>
            PROM<span>VANTA</span>
          </button>

          <nav>
            <button onClick={() => go("landing")}>Home</button>
            <button onClick={() => go("dashboard")}>How It Works</button>
            <button onClick={() => go("dashboard")}>Campaigns</button>
            <button onClick={() => go("login")}>Sign in</button>
            <button className="primary" onClick={() => go("create")}>
              Create a Campaign
            </button>
          </nav>
        </header>

        <section className="hero">
          <div className="eyebrow">
            Legitimate promotion, real tracking
          </div>

          <h1>
            Promote smarter.
            <br />
            Reach further.
          </h1>

          <p>
            Launch legitimate digital promotion campaigns, manage your budget
            and track real campaign results from one simple platform.
          </p>

          <div className="heroButtons">
            <button className="primary big" onClick={() => go("create")}>
              Create a Campaign
            </button>
            <button className="outline big" onClick={() => go("dashboard")}>
              See How It Works
            </button>
          </div>

          <div className="trust">
            ✓ No fake engagement &nbsp; ✓ No bots &nbsp; ✓ Real campaigns only
          </div>
        </section>

        <section className="section">
          <div className="sectionHead">
            <div>
              <div className="smallTitle">EXAMPLE DASHBOARD</div>
              <h2>Campaign performance</h2>
            </div>
            <span className="demo">DEMO DATA</span>
          </div>

          <div className="dashboardPreview">
            <div className="previewTop">
              <strong>PROMVANTA</strong>
              <span>Campaign performance</span>
            </div>

            <div className="stats">
              <Stat title="Wallet" value="₦48,500" />
              <Stat title="Active" value="3" />
              <Stat title="Reach" value="12.4k" />
              <Stat title="Campaigns" value="8" />
            </div>

            <div className="chart">
              <div className="chartHeader">
                <strong>Campaign reach</strong>
                <span>DEMO DATA</span>
              </div>

              <div className="bars">
                {[35, 48, 42, 66, 57, 82, 70].map((height, i) => (
                  <div className="barWrap" key={i}>
                    <div className="bar" style={{ height }} />
                    <small>
                      {["Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon"][i]}
                    </small>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="center">
            <div className="smallTitle">TRUST & TRANSPARENCY</div>
            <h2>Built on trust and transparency</h2>
            <p>
              Everything you need to launch legitimate digital promotion and
              understand what is happening with your campaign.
            </p>
          </div>

          <div className="featureGrid">
            {[
              ["01", "Transparent pricing", "Know the final price before you pay."],
              ["02", "Secure payments", "Verified payment processing and records."],
              ["03", "Real campaign tracking", "Results come from connected providers."],
              ["04", "Legitimate services", "No fake engagement or artificial activity."],
              ["05", "Customer support", "Get help when you need it."],
              ["06", "No fake engagement", "Real campaigns only."],
            ].map(([n, title, text]) => (
              <div className="feature" key={title}>
                <div className="featureIcon">{n}</div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="center">
            <div className="smallTitle">CAMPAIGNS</div>
            <h2>Promote what matters</h2>
            <p>
              Choose the campaign category that matches what you want to
              promote.
            </p>
          </div>

          <div className="categoryGrid">
            {campaignTypes.map((x, i) => (
              <div className="category" key={x}>
                <div className="categoryIcon">{["♪", "▶", "◎", "↗", "◆", "⌂", "▣", "★"][i]}</div>
                <h3>{x}</h3>
                <p>Professional promotion with transparent campaign tracking.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="how">
          <div className="center">
            <div className="smallTitle">HOW IT WORKS</div>
            <h2>Simple from start to finish</h2>
          </div>

          <div className="steps">
            {[
              ["01", "Create your campaign", "Pick a category and add your promotion URL."],
              ["02", "Choose your goal", "Tell PROMVANTA what you want to achieve."],
              ["03", "Pay securely", "Review your final amount before payment."],
              ["04", "Track your campaign", "Watch real results come in."],
            ].map(([n, title, text]) => (
              <div className="step" key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="cta">
          <h2>Ready to launch your first campaign?</h2>
          <p>Promote smarter. Reach further.</p>
          <button className="primary big" onClick={() => go("create")}>
            Create a Campaign
          </button>
        </section>

        <footer>
          <div>
            <div className="footerBrand">
              PROM<span>VANTA</span>
            </div>
            <p>
              Create, manage and track legitimate digital promotion campaigns
              from one powerful platform.
            </p>
          </div>

          <div>
            <strong>Platform</strong>
            <p>How It Works</p>
            <p>Campaigns</p>
            <p>Pricing</p>
            <p>FAQ</p>
          </div>

          <div>
            <strong>Company</strong>
            <p>About</p>
            <p>Support</p>
            <p>Contact</p>
            <p>Legal</p>
          </div>
        </footer>

        <div className="copyright">
          © 2026 PROMVANTA. All rights reserved.
          <br />
          No fake engagement. No bots. Real campaigns only.
        </div>
      </div>
    );
  }

  if (screen === "create") {
    return (
      <AppShell
        screen={screen}
        setScreen={go}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      >
        <div className="pageTitle">
          <div>
            <div className="smallTitle">NEW CAMPAIGN</div>
            <h1>Create Campaign</h1>
            <p>Tell PROMVANTA what you want to promote and achieve.</p>
          </div>
        </div>

        <div className="formCard">
          <label>Campaign Type</label>
          <select
            value={type}
            onChange={(e) => {
              setType(e.target.value);
              setGoal("");
            }}
          >
            <option value="">Select campaign type</option>
            {campaignTypes.map((x) => (
              <option key={x}>{x}</option>
            ))}
          </select>

          {type && (
            <>
              <label>Promotion Link / Destination</label>
              <input
                value={link}
                onChange={(e) => setLink(e.target.value)}
                placeholder="https://..."
              />

              <label>Goal / Service</label>
              <select
                value={goal}
                onChange={(e) => setGoal(e.target.value)}
              >
                <option value="">Select one goal</option>
                {goals[type].map((x) => (
                  <option key={x}>{x}</option>
                ))}
              </select>
            </>
          )}

          {goal && (
            <>
              <label>
                {quantityMode ? "Quantity Needed" : "Campaign Budget"}
              </label>

              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder={
                  quantityMode
                    ? "Example: 500"
                    : "Enter campaign budget"
                }
              />

              <div className="notice">
                Minimum campaign value: ₦2,500
              </div>

              <div className="priceBox">
                <span>Calculated price</span>
                <strong>₦{price.toLocaleString()}</strong>
              </div>

              <button
                className="primary full"
                onClick={() => {
                  if (link && amount && price >= 2500) go("review");
                }}
              >
                Review Campaign
              </button>
            </>
          )}
        </div>
      </AppShell>
    );
  }

  if (screen === "review") {
    return (
      <AppShell
        screen={screen}
        setScreen={go}
        mobileMenu={mobileMenu}
        setMobileMenu={setMobileMenu}
      >
        <div className="pageTitle">
          <div>
            <div className="smallTitle">CHECKOUT</div>
            <h1>Review Campaign</h1>
          </div>
        </div>

        <div className="formCard">
          <Row label="Campaign type" value={type} />
          <Row label="Goal" value={goal} />
          <Row label="Destination" value={link} />
          <Row
            label={quantityMode ? "Quantity" : "Budget"}
            value={amount}
          />
          <Row label="Total" value={`₦${price.toLocaleString()}`} />

          <div className="notice">
            Your final amount will be shown before secure payment.
          </div>

          <button
            className="primary full"
            onClick={() =>
              alert(
                "Payment provider is not configured yet. No payment was taken."
              )
            }
          >
            Pay Securely
          </button>

          <button className="outline full" onClick={() => go("create")}>
            Edit Campaign
          </button>
        </div>
      </AppShell>
    );
  }

  if (screen === "login") {
    return (
      <div className="auth">
        <div className="authCard">
          <button className="brand" onClick={() => go("landing")}>
            PROM<span>VANTA</span>
          </button>
          <h1>Welcome back</h1>
          <p>Sign in to your PROMVANTA account.</p>

          <label>Email</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="••••••••" />

          <button className="primary full" onClick={() => go("dashboard")}>
            Sign In
          </button>

          <button className="textButton" onClick={() => go("signup")}>
            Create an account
          </button>
        </div>
      </div>
    );
  }

  if (screen === "signup") {
    return (
      <div className="auth">
        <div className="authCard">
          <button className="brand" onClick={() => go("landing")}>
            PROM<span>VANTA</span>
          </button>
          <h1>Create your account</h1>
          <p>Start managing legitimate digital promotion campaigns.</p>

          <label>Full Name</label>
          <input placeholder="Your name" />

          <label>Email</label>
          <input type="email" placeholder="you@example.com" />

          <label>Password</label>
          <input type="password" placeholder="Create a password" />

          <button className="primary full" onClick={() => go("dashboard")}>
            Create Account
          </button>

          <button className="textButton" onClick={() => go("login")}>
            Already have an account? Sign in
          </button>
        </div>
      </div>
    );
  }

  return (
    <AppShell
      screen={screen}
      setScreen={go}
      mobileMenu={mobileMenu}
      setMobileMenu={setMobileMenu}
    >
      {screen === "dashboard" && (
        <>
          <div className="pageTitle dashboardTitle">
            <div>
              <div className="smallTitle">OVERVIEW</div>
              <h1>Welcome back 👋</h1>
              <p>Here's what's happening with your campaigns.</p>
            </div>
            <button className="primary" onClick={() => go("create")}>
              + Create Campaign
            </button>
          </div>

          <div className="stats">
            <Stat title="Wallet Balance" value="₦0.00" icon="₦" />
            <Stat title="Active Campaigns" value="0" icon="↗" />
            <Stat title="Total Spend" value="₦0.00" icon="₦" />
            <Stat title="Completed Campaigns" value="0" icon="✓" />
          </div>

          <div className="mainGrid">
            <div className="panel performance">
              <div className="panelHead">
                <div>
                  <h2>Campaign performance</h2>
                  <p>Real results from your campaigns</p>
                </div>
                <span className="period">Last 7 days</span>
              </div>

              <div className="emptyChart">
                <div className="emptyIcon">↗</div>
                <h3>No campaign data yet</h3>
                <p>
                  Your real provider results will appear here after you launch
                  a campaign.
                </p>
                <button className="primary" onClick={() => go("create")}>
                  Create your first campaign
                </button>
              </div>
            </div>

            <div className="panel">
              <div className="panelHead">
                <div>
                  <h2>Recent campaigns</h2>
                  <p>Your latest activity</p>
                </div>
                <button className="mini" onClick={() => go("campaigns")}>
                  View all
                </button>
              </div>

              <div className="emptySmall">
                <div className="emptyIcon">◎</div>
                <strong>No campaigns yet</strong>
                <p>Your campaigns will appear here.</p>
              </div>
            </div>
          </div>

          <div className="panel quick">
            <h2>What would you like to promote?</h2>
            <p>Start a legitimate campaign in just a few steps.</p>

            <div className="quickGrid">
              {campaignTypes.slice(0, 4).map((x) => (
                <button
                  key={x}
                  onClick={() => {
                    setType(x);
                    go("create");
                  }}
                >
                  <span>↗</span>
                  {x}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {screen === "campaigns" && (
        <SimplePage
          title="Campaigns"
          text="Your campaigns will appear here."
          action="Create Campaign"
          onAction={() => go("create")}
        />
      )}

      {screen === "wallet" && (
        <SimplePage
          title="Wallet"
          text="Your verified wallet balance is currently ₦0.00."
          action="Create Campaign"
          onAction={() => go("create")}
        />
      )}

      {screen === "results" && (
        <SimplePage
          title="Results"
          text="Awaiting provider data. Real results will appear here when available."
        />
      )}

      {screen === "transactions" && (
        <SimplePage
          title="Transactions"
          text="Your verified payment and wallet transactions will appear here."
        />
      )}

      {screen === "rewards" && (
        <SimplePage
          title="Rewards"
          text="Rewards are controlled by PROMVANTA administrators and appear when enabled."
        />
      )}

      {screen === "invite" && (
        <SimplePage
          title="Invite & Earn"
          text="Your secure referral information will appear here."
        />
      )}

      {screen === "support" && (
        <SimplePage
          title="Support"
          text="Need help? Open a support request and our team can assist."
        />
      )}

      {screen === "profile" && (
        <SimplePage
          title="Profile & Settings"
          text="Manage your account and security settings."
        />
      )}
    </AppShell>
  );
}

function AppShell({
  children,
  screen,
  setScreen,
  mobileMenu,
  setMobileMenu,
}: any) {
  return (
    <div className="app dashboardApp">
      <style>{css}</style>

      <header className="appHeader">
        <button className="brand" onClick={() => setScreen("dashboard")}>
         
