"use client";

import { useState } from "react";
import Link from "next/link";

export default function DashboardPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="dashboard">
      <style jsx>{`
        .dashboard {
          min-height: 100vh;
          background: #f7f8fc;
          color: #171b3a;
        }

        .header {
          height: 72px;
          background: #fff;
          border-bottom: 1px solid #e7e9f0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 28px;
          position: sticky;
          top: 0;
          z-index: 20;
        }

        .brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 20px;
          font-weight: 800;
        }

        .mark {
          width: 38px;
          height: 38px;
          border-radius: 11px;
          display: grid;
          place-items: center;
          color: #fff;
          background: linear-gradient(135deg, #5b4df5, #795df6);
        }

        .headerRight {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .create {
          border: 0;
          border-radius: 10px;
          padding: 11px 17px;
          color: white;
          background: #5b4df5;
          font-weight: 750;
        }

        .layout {
          display: flex;
          min-height: calc(100vh - 72px);
        }

        .sidebar {
          width: 245px;
          background: #fff;
          border-right: 1px solid #e7e9f0;
          padding: 22px 14px;
          flex-shrink: 0;
        }

        .label {
          color: #9aa1b2;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: .08em;
          margin: 12px 11px 8px;
          text-transform: uppercase;
        }

        .nav {
          width: 100%;
          border: 0;
          background: transparent;
          border-radius: 10px;
          padding: 11px 12px;
          margin-bottom: 3px;
          text-align: left;
          color: #687084;
          font-weight: 650;
        }

        .nav:hover {
          background: #f1efff;
          color: #5948e8;
        }

        .content {
          flex: 1;
          padding: 32px;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
        }

        .welcome {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 20px;
          margin-bottom: 26px;
        }

        .eyebrow {
          color: #6556e8;
          font-size: 13px;
          font-weight: 750;
          margin-bottom: 7px;
        }

        h1 {
          margin: 0;
          font-size: 35px;
          letter-spacing: -.8px;
        }

        .sub {
          color: #747c8e;
          margin-top: 8px;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .card {
          background: #fff;
          border: 1px solid #e7e9f0;
          border-radius: 16px;
          padding: 20px;
          box-shadow: 0 5px 20px rgba(30, 35, 60, .035);
        }

        .statTitle {
          color: #858c9d;
          font-size: 13px;
          font-weight: 650;
        }

        .statValue {
          margin-top: 9px;
          font-size: 25px;
          font-weight: 800;
        }

        .columns {
          display: grid;
          grid-template-columns: 1.4fr 1fr;
          gap: 18px;
          margin-top: 20px;
        }

        .cardHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .cardHeader h2 {
          margin: 0;
          font-size: 19px;
        }

        .empty {
          min-height: 190px;
          display: grid;
          place-items: center;
          text-align: center;
          color: #858c9d;
        }

        .icon {
          width: 48px;
          height: 48px;
          border-radius: 14px;
          display: grid;
          place-items: center;
          background: #f0eeff;
          color: #5b4df5;
          margin: 0 auto 12px;
          font-size: 21px;
        }

        .mobile {
          display: none;
          border: 0;
          background: #f0eeff;
          color: #5b4df5;
          border-radius: 9px;
          padding: 8px 10px;
          font-size: 18px;
        }

        @media (max-width: 900px) {
          .sidebar {
            position: fixed;
            top: 72px;
            bottom: 0;
            left: -260px;
            z-index: 15;
            transition: .2s;
          }

          .sidebar.open {
            left: 0;
          }

          .mobile {
            display: block;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }

          .columns {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .header {
            padding: 0 14px;
          }

          .content {
            padding: 16px;
          }

          .welcome {
            flex-direction: column;
            align-items: flex-start;
          }

          .stats {
            gap: 10px;
          }

          .card {
            padding: 15px;
          }

          .statValue {
            font-size: 21px;
          }

          .headerRight .create {
            display: none;
          }

          h1 {
            font-size: 29px;
          }
        }
      `}</style>

      <header className="header">
        <div className="brand">
          <button
            className="mobile"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>

          <div className="mark">P</div>
          PROMVANTA
        </div>

        <div className="headerRight">
          <Link href="/create-campaign">
            <button className="create">Create Campaign</button>
          </Link>
        </div>
      </header>

      <div className="layout">
        <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
          <div className="label">Workspace</div>

          <Link href="/dashboard">
            <button className="nav">◉ Home</button>
          </Link>

          <Link href="/campaigns">
            <button className="nav">◫ My Campaigns</button>
          </Link>

          <Link href="/create-campaign">
            <button className="nav">＋ Create Campaign</button>
          </Link>

          <Link href="/wallet">
            <button className="nav">◈ Wallet</button>
          </Link>

          <Link href="/results">
            <button className="nav">◒ Results</button>
          </Link>

          <Link href="/transactions">
            <button className="nav">⇄ Transactions</button>
          </Link>

          <div className="label">Benefits</div>

          <Link href="/rewards">
            <button className="nav">✦ Rewards</button>
          </Link>

          <Link href="/invite">
            <button className="nav">♧ Invite & Earn</button>
          </Link>

          <div className="label">Account</div>

          <Link href="/support">
            <button className="nav">? Support</button>
          </Link>

          <Link href="/profile">
            <button className="nav">◯ Profile & Settings</button>
          </Link>
        </aside>

        <section className="content">
          <div className="container">
            <div className="welcome">
              <div>
                <div className="eyebrow">
                  Legitimate promotion, real tracking
                </div>

                <h1>Welcome back 👋</h1>

                <div className="sub">
                  Promote smarter. Reach further.
                </div>
              </div>

              <Link href="/create-campaign">
                <button className="create">
                  Create Campaign
                </button>
              </Link>
            </div>

            <div className="stats">
              <div className="card">
                <div className="statTitle">Wallet Balance</div>
                <div className="statValue">₦0.00</div>
              </div>

              <div className="card">
                <div className="statTitle">Active Campaigns</div>
                <div className="statValue">0</div>
              </div>

              <div className="card">
                <div className="statTitle">Total Spend</div>
                <div className="statValue">₦0.00</div>
              </div>

              <div className="card">
                <div className="statTitle">Completed Campaigns</div>
                <div className="statValue">0</div>
              </div>
            </div>

            <div className="columns">
              <div className="card">
                <div className="cardHeader">
                  <h2>Campaign Performance</h2>
                </div>

                <div className="empty">
                  <div>
                    <div className="icon">◒</div>
                    <strong>No campaign data yet</strong>
                    <div>
                      Real provider results will appear here.
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="cardHeader">
                  <h2>Recent Campaigns</h2>
                </div>

                <div className="empty">
                  <div>
                    <div className="icon">＋</div>
                    <strong>No campaigns yet</strong>
                    <div>
                      Create your first campaign to get started.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
            }
