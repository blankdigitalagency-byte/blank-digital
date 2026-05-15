import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Globe } from "lucide-react";

export const metadata: Metadata = {
  title: "GEO Targeting",
  description:
    "AI-powered GEO targeting services for UK businesses. Dominate local and regional search results, reach customers in your area, and grow your presence across the UK.",
};

const capabilities = [
  "AI-powered GEO content strategy",
  "Local landing page creation and optimisation",
  "Google Business Profile management",
  "Citations and local directory submissions",
  "Hyper-local keyword targeting",
  "Region-specific content clusters",
  "Multi-location SEO management",
  "Local schema markup implementation",
  "Competitor local search analysis",
  "Monthly local rank tracking and reporting",
];

export default function GeoTargetingPage() {
  return (
    <ServicePageTemplate
      title="GEO Targeting"
      subtitle="Dominate your local market and expand across the UK. We use AI-powered strategies to make your business visible precisely where your customers are searching — city by city, postcode by postcode."
      capabilities={capabilities}
      geoDescription="We specialise in helping UK businesses grow their local and regional presence. Whether you serve one city or operate nationwide, our GEO targeting strategies ensure you appear in front of the right customers at the right moment, in every corner of the UK."
      ctaText="Dominate My Area"
      icon={Globe}
      accentColor="text-purple-600"
      bgColor="bg-purple-50"
    />
  );
}
