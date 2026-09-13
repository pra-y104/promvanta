import Link from "next/link";
import styles from "./dashboard.module.css";

export default function DashboardPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <div>
          <p className={styles.brand}>PROMVANTA</p>
          <h1>Welcome back 👋</h1>
          <p>Legitimate promotion, real tracking.</p>
        </div>

        <Link href="/create-campaign" className={styles.primaryButton}>
          Create Campaign
        </Link>
      </header>

      <section className={styles.cards}>
        <div className={styles.card}>
          <span>Wallet Balance</span>
          <strong>₦0.00</strong>
        </div>

        <div className={styles.card}>
          <span>Active Campaigns</span>
          <strong>0</strong>
        </div>

        <div className={styles.card}>
          <span>Total Spend</span>
          <strong>₦0.00</strong>
        </div>

        <div className={styles.card}>
          <span>Completed Campaigns</span>
          <strong>0</strong>
        </div>
      </section>

      <section className={styles.emptyState}>
        <h2>Start your first campaign</h2>
        <p>
          Tell PROMVANTA what you want to promote and what you want to achieve.
          We calculate the appropriate price and track real results.
        </p>

        <Link href="/create-campaign" className={styles.primaryButton}>
          Create Your First Campaign
        </Link>
      </section>
    </main>
  );
}
