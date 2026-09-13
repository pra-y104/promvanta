import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PROMVANTA — Legitimate Promotion, Real Tracking",
  description:
    "Promote smarter. Reach further. Launch legitimate digital promotion campaigns and track real campaign results.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
