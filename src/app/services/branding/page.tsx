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
  openGraph: {
    title: "Brand Identity Edinburgh | Blank Digital",
    description: "Complete branding for Edinburgh businesses. Logo, colours, fonts and guidelines so everything looks consistent and professional.",
    images: [{ url: "/images/brand-identity.jpg", width: 1200, height: 630, alt: "Brand identity design for Edinburgh businesses by Blank Digital" }],
  },
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

const faqs = [
  {
    question: "What is brand identity and why do I need it?",
    answer: "Brand identity is everything that makes your business visually recognisable — your logo, colours, fonts and how they are used together. A consistent brand makes you look more professional, builds trust with customers and helps you stand out from competitors. For tradespeople especially, a strong brand on your van, website and uniforms can significantly increase the number of enquiries you receive.",
  },
  {
    question: "How is brand identity different from just a logo?",
    answer: "A logo is one part of your brand. Brand identity includes your logo plus the colours, fonts, photography style and design rules that define how your business looks everywhere — on your website, van, business cards, social media and marketing materials. It ensures everything looks consistent and professional.",
  },
  {
    question: "How long does a brand identity project take?",
    answer: "A full brand identity project typically takes 3 to 6 weeks from first conversation to final delivery. This includes the discovery session, design concepts, revisions and the final brand guidelines document.",
  },
  {
    question: "How much does brand identity design cost in Edinburgh?",
    answer: "Brand identity packages start from around £799 and go up depending on the scope — the number of deliverables, complexity of the design and whether you need printed materials. We quote a fixed price for your specific requirements before any work begins.",
  },
  {
    question: "Can I start with just a logo and add branding later?",
    answer: "Yes. Many clients start with a logo and build their full brand identity over time as the business grows. We design logos with the full brand in mind from the start, so expanding later is straightforward.",
  },
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
      faqs={faqs}
    />
  );
}
