"use client";

import { useState } from "react";

type Screen =
  | "home"
  | "dashboard"
  | "campaigns"
  | "create"
  | "wallet"
  | "results"
  | "transactions"
  | "rewards"
  | "invite"
  | "support"
  | "profile"
  | "login"
  | "signup";

const categories = [
  ["Music Promotion", "Promote music and reach new audiences."],
  ["Video Promotion", "Grow legitimate video reach and discovery."],
  ["Website Traffic", "Drive real visitors to your website."],
  ["Social Content", "Promote eligible social content."],
  ["Product Promotion", "Put your product in front of relevant audiences."],
  ["Business Promotion", "Build awareness for your business."],
  ["Brand Awareness", "Increase visibility for your brand."],
  ["Creator Promotion", "Grow your creator presence."],
];

const navItems: [Screen, string, string][] = [
  ["dashboard", "⌂", "Home"],
  ["campaigns", "▣", "Campaigns"],
  ["create", "+", "Create Campaign"],
  ["wallet", "₦", "Wallet"],
  ["results", "◔", "Results"],
  ["transactions", "▤", "Transactions"],
  ["rewards", "★", "Rewards"],
  ["invite", "↗", "Invite & Earn"],
  ["support", "?", "Support"],
  ["profile", "○", "Profile & Settings"],
];

