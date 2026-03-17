import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Extr0 — The AI Gateway That Eliminates Unnecessary AI Spend",
  description:
    "Extr0 intelligently routes every AI request to the most cost-efficient model, reducing your AI infrastructure costs by up to 70%. One unified API. Zero wasted spend.",
  keywords: ["AI cost optimization", "LLM API gateway", "AI router", "OpenAI cost", "Anthropic API", "AI infrastructure"],
  openGraph: {
    title: "Extr0 — Zero Extra Spend on AI",
    description: "Stop overpaying for AI APIs. Extr0 routes every request to the cheapest, fastest model automatically.",
    type: "website",
    url: "https://extr0.ai",
    siteName: "Extr0",
  },
  twitter: {
    card: "summary_large_image",
    title: "Extr0 — Zero Extra Spend on AI",
    description: "Intelligently route AI requests to the most cost-efficient models.",
    creator: "@extr0_ai",
  },
  alternates: {
    canonical: "https://extr0.ai",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">{children}</body>
    </html>
  );
}
