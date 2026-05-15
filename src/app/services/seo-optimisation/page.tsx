import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Search } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Edinburgh | Local SEO for Tradespeople and Service Businesses",
  description:
    "Get your Edinburgh business to the top of Google. We specialise in local SEO for plumbers, electricians, joiners, restaurants and other service businesses across Edinburgh and the Lothians.",
  keywords: [
    "SEO Edinburgh",
    "local SEO Edinburgh",
    "SEO for tradespeople Edinburgh",
    "Google ranking Edinburgh",
    "plumber SEO Edinburgh",
    "electrician SEO Edinburgh",
    "restaurant SEO Edinburgh",
  ],
};

const capabilities = [
  "Full SEO audit of your current website",
  "Local keyword research for Edinburgh and nearby areas",
  "Google Business Profile setup and optimisation",
  "On-page SEO (titles, descriptions, headings, content)",
  "Technical SEO fixes (speed, mobile, crawlability)",
  "Local citation building across directories",
  "Review generation strategy",
  "Content creation that ranks and converts",
  "Competitor analysis",
  "Monthly rank tracking and plain English reporting",
];

export default function SEOPage() {
  return (
    <ServicePageTemplate
      title="SEO Optimisation"
      subtitle="When someone in Edinburgh searches for your trade or service, your business should come up first. We make that happen with practical, proven SEO that gets real results for local businesses."
      capabilities={capabilities}
      geoDescription="We work with Edinburgh tradespeople and service businesses every day. A plumber showing up on page one for Edinburgh plumber gets an enormous competitive advantage. We have helped businesses across Edinburgh, Leith, Morningside, Portobello, East Lothian and Midlothian rank higher and get more calls."
      ctaText="Start Ranking Higher"
      icon={Search}
      accentColor="text-green-600"
      bgColor="bg-green-50"
    />
  );
}
