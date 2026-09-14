"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

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

const budgetServices = new Set([
  "Reach",
  "Brand Awareness",
  "Website Visits",
  "Landing-Page Traffic",
  "Leads",
  "Leads / Sign-ups",
  "Sales / Conversions",
  "Local Promotion",
  "Conversions",
  "App Visits",
  "App Installs",
]);

export default function CreateCampaignPage() {
  const [type, setType] = useState("");
  const [platform, setPlatform] = useState("");
  const [destination, setDestination] = useState("");
  const [service, setService] = useState("");
  const [quantity, setQuantity] = useState("");
  const [budget, setBudget] = useState("");

  const availableServices = useMemo(
    () => (type ? services[type] ?? [] : []),
    [type]
  );

  const isBudgetBased = budgetServices.has(service);

  const numericQuantity = Number(quantity) || 0;
  const numericBudget = Number(budget) || 0;

  const calculatedAmount = isBudgetBased
    ? numericBudget
    : numericQuantity;

  const minimumCampaignValue = 2500;

  const meetsMinimum =
    calculatedAmount >= minimumCampaignValue;

  const ready =
    Boolean(type) &&
    Boolean(platform) &&
    Boolean(destination.trim()) &&
    Boolean(service) &&
    calculatedAmount > 0 &&
    meetsMinimum;

  const resetAfterTypeChange = (value: string) => {
    setType(value);
    setService("");
    setQuantity("");
    setBudget("");
  };

  return (
    <main className="page">
      <style jsx>{`
        .page {
          min-height: 100vh;
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
          padding: 28px 18px 60px;
        }

        .container {
          max-width: 980px;
          margin: 0 auto;
        }

        .back {
          display: inline-block;
          color: #5b4df5;
          font-weight: 700;
          text-decoration: none;
          margin-bottom: 25px;
        }

        .heading {
          margin-bottom: 24px;
        }

        .eyebrow {
          color: #6556e8;
          font-size: 13px;
          font-weight: 800;
          margin-bottom: 7px;
        }

        h1 {
          margin: 0;
          font-size: clamp(29px, 5vw, 42px);
          letter-spacing: -.9px;
        }

        .subtitle {
          color: #747c8e;
          line-height: 1.6;
          margin-top: 9px;
        }

        .card {
          background: #fff;
          border: 1px solid #e7e9f0;
          border-radius: 18px;
          padding: 24px;
          box-shadow: 0 6px 25px rgba(30, 35, 60, .035);
        }

        .steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 8px;
          margin-bottom: 24px;
        }

        .step {
          background: #f0eeff;
          color: #6252ee;
          border-radius: 9px;
          padding: 9px;
          text-align: center;
          font-size: 11px;
          font-weight: 750;
        }

        .field {
          margin-bottom: 20px;
        }

        label {
          display: block;
          color: #454b5d;
          font-size: 13px;
          font-weight: 750;
          margin-bottom: 8px;
        }

        select,
        input {
          width: 100%;
          min-height: 47px;
          padding: 12px 14px;
          border: 1px solid #dfe2eb;
          border-radius: 11px;
          background: #fff;
          color: #22283a;
          outline: none;
        }

        select:focus,
        input:focus {
          border-color: #6556e8;
          box-shadow: 0 0 0 3px rgba(101, 86, 232, .1);
        }

        .services {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .service {
          border: 1px solid #e1e4ed;
          background: #fff;
          border-radius: 11px;
          padding: 14px;
          color: #51586a;
          font-weight: 650;
          text-align: left;
        }

        .service:hover {
          border-color: #9186f5;
        }

        .service.selected {
          border-color: #6252ee;
          background: #f0eeff;
          color: #5545d9;
        }

        .notice {
          background: #f3f1ff;
          border: 1px solid #e3dfff;
          color: #5147a4;
          padding: 14px;
          border-radius: 11px;
          font-size: 13px;
          line-height: 1.55;
          margin-bottom: 20px;
        }

        .price {
          border: 1px solid #e5e7ef;
          border-radius: 13px;
          padding: 18px;
          margin: 20px 0;
          background: #fbfbfd;
        }

        .priceLabel {
          color: #858c9d;
          font-size: 13px;
        }

        .priceValue {
          font-size: 29px;
          font-weight: 850;
          margin-top: 5px;
        }

        .minimumError {
          margin-top: 10px;
          color: #b42318;
          font-size: 13px;
          font-weight: 650;
        }

        .actions {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          margin-top: 25px;
        }

        .secondary,
        .primary {
          min-height: 47px;
          border-radius: 11px;
          padding: 0 18px;
          font-weight: 750;
        }

        .secondary {
          border: 1px solid #dfe2eb;
          background: #fff;
          color: #555d70;
        }

        .primary {
          border: 0;
          background: #5b4df5;
          color: white;
        }

        .primary:disabled {
          opacity: .45;
          cursor: not-allowed;
        }

        @media (max-width: 700px) {
          .steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .services {
            grid-template-columns: 1fr;
          }

          .card {
            padding: 18px;
          }

          .actions {
            flex-direction: column-reverse;
          }

          .secondary,
          .primary {
            width: 100%;
          }
        }
      `}</style>

      <div className="container">
        <Link href="/dashboard" className="back">
          ← Back to Dashboard
        </Link>

        <div className="heading">
          <div className="eyebrow">
            Legitimate promotion, real tracking
          </div>

          <h1>Create a Campaign</h1>

          <div className="subtitle">
            Tell PROMVANTA what you want to achieve. We calculate the
            applicable campaign price before payment.
          </div>
        </div>

        <div className="steps">
          <div className="step">1. What</div>
          <div className="step">2. Where</div>
          <div className="step">3. Goal</div>
          <div className="step">4. Amount</div>
          <div className="step">5. Review</div>
        </div>

        <div className="card">
          <div className="field">
            <label>Campaign Type</label>

            <select
              value={type}
              onChange={(event) =>
                resetAfterTypeChange(event.target.value)
              }
            >
              <option value="">Select campaign type</option>

              {campaignTypes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Platform / Destination</label>

            <select
              value={platform}
              onChange={(event) =>
                setPlatform(event.target.value)
              }
            >
              <option value="">Select platform</option>

              {platforms.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label>Promotion Link / Destination</label>

            <input
              type="url"
              value={destination}
              onChange={(event) =>
                setDestination(event.target.value)
              }
              placeholder="https://..."
            />
          </div>

          {type && (
            <div className="field">
              <label>Select ONE Goal / Service</label>

              <div className="services">
                {availableServices.map((item) => (
                  <button
                    type="button"
                    key={item}
                    className={`service ${
                      service === item ? "selected" : ""
                    }`}
                    onClick={() => {
                      setService(item);
                      setQuantity("");
                      setBudget("");
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}

          {service && (
            <>
              <div className="notice">
                {isBudgetBased ? (
                  <>
                    This service uses a <strong>Campaign Budget</strong>.
                    Delivery is estimated from the configured legitimate
                    provider campaign and is not guaranteed.
                  </>
                ) : (
                  <>
                    This service uses <strong>Quantity Needed</strong>.
                    PROMVANTA calculates the price from the configured
                    service rate.
                  </>
                )}
              </div>

              {isBudgetBased ? (
                <div className="field">
                  <label>Campaign Budget</label>

                  <input
                    type="number"
                    min="0"
                    value={budget}
                    onChange={(event) =>
                      setBudget(event.target.value)
                    }
                    placeholder="Enter campaign budget"
                  />
                </div>
              ) : (
                <div className="field">
                  <label>Quantity Needed</label>

                  <input
                    type="number"
                    min="0"
                    value={quantity}
                    onChange={(event) =>
                      setQuantity(event.target.value)
                    }
                    placeholder="Enter quantity needed"
                  />
                </div>
              )}

              {calculatedAmount > 0 && (
                <div className="price">
                  <div className="priceLabel">
                    {isBudgetBased
                      ? "Campaign Budget"
                      : "Calculated Service Amount"}
                  </div>

                  <div className="priceValue">
                    ₦
                    {calculatedAmount.toLocaleString(
                      "en-NG",
                      {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      }
                    )}
                  </div>

                  <div className="priceLabel">
                    Minimum campaign value: ₦2,500
                  </div>

                  {!meetsMinimum && (
                    <div className="minimumError">
                      Minimum campaign value is ₦2,500. Please
                      increase your requested quantity or adjust
                      your campaign selection to continue.
                    </div>
                  )}
                </div>
              )}

              <div className="notice">
                Estimated campaign period will come from the
                configured fulfillment service. PROMVANTA does not
                promise an exact completion date.
              </div>

              <div className="actions">
                <Link href="/dashboard">
                  <button type="button" className="secondary">
                    Cancel
                  </button>
                </Link>

                <button
                  type="button"
                  className="primary"
                  disabled={!ready}
                  onClick={() => {
                    sessionStorage.setItem(
                      "promvanta_campaign",
                      JSON.stringify({
                        campaignType: type,
                        platform,
                        destination,
                        service,
                        mode: isBudgetBased
                          ? "budget"
                          : "quantity",
                        quantity: isBudgetBased
                          ? null
                          : numericQuantity,
                        budget: isBudgetBased
                          ? numericBudget
                          : null,
                        calculatedAmount,
                      })
                    );

                    window.location.href =
                      "/review-campaign";
                  }}
                >
                  Review Campaign
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </main>
  );
    }
