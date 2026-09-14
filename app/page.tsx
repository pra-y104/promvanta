import Link from "next/link";
import styles from "./page.module.css";

const categories = [
  {
    title: "Social Media Promotion",
    text: "Promote eligible social content and grow your audience through legitimate campaigns.",
  },
  {
    title: "Video Promotion",
    text: "Reach more relevant viewers and track campaign performance.",
  },
  {
    title: "Music Promotion",
    text: "Put your music and content in front of new audiences.",
  },
  {
    title: "Website Promotion",
    text: "Drive legitimate traffic and awareness to your website.",
  },
  {
    title: "Product Promotion",
    text: "Give products more visibility and connect with potential customers.",
  },
  {
    title: "Business Promotion",
    text: "Build awareness and reach for your business or brand.",
  },
  {
    title: "App Promotion",
    text: "Promote your app and measure campaign activity.",
  },
  {
    title: "Creator Promotion",
    text: "Help creators reach new audiences and grow their content presence.",
  },
];

const steps = [
  ["01", "Choose what to promote", "Select the campaign type that matches your goal."],
  ["02", "Tell us what you need", "Choose a supported destination and one specific promotion goal."],
  ["03", "Get your calculated price", "PROMVANTA calculates the campaign price from configured rates."],
  ["04", "Pay securely", "Review the campaign and complete payment through the available payment method."],
  ["05", "Track real results", "Follow campaign status and provider-reported results from your dashboard."],
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo}>
          <span>PROM</span>VANTA
        </Link>

        <div className={styles.navLinks}>
          <a href="#how-it-works">How It Works</a>
          <a href="#campaigns">Campaigns</a>
          <a href="#why-promvanta">Why PROMVANTA</a>
        </div>

        <div className={styles.navActions}>
          <Link href="/login" className={styles.login}>
            Sign In
          </Link>

          <Link href="/signup" className={styles.navButton}>
            Get Started
          </Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>
            <span className={styles.dot} />
            Legitimate digital promotion
          </div>

          <h1>
            Promote smarter.
            <br />
            <span>Reach further.</span>
          </h1>

          <p className={styles.heroText}>
            Launch legitimate digital promotion campaigns, manage your
            budget, and track real campaign results from one simple platform.
          </p>

          <div className={styles.heroActions}>
            <Link href="/create-campaign" className={styles.primaryButton}>
              Create a Campaign
              <span>→</span>
            </Link>

            <a href="#how-it-works" className={styles.secondaryButton}>
              See How It Works
            </a>
          </div>

          <div className={styles.trust}>
            <span>✓</span>
            No fake engagement. No bots. Real campaigns only.
          </div>
        </div>

        <div className={styles.heroVisual}>
          <div className={styles.glow} />

          <div className={styles.dashboardPreview}>
            <div className={styles.previewTop}>
              <div>
                <small>PROMVANTA</small>
                <strong>Campaign Overview</strong>
              </div>

              <span className={styles.demoLabel}>DEMO DATA</span>
            </div>

            <div className={styles.previewStats}>
              <div>
                <small>Wallet</small>
                <strong>₦48,500</strong>
              </div>

              <div>
                <small>Active</small>
                <strong>3</strong>
              </div>

              <div>
                <small>Reach</small>
                <strong>12.4k</strong>
              </div>
            </div>

            <div className={styles.chart}>
              <div className={styles.chartLine}>
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>

            <div className={styles.previewCampaign}>
              <div>
                <span className={styles.campaignIcon}>▶</span>
                <div>
                  <strong>Video Promotion</strong>
                  <small>Tracking campaign performance</small>
                </div>
              </div>

              <span className={styles.active}>Active</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.trustBar}>
        <span>REAL CAMPAIGNS</span>
        <span>TRANSPARENT PRICING</span>
        <span>SECURE PAYMENTS</span>
        <span>REAL TRACKING</span>
      </section>

      <section id="campaigns" className={styles.section}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>WHAT YOU CAN PROMOTE</p>

          <h2>
            One platform for your
            <br />
            <span>digital promotion goals.</span>
          </h2>

          <p>
            Choose the type of promotion that fits what you're trying to
            achieve. Available goals depend on the selected platform and
            legitimate fulfillment availability.
          </p>
        </div>

        <div className={styles.categoryGrid}>
          {categories.map((category, index) => (
            <div className={styles.categoryCard} key={category.title}>
              <span className={styles.categoryNumber}>
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3>{category.title}</h3>

              <p>{category.text}</p>

              <span className={styles.arrow}>↗</span>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className={`${styles.section} ${styles.howSection}`}>
        <div className={styles.sectionHeading}>
          <p className={styles.kicker}>HOW IT WORKS</p>

          <h2>
            Simple from start
            <br />
            <span>to real results.</span>
          </h2>
        </div>

        <div className={styles.steps}>
          {steps.map(([number, title, text]) => (
            <div className={styles.step} key={number}>
              <span>{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="why-promvanta" className={styles.promise}>
        <div>
          <p className={styles.kicker}>THE PROMVANTA PROMISE</p>

          <h2>
            Promotion without
            <br />
            <span>the guesswork.</span>
          </h2>
        </div>

        <div className={styles.promiseText}>
          <p>
            PROMVANTA is designed around legitimate promotion, transparent
            pricing, and real campaign tracking.
          </p>

          <p>
            We don't manufacture engagement or invent campaign results. When
            provider data is unavailable, we tell you instead of pretending.
          </p>

          <div className={styles.promiseList}>
            <span>✓ Legitimate fulfillment</span>
            <span>✓ Real provider reporting</span>
            <span>✓ Clear campaign pricing</span>
            <span>✓ No fake statistics</span>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <p className={styles.kicker}>READY TO PROMOTE?</p>

        <h2>
          Tell us what you want
          <br />
          <span>to achieve.</span>
        </h2>

        <p>
          Create your first campaign and see your calculated price before
          payment.
        </p>

        <Link href="/create-campaign" className={styles.primaryButton}>
          Create a Campaign
          <span>→</span>
        </Link>
      </section>

      <footer className={styles.footer}>
        <div>
          <Link href="/" className={styles.logo}>
            <span>PROM</span>VANTA
          </Link>

          <p>Legitimate promotion, real tracking.</p>
        </div>

        <div className={styles.footerLinks}>
          <Link href="/login">Sign In</Link>
          <Link href="/signup">Create Account</Link>
          <Link href="/support">Support</Link>
          <span>© {new Date().getFullYear()} PROMVANTA</span>
        </div>
      </footer>
    </main>
  );
  }
