import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Code2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Design Edinburgh | Web Design for Tradespeople and Local Businesses",
  description:
    "Professional website design and development for Edinburgh businesses. Fast, mobile-friendly sites that rank on Google and turn visitors into customers. No upfront costs available.",
  keywords: [
    "website design Edinburgh",
    "web design Edinburgh",
    "tradesperson website Edinburgh",
    "small business website Scotland",
    "Edinburgh web developer",
    "restaurant website Edinburgh",
  ],
};

const capabilities = [
  "Custom website design built around your business",
  "Mobile-first so it looks great on every phone",
  "Fast loading pages (Google rewards speed)",
  "Built-in SEO so you show up in local searches",
  "Contact forms, quote request forms and call buttons",
  "Google Maps integration",
  "Online booking and reservation systems",
  "Menu and service page design",
  "Ongoing support and updates included",
  "Hosting setup and domain help if needed",
];

export default function WebDevelopmentPage() {
  return (
    <ServicePageTemplate
      title="Website Design and Development"
      subtitle="Most of your customers check you out online before they call. We build websites that make a great first impression, rank on Google and turn visitors into real paying customers."
      capabilities={capabilities}
      geoDescription="We build websites for Edinburgh tradespeople, restaurants, retailers and service businesses. If you have never had a website, we make it simple. If you have one that is letting you down, we fix it. All our sites are built to rank in Edinburgh and the surrounding Lothians area."
      ctaText="Get My Website Built"
      icon={Code2}
      accentColor="text-[#1a73e8]"
      bgColor="bg-blue-50"
    />
  );
}
