import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Pen } from "lucide-react";

export const metadata: Metadata = {
  title: "Logo Design Edinburgh | Professional Logo Designer for Local Businesses",
  description:
    "Get a professional logo for your Edinburgh business. We design logos for tradespeople, restaurants, shops and service businesses. From 299 pounds. Free consultation.",
  keywords: [
    "logo design Edinburgh",
    "logo designer Edinburgh",
    "logo design Scotland",
    "small business logo Edinburgh",
    "tradesperson logo design",
  ],
};

const capabilities = [
  "Custom logo design from scratch",
  "Three unique initial concepts to choose from",
  "Full vector files (AI, EPS, SVG) for print and digital",
  "Transparent PNG and JPEG exports",
  "Brand colour palette to go with your logo",
  "Font pairing recommendation",
  "Logo usage guide so you always use it correctly",
  "Favicon and app icon versions",
  "Social media profile picture versions",
  "Revisions until you are completely happy",
];

export default function LogosPage() {
  return (
    <ServicePageTemplate
      title="Logo Design"
      subtitle="Your logo is the first thing people see. We design clean, professional logos that give your Edinburgh business instant credibility and help customers remember you."
      capabilities={capabilities}
      geoDescription="Whether you are a plumber in Leith, a restaurant in the Old Town or a joiner covering Edinburgh and the Lothians, a strong logo sets you apart from the competition. We design logos that work on vans, uniforms, websites and everything in between."
      ctaText="Get Your Logo"
      icon={Pen}
      accentColor="text-[#ff5c1a]"
      bgColor="bg-orange-50"
    />
  );
}
