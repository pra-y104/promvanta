"use client";

import { useMemo, useState } from "react";
import {
  campaignTypes,
  getServicesForCampaignType,
} from "@/lib/campaigns";
import { platforms } from "@/lib/platforms";
import { getPricingRule } from "@/lib/get-pricing-rule";
import { formatNaira } from "@/lib/format";
import styles from "./create-campaign.module.css";

export default function CreateCampaignPage() {
  const [campaignType, setCampaignType] = useState("");
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [destination, setDestination] = useState("");
  const [quantity, setQuantity] = useState("");

  const availableServices = useMemo(
    () => getServicesForCampaignType(campaignType),
    [campaignType]
  );

  const pricingRule = useMemo(() => {
    if (!platform || !service) return null;
    return getPricingRule(platform, service);
  }, [platform, service]);

  const calculatedPrice = useMemo(() => {
    if (!pricingRule || pricingRule.mode !== "quantity") return 0;

    const requestedQuantity = Number(quantity);

    if (!Number.isFinite(requestedQuantity) || requestedQuantity <= 0) {
      return 0;
    }

    return requestedQuantity * pricingRule.rate;
  }, [pricingRule, quantity]);

  const meetsMinimum =
    calculatedPrice >= (pricingRule?.minimumCampaignValue ?? 2500);

  function handleCampaignTypeChange(type: string) {
    setCampaignType(type);
    setPlatform("");
    setService("");
    setQuantity("");
  }

  function handlePlatformChange(value: string) {
    setPlatform(value);
    setService("");
    setQuantity("");
  }

  function handleContinue() {
    if (!campaignType || !service || !destination) {
      alert("Please complete all required fields.");
      return;
    }

    if (pricingRule?.mode === "quantity") {
      const requestedQuantity = Number(quantity);

      if (!Number.isFinite(requestedQuantity) || requestedQuantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
      }

      if (
        pricingRule.minimumQuantity &&
        requestedQuantity < pricingRule.minimumQuantity
      ) {
        alert(
          `Minimum quantity for this service is ${pricingRule.minimumQuantity}.`
        );
        return;
      }

      if (!meetsMinimum) {
        alert(
          "Minimum campaign value is ₦2,500. Please increase your requested quantity or adjust your campaign selection to continue."
        );
        return;
      }
    }

    window.location.href = `/review-campaign?type=${encodeURIComponent(
      campaignType
    )}&platform=${encodeURIComponent(platform)}&service=${encodeURIComponent(
      service
    )}&destination=${encodeURIComponent(destination)}&quantity=${encodeURIComponent(
      quantity
    )}`;
  }

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>PROMVANTA</p>
          <h1>Create Campaign</h1>
          <p>
            Tell us what you want to promote and what you want to achieve.
          </p>
        </div>

        <section className={styles.card}>
          <h2>1. Campaign Type</h2>

          <div className={styles.options}>
            {campaignTypes.map((item) => (
              <button
                key={item}
                type="button"
                className={`${styles.option} ${
                  campaignType === item ? styles.selected : ""
                }`}
                onClick={() => handleCampaignTypeChange(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        {campaignType && (
          <section className={styles.card}>
            <h2>2. Platform / Destination</h2>

            <div className={styles.options}>
              {platforms.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`${styles.option} ${
                    platform === item.name ? styles.selected : ""
                  }`}
                  onClick={() => handlePlatformChange(item.name)}
                >
                  {item.name}
                </button>
              ))}
            </div>
          </section>
        )}

        {campaignType && platform && (
          <section className={styles.card}>
            <h2>3. Promotion Link</h2>

            <input
              className={styles.input}
              type="url"
              placeholder="Paste your public promotion link"
              value={destination}
              onChange={(event) => setDestination(event.target.value)}
            />
          </section>
        )}

        {campaignType && platform && destination && (
          <section className={styles.card}>
            <h2>4. Choose One Goal</h2>

            <div className={styles.options}>
              {availableServices.map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`${styles.option} ${
                    service === item ? styles.selected : ""
                  }`}
                  onClick={() => {
                    setService(item);
                    setQuantity("");
                  }}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {service && pricingRule?.mode === "quantity" && (
          <section className={styles.card}>
            <h2>5. Quantity Needed</h2>

            <input
              className={styles.input}
              type="number"
              min={pricingRule.minimumQuantity ?? 1}
              placeholder="Enter quantity"
              value={quantity}
              onChange={(event) => setQuantity(event.target.value)}
            />

            {quantity && calculatedPrice > 0 && (
              <div className={styles.summary}>
                <p>Calculated service price</p>
                <strong>{formatNaira(calculatedPrice)}</strong>

                {!meetsMinimum && (
                  <p className={styles.warning}>
                    Minimum campaign value is ₦2,500.
                  </p>
                )}
              </div>
            )}
          </section>
        )}

        {service && (
          <button
            type="button"
            className={styles.continueButton}
            onClick={handleContinue}
          >
            Continue to Review
          </button>
        )}
      </div>
    </main>
  );
      }
