import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROMVANTA — Legitimate promotion, real tracking",
  description:
    "Launch legitimate digital promotion campaigns, manage your budget and track real campaign results.",
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
