import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Palette } from "lucide-react";

export const metadata: Metadata = {
  title: "Brand Identity Edinburgh | Branding Agency for Local and Service Businesses",
  description:
    "Professional brand identity design for Edinburgh businesses. Logo, colours, fonts and brand guidelines that make your business look the part. Tradespeople, restaurants and service businesses welcome.",
  keywords: [
    "branding agency Edinburgh",
    "brand identity Edinburgh",
    "brand design Scotland",
    "small business branding Edinburgh",
    "tradesperson branding",
  ],
};

const capabilities = [
  "Discovery session to understand your business and goals",
  "Logo design and full logo suite",
  "Brand colour system with primary and secondary palettes",
  "Typography selection and font licensing advice",
  "Business card and stationery design",
  "Brand guidelines document so everything stays consistent",
  "Social media profile and cover images",
  "Email signature design",
  "Van or vehicle livery guidance",
  "Branded document templates (quotes, invoices, etc.)",
];

export default function BrandingPage() {
  return (
    <ServicePageTemplate
      title="Brand Identity"
      subtitle="A proper brand makes your business look bigger, more trustworthy and more professional. We build brands for Edinburgh businesses that want to stand out and win more work."
      capabilities={capabilities}
      geoDescription="From sole-trader tradespeople to growing Edinburgh businesses, we build brands that work in the real world. On vans, on websites, on social media and on print. We know what Edinburgh customers respond to and we design accordingly."
      ctaText="Build My Brand"
      icon={Palette}
      accentColor="text-[#ff5c1a]"
      bgColor="bg-orange-50"
    />
  );
}