export default function Home() {
  const [screen, setScreen] = useState<Screen>("home");
  const [mobileOpen, setMobileOpen] = useState(false);

  const go = (next: Screen) => {
    setScreen(next);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (screen === "home") {
    return (
      <>
        <style>{styles}</style>
        <Marketing go={go} />
      </>
    );
  }

  if (screen === "login") {
    return (
      <>
        <style>{styles}</style>
        <Auth mode="login" go={go} />
      </>
    );
  }

  if (screen === "signup") {
    return (
      <>
        <style>{styles}</style>
        <Auth mode="signup" go={go} />
      </>
    );
  }

  return (
    <>
      <style>{styles}</style>
      <div className="app">
        <aside className={mobileOpen ? "sidebar open" : "sidebar"}>
          <div className="sideBrand" onClick={() => go("dashboard")}>
            <span className="logo">P</span>
            <div>
              <strong>PROMVANTA</strong>
              <small>Legitimate promotion</small>
            </div>
          </div>

          <nav>
            {navItems.map(([id, icon, label]) => (
              <button
                key={id}
                className={screen === id ? "nav active" : "nav"}
                onClick={() => go(id)}
              >
                <span>{icon}</span>
                {label}
              </button>
            ))}
          </nav>

          <div className="sideBottom">
            <div className="trustMini">
              <b>Real campaigns only</b>
              <span>No fake engagement. No bots.</span>
            </div>
            <button className="logout" onClick={() => go("home")}>
              ← Back to website
            </button>
          </div>
        </aside>

        {mobileOpen && (
          <button
            className="overlay"
            aria-label="Close menu"
            onClick={() => setMobileOpen(false)}
          />
        )}

        <main className="main">
          <header className="topbar">
            <button
              className="menuBtn"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              ☰
            </button>

            <div className="topTitle">
              <b>PROMVANTA</b>
              <span>Legitimate promotion, real tracking</span>
            </div>

            <button className="avatar" onClick={() => go("profile")}>
              U
            </button>
          </header>

          <div className="content">
            {screen === "dashboard" && <Dashboard go={go} />}
            {screen === "campaigns" && (
              <SimplePage
                title="My Campaigns"
                text="Manage and track your promotion campaigns."
                button="Create Campaign"
                action={() => go("create")}
              />
            )}
            {screen === "create" && <CreateCampaign go={go} />}
            {screen === "wallet" && (
              <Wallet go={go} />
            )}
            {screen === "results" && (
              <SimplePage
                title="Campaign Results"
                text="Real provider results will appear here when campaign data becomes available."
                button="View Campaigns"
                action={() => go("campaigns")}
              />
            )}
            {screen === "transactions" && (
              <SimplePage
                title="Transactions"
                text="Your verified payments and receipts will appear here."
                button="Create Campaign"
                action={() => go("create")}
              />
            )}
            {screen === "rewards" && (
              <SimplePage
                title="Rewards"
                text="Rewards are available when enabled by PROMVANTA."
                button="Go to Dashboard"
                action={() => go("dashboard")}
              />
            )}
            {screen === "invite" && (
              <SimplePage
                title="Invite & Earn"
                text="Your referral tools will appear here when the referral program is enabled."
                button="Go to Dashboard"
                action={() => go("dashboard")}
              />
            )}
            {screen === "support" && (
              <SimplePage
                title="Support Center"
                text="Need help? Open a support request and reference your campaign or transaction."
                button="Create Campaign"
                action={() => go("create")}
              />
            )}
            {screen === "profile" && (
              <SimplePage
                title="Profile & Settings"
                text="Manage your account information and security settings."
                button="Back to Dashboard"
                action={() => go("dashboard")}
              />
            )}
          </div>
        </main>
      </div>
    </>
  );
}

function Marketing({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="marketing">
      <header className="marketingNav">
        <div className="brandLarge">
          <span className="logo">P</span>
          <div>
            <strong>PROMVANTA</strong>
            <small>Legitimate promotion, real tracking</small>
          </div>
        </div>

        <div className="desktopLinks">
          <button onClick={() => go("home")}>Home</button>
          <button onClick={() => go("create")}>Campaigns</button>
          <button onClick={() => go("home")}>How It Works</button>
          <button onClick={() => go("home")}>Pricing</button>
          <button onClick={() => go("home")}>FAQ</button>
        </div>

        <div className="navActions">
          <button className="loginBtn" onClick={() => go("login")}>
            Sign in
          </button>
          <button className="primary small" onClick={() => go("signup")}>
            Create Account
          </button>
        </div>
      </header>

      <section className="hero">
        <div className="heroText">
          <div className="pill">✓ Legitimate digital promotion</div>
          <h1>
            Promote smarter.
            <br />
            <span>Reach further.</span>
          </h1>
          <p>
            Launch legitimate digital promotion campaigns, manage your budget
            and track real campaign results from one simple platform.
          </p>

          <div className="heroButtons">
            <button className="primary" onClick={() => go("create")}>
              Create a Campaign →
            </button>
            <button className="secondary" onClick={() => go("dashboard")}>
              See How It Works
            </button>
          </div>

          <div className="trustLine">
            <span>✓ Secure payments</span>
            <span>✓ Real tracking</span>
            <span>✓ No bots</span>
          </div>
        </div>

        <DemoDashboard />
      </section>

      <section className="trustSection">
        <div className="sectionHeading">
          <span className="eyebrow">BUILT ON TRUST</span>
          <h2>Promotion without the guesswork.</h2>
          <p>
            PROMVANTA is designed around legitimate fulfillment, transparent
            pricing and real campaign reporting.
          </p>
        </div>

        <div className="featureGrid">
          {[
            ["◈", "Transparent pricing", "Know the final price before you pay."],
            ["✓", "Secure payments", "Payments are verified before campaigns proceed."],
            ["◔", "Real campaign tracking", "Results come from connected fulfillment systems."],
            ["◎", "Legitimate services", "No fake followers, bots or fabricated results."],
            ["?", "Customer support", "Get help when you need it."],
            ["◆", "Campaign review", "Campaigns can be reviewed before fulfillment."],
          ].map(([icon, title, text]) => (
            <div className="feature" key={title}>
              <div className="featureIcon">{icon}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="categories">
        <div className="sectionHeading">
          <span className="eyebrow">CAMPAIGNS</span>
          <h2>Promote what matters.</h2>
          <p>Choose the campaign type that fits your goal.</p>
        </div>

        <div className="categoryGrid">
          {categories.map(([title, text]) => (
            <button
              className="category"
              key={title}
              onClick={() => go("create")}
            >
              <span className="categoryIcon">✦</span>
              <strong>{title}</strong>
              <small>{text}</small>
              <span className="arrow">→</span>
            </button>
          ))}
        </div>
      </section>

      <section className="how">
        <div className="sectionHeading">
          <span className="eyebrow">HOW IT WORKS</span>
          <h2>Simple from start to finish.</h2>
        </div>

        <div className="steps">
          {[
            ["01", "Create your campaign", "Pick a category and add your promotion destination."],
            ["02", "Choose your goal", "Tell PROMVANTA what you need and get a calculated price."],
            ["03", "Pay securely", "Review the final amount before making payment."],
            ["04", "Track your campaign", "Follow real results as provider data becomes available."],
          ].map(([num, title, text]) => (
            <div className="step" key={num}>
              <span>{num}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta">
        <span className="eyebrow">READY?</span>
        <h2>Ready to launch your first campaign?</h2>
        <p>Promote smarter. Reach further.</p>
        <button className="primary" onClick={() => go("create")}>
          Create a Campaign →
        </button>
      </section>

      <footer>
        <div>
          <strong>PROMVANTA</strong>
          <p>
            Create, manage and track legitimate digital promotion campaigns
            from one powerful platform.
          </p>
        </div>
        <div>
          <b>Platform</b>
          <span>How It Works</span>
          <span>Campaigns</span>
          <span>Pricing</span>
          <span>FAQ</span>
        </div>
        <div>
          <b>Company</b>
          <span>Support</span>
          <span>Contact</span>
          <span>Legal</span>
          <span>Privacy Policy</span>
        </div>
        <div>
          <b>Trust</b>
          <span>No fake engagement.</span>
          <span>No bots.</span>
          <span>Real campaigns only.</span>
        </div>
        <small className="copyright">
          © 2026 PROMVANTA. All rights reserved.
        </small>
      </footer>
    </div>
  );
}

function DemoDashboard() {
  return (
    <div className="demoWrap">
      <div className="demoLabel">DEMO DATA</div>
      <div className="demoCard">
        <div className="demoTop">
          <div>
            <small>PROMVANTA DASHBOARD</small>
            <h3>Campaign performance</h3>
          </div>
          <span className="live">● Live</span>
        </div>

        <div className="demoStats">
          <div>
            <small>Wallet</small>
            <b>₦48,500</b>
          </div>
          <div>
            <small>Active</small>
            <b>3</b>
          </div>
          <div>
            <small>Reach</small>
            <b>12.4k</b>
          </div>
        </div>

        <div className="chart">
          {[35, 48, 40, 68, 54, 78, 70, 90, 82, 96].map((h, i) => (
            <span key={i} style={{ height: `${h}%` }} />
          ))}
        </div>

        <div className="days">
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
          <span>Sat</span>
          <span>Sun</span>
        </div>
      </div>
    </div>
  );
}

function Dashboard({ go }: { go: (s: Screen) => void }) {
  return (
    <div>
      <div className="pageIntro">
        <div>
          <span className="eyebrow">OVERVIEW</span>
          <h1>Welcome back 👋</h1>
          <p>Manage your promotion campaigns and track real results.</p>
        </div>
        <button className="primary" onClick={() => go("create")}>
          + Create Campaign
        </button>
      </div>

      <div className="statsGrid">
        <Stat title="Wallet Balance" value="₦0.00" />
        <Stat title="Active Campaigns" value="0" />
        <Stat title="Total Spend" value="₦0.00" />
        <Stat title="Completed Campaigns" value="0" />
      </div>

      <div className="dashboardGrid">
        <div className="panel">
          <div className="panelHead">
            <div>
              <h2>Campaign performance</h2>
              <p>Real provider data will appear here.</p>
            </div>
            <span className="emptyBadge">No data yet</span>
          </div>
          <div className="emptyChart">
            <div>◔</div>
            <strong>Awaiting campaign data</strong>
            <span>Create a campaign to start tracking results.</span>
            <button className="secondary" onClick={() => go("create")}>
              Create Campaign
            </button>
          </div>
        </div>

        <div className="panel">
          <div className="panelHead">
            <div>
              <h2>Recent campaigns</h2>
              <p>Your latest promotion activity.</p>
            </div>
          </div>
          <div className="emptySmall">
            <div>▣</div>
            <strong>No campaigns yet</strong>
            <span>Your campaigns will appear here.</span>
            <button className="primary" onClick={() => go("create")}>
              Start your first campaign
            </button>
          </div>
        </div>
      </div>

      <div className="quick">
        <h2>Start a campaign</h2>
        <div className="quickGrid">
          {categories.slice(0, 4).map(([title]) => (
            <button key={title} onClick={() => go("create")}>
              <span>✦</span>
              {title}
              <b>→</b>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div className="stat">
      <small>{title}</small>
      <strong>{value}</strong>
      <span>Current account value</span>
    </div>
  );
}

function CreateCampaign({ go }: { go: (s: Screen) => void }) {
  const [type, setType] = useState("");
  const [platform, setPlatform] = useState("");
  const [goal, setGoal] = useState("");
  const [destination, setDestination] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");

  const quantityGoals = [
    "Followers",
    "Subscribers",
    "Likes",
    "Comments",
    "Shares",
    "Video Views",
  ];

  const budgetGoals = [
    "Reach",
    "Brand Awareness",
    "Website Visits",
    "Leads / Sign-ups",
    "Sales / Conversions",
  ];

  const isQuantity = quantityGoals.includes(goal);

  return (
    <div className="formPage">
      <button className="back" onClick={() => go("dashboard")}>
        ← Dashboard
      </button>

      <div className="formIntro">
        <span className="eyebrow">NEW CAMPAIGN</span>
        <h1>Create your campaign</h1>
        <p>Tell PROMVANTA what you want to achieve. We calculate the price.</p>
      </div>

      <div className="formCard">
        <label>
          <span>1. Campaign Type</span>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select campaign type</option>
            {categories.map(([name]) => (
              <option key={name}>{name}</option>
            ))}
          </select>
        </label>

        <label>
          <span>2. Platform / Destination</span>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
          >
            <option value="">Select platform</option>
            <option>YouTube</option>
            <option>TikTok</option>
            <option>Instagram</option>
            <option>Facebook</option>
            <option>X</option>
            <option>Website</option>
            <option>Music Platform</option>
          </select>
        </label>

        <label>
          <span>3. Promotion Link</span>
          <input
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="https://..."
          />
          <small>Use a public destination that can be validated.</small>
        </label>

        <label>
          <span>4. Goal / Service</span>
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value="">Select one goal</option>
            {[...quantityGoals, ...budgetGoals]
              .filter((x, i, a) => a.indexOf(x) === i)
              .map((x) => (
                <option key={x}>{x}</option>
              ))}
          </select>
        </label>

        {isQuantity ? (
          <label>
            <span>5. Quantity Needed</span>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
            />
            <small>
              Final pricing is determined by the configured service/provider
              rate.
            </small>
          </label>
        ) : (
          <label>
            <span>5. Campaign Budget</span>
            <input
              type="number"
              min="2500"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="Minimum campaign value: ₦2,500"
            />
            <small>
              Estimates are not guaranteed results and depend on campaign
              performance.
            </small>
          </label>
        )}

        <div className="minimum">
          <b>Minimum campaign value: ₦2,500</b>
          <span>
            Your final amount will be shown before payment. No provider
            wholesale cost is exposed.
          </span>
        </div>

        <button
          className="primary full"
          onClick={() => {
            if (!type || !goal || !destination) {
              alert("Please complete the required campaign details.");
              return;
            }

            const amount = isQuantity
              ? Number(quantity || 0)
              : Number(budget |
