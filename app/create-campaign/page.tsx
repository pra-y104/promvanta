"use client";

import { useMemo, useState } from "react";
import styles from "./create-campaign.module.css";
import { campaignTypes } from "@/lib/campaigns";
import { platforms, services } from "@/lib/platforms";
import { calculateQuantityPrice } from "@/lib/pricing";

export default function CreateCampaignPage() {
  const [type, setType] = useState("");
  const [platform, setPlatform] = useState("");
  const [service, setService] = useState("");
  const [link, setLink] = useState("");
  const [quantity, setQuantity] = useState(500);

  const availableServices = useMemo(() => {
    if (!platform) return [];
    return services[platform as keyof typeof services] ?? [];
  }, [platform]);

  const price = service
    ? calculateQuantityPrice(quantity, 3)
    : 0;

  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Create Campaign</h1>
          <p>
            Tell PROMVANTA what you want to promote and what you want to
            achieve.
          </p>
        </div>

        <section className={styles.card}>
          <h2>1. What are you promoting?</h2>

          <div className={styles.grid}>
            {campaignTypes.map((item) => (
              <button
                key={item.id}
                className={styles.option}
                onClick={() => setType(item.id)}
              >
                <strong>{item.name}</strong>
                <p className={styles.note}>{item.description}</p>
              </button>
            ))}
          </div>
        </section>

        {type && (
          <section className={styles.card}>
            <h2>2. Where?</h2>

            <label className={styles.label}>
              Platform / Destination
              <select
                className={styles.select}
                value={platform}
                onChange={(e) => {
                  setPlatform(e.target.value);
                  setService("");
                }}
              >
                <option value="">Select platform</option>

                {platforms.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </select>
            </label>

            <label className={styles.label}>
              Promotion Link
              <input
                className={styles.input}
                type="url"
                placeholder="https://..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
              />
            </label>
          </section>
        )}

        {platform && (
          <section className={styles.card}>
            <h2>3. What is your goal?</h2>

            <div className={styles.grid}>
              {availableServices.map((item) => (
                <button
                  key={item}
                  className={styles.option}
                  onClick={() => setService(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>
        )}

        {service && (
          <section className={styles.card}>
            <h2>4. Quantity Needed</h2>

            <p className={styles.note}>
              PROMVANTA calculates your price from the configured service
              rate.
            </p>

            <input
              className={styles.input}
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />

            <p>Calculated campaign price</p>
            <div className={styles.price}>
              ₦{price.toLocaleString()}
            </div>

            <p className={styles.note}>
              Minimum campaign value: ₦2,500. Actual provider availability and
              pricing will be verified before payment.
            </p>

            <button className={styles.primary}>
              Continue to Review
            </button>
          </section>
        )}
      </div>
    </main>
  );
      }
