"use client";

import { useState } from "react";

const types = [
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

const quantityGoals = [
  "Followers",
  "Subscribers",
  "Likes",
  "Comments",
  "Shares",
  "Video Views",
];

export default function Home() {
  const [page, setPage] = useState("home");
  const [type, setType] = useState("");
  const [goal, setGoal] = useState("");
  const [link, setLink] = useState("");
  const [amount, setAmount] = useState("");

  const quantityMode = quantityGoals.includes(goal);
  const value = Number(amount || 0);
  const price = quantityMode ? value * 10 : value;

  if (page === "create") {
    return (
      <main style={styles.page}>
        <Header setPage={setPage} />
        <section style={styles.container}>
          <h1>Create Campaign</h1>
          <p style={styles.muted}>
            Tell PROMVANTA what you want to promote and what you want to
            achieve.
          </p>

          <div style={styles.card}>
            <label>Campaign Type</label>
            <select
              value={type}
              onChange={(e) => {
                setType(e.target.value);
                setGoal("");
              }}
              style={styles.input}
            >
              <option value="">Select campaign type</option>
              {types.map((x) => (
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
                  style={styles.input}
                />

                <label>Goal / Service</label>
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  style={styles.input}
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
                      ? "Enter quantity"
                      : "Enter campaign budget"
                  }
                  style={styles.input}
                />

                <div style={styles.notice}>
                  Minimum campaign value: ₦2,500
                </div>

                <div style={styles.total}>
                  Calculated price: ₦{price.toLocaleString()}
                </div>

                <button
                  style={styles.button}
                  onClick={() => {
                    if (!link || !amount || price < 2500) return;
                    setPage("review");
                  }}
                >
                  Review Campaign
                </button>
              </>
            )}
          </div>
        </section>
      </main>
    );
  }

  if (page === "review") {
    return (
      <main style={styles.page}>
        <Header setPage={setPage} />
        <section style={styles.container}>
          <h1>Review Campaign</h1>

          <div style={styles.card}>
            <Row name="Campaign Type" value={type} />
            <Row name="Goal" value={goal} />
            <Row name="Destination" value={link} />
            <Row
              name={quantityMode ? "Quantity" : "Budget"}
              value={amount}
            />
            <Row name="Total" value={`₦${price.toLocaleString()}`} />

            <div style={styles.notice}>
              Real payment and provider fulfillment will only be activated
              after the secure backend integrations are configured.
            </div>

            <button
              style={styles.button}
              onClick={() =>
                alert(
                  "Payment provider is not configured yet. No payment has been taken."
                )
              }
            >
              Pay Securely
            </button>

            <button
              style={styles.secondary}
              onClick={() => setPage("create")}
            >
              Edit Campaign
            </button>
          </div>
        </section>
      </main>
    );
  }

  if (page === "dashboard") {
    return (
      <main style={styles.page}>
        <Header setPage={setPage} />
        <section style={styles.container}>
          <h1>Welcome back 👋</h1>
          <p style={styles.muted}>
            Legitimate promotion, real tracking.
          </p>

          <div style={styles.grid}>
            <Stat title="Wallet Balance" value="₦0.00" />
            <Stat title="Active Campaigns" value="0" />
            <Stat title="Total Spend" value="₦0.00" />
            <Stat title="Completed Campaigns" value="0" />
          </div>

          <div style={styles.card}>
            <h2>Campaign performance</h2>
            <p style={styles.muted}>
              No campaign data yet. Real provider results will appear here
              after a campaign becomes active.
            </p>
            <button style={styles.button} onClick={() => setPage("create")}>
              Create Campaign
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      <Header setPage={setPage} />

      <section style={styles.hero}>
        <div style={styles.badge}>Legitimate promotion, real tracking</div>

        <h1 style={styles.heroTitle}>
          Promote smarter.
          <br />
          Reach further.
        </h1>

        <p style={styles.heroText}>
          Launch legitimate digital promotion campaigns, manage your budget
          and track real campaign results from one simple platform.
        </p>

        <button style={styles.button} onClick={() => setPage("create")}>
          Create a Campaign
        </button>

        <button
          style={styles.secondary}
          onClick={() => setPage("dashboard")}
        >
          See How It Works
        </button>

        <p style={styles.trust}>
          No fake engagement. No bots. Real campaigns only.
        </p>
      </section>

      <section style={styles.container}>
        <h2>Campaign performance</h2>
        <p style={styles.muted}>DEMO DATA — example dashboard</p>

        <div style={styles.grid}>
          <Stat title="Wallet" value="₦48,500" />
          <Stat title="Active" value="3" />
          <Stat title="Reach" value="12.4k" />
          <Stat title="Campaigns" value="8" />
        </div>

        <div style={styles.card}>
          <h2>Built on trust and transparency</h2>
          <p style={styles.muted}>
            Transparent pricing • Secure payments • Real campaign tracking •
            Legitimate services • Customer support
          </p>
        </div>

        <h2>Campaign categories</h2>

        <div style={styles.grid}>
          {types.map((x) => (
            <div style={styles.card} key={x}>
              <h3>{x}</h3>
              <p style={styles.muted}>
                Choose a relevant promotion goal and campaign requirements.
              </p>
            </div>
          ))}
        </div>

        <div style={styles.card}>
          <h2>How PROMVANTA works</h2>
          <p style={styles.muted}>
            1. Create your campaign.
            <br />
            2. Choose what you want to achieve.
            <br />
            3. Review the calculated price.
            <br />
            4. Pay securely.
            <br />
            5. Track real campaign results.
          </p>
        </div>
      </section>

      <footer style={styles.footer}>
        <h2>PROMVANTA</h2>
        <p>
          Create, manage and track legitimate digital promotion campaigns
          from one powerful platform.
        </p>
        <p>Promote smarter. Reach further.</p>
        <p>© 2026 PROMVANTA. All rights reserved.</p>
        <p>No fake engagement. No bots. Real campaigns only.</p>
      </footer>
    </main>
  );
}

function Header({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  return (
    <header style={styles.header}>
      <button style={styles.logo} onClick={() => setPage("home")}>
        PROM<span>VANTA</span>
      </button>

      <nav>
        <button style={styles.nav} onClick={() => setPage("home")}>
          Home
        </button>
        <button style={styles.nav} onClick={() => setPage("dashboard")}>
          Dashboard
        </button>
        <button style={styles.nav} onClick={() => setPage("create")}>
          Create Campaign
        </button>
      </nav>
    </header>
  );
}

function Row({ name, value }: { name: string; value: string }) {
  return (
    <div style={styles.row}>
      <span>{name}</span>
      <strong>{value}</strong>
    </div>
  );
}

function Stat({ title, value }: { title: string; value: string }) {
  return (
    <div style={styles.card}>
      <small style={styles.muted}>{title}</small>
      <h2>{value}</h2>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    minHeight: "100vh",
    background: "#f7f8fc",
    color: "#171827",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    height: 70,
    background: "#fff",
    borderBottom: "1px solid #e7e7ef",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 6%",
    position: "sticky",
    top: 0,
    zIndex: 5,
  },
  logo: {
    border: 0,
    background: "none",
    fontSize: 22,
    fontWeight: 900,
    color: "#171827",
  },
  hero: {
    textAlign: "center",
    padding: "90px 20px 70px",
    background: "#fff",
  },
  heroTitle: {
    fontSize: "clamp(42px, 8vw, 72px)",
    lineHeight: 1,
    letterSpacing: "-3px",
    margin: "20px auto",
    maxWidth: 850,
  },
  heroText: {
    maxWidth: 650,
    margin: "0 auto 28px",
    color: "#6c6d7b",
    fontSize: 18,
    lineHeight: 1.6,
  },
  badge: {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 30,
    background: "#efedff",
    color: "#5548d8",
    fontWeight: 700,
  },
  trust: {
    fontWeight: 700,
    color: "#4b4c58",
    marginTop: 22,
  },
  container: {
    maxWidth: 1100,
    margin: "auto",
    padding: "55px 6%",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(210px,1fr))",
    gap: 16,
    margin: "22px 0 40px",
  },
  card: {
    background: "#fff",
    border: "1px solid #e6e6ee",
    borderRadius: 18,
    padding: 22,
    marginBottom: 18,
  },
  button: {
    background: "#5b4df5",
    color: "#fff",
    border: 0,
    borderRadius: 10,
    padding: "13px 20px",
    fontWeight: 700,
    margin: "6px",
  },
  secondary: {
    background: "#fff",
    color: "#5145d8",
    border: "1px solid #d9d6f7",
    borderRadius: 10,
    padding: "12px 20px",
    fontWeight: 700,
    margin: "6px",
  },
  nav: {
    background: "none",
    border: 0,
    padding: 10,
    color: "#55576a",
  },
  input: {
    width: "100%",
    padding: 13,
    border: "1px solid #dddde7",
    borderRadius: 10,
    margin: "8px 0 18px",
    background: "#fff",
  },
  notice: {
    padding: 14,
    background: "#fff6df",
    borderRadius: 10,
    margin: "18px 0",
    color: "#735900",
  },
  total: {
    fontSize: 22,
    fontWeight: 800,
    margin: "20px 0",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    gap: 20,
    padding: "14px 0",
    borderBottom: "1px solid #eee",
  },
  muted: {
    color: "#6f7180",
    lineHeight: 1.6,
  },
  footer: {
    background: "#171827",
    color: "#fff",
    padding: "50px 6%",
  },
};
