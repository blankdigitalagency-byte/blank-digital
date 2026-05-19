import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Pen } from "lucide-react";

export const metadata: Metadata = {
  title: "Logo Design Edinburgh | Professional Logo Designer for Local Businesses",
  description:
    "Get a professional logo for your Edinburgh business. We design logos for tradespeople, restaurants, shops and service businesses. From 299 pounds. Free consultation.",
  alternates: { canonical: "https://www.blankdigital.co.uk/services/logos" },
  openGraph: {
    title: "Logo Design Edinburgh | Blank Digital",
    description: "Professional logo design for Edinburgh businesses. Clean, memorable logos that give your business instant credibility.",
    url: "https://www.blankdigital.co.uk/services/logos",
    images: [{ url: "/images/brand-identity.jpg", width: 1200, height: 630, alt: "Brand identity and logo design by Blank Digital Edinburgh" }],
  },
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

const faqs = [
  {
    question: "How much does a logo design cost in Edinburgh?",
    answer: "Our logo design packages start from £299. The final price depends on the complexity of the design and what file formats and extras you need. We always agree a fixed price before we start — no surprises.",
  },
  {
    question: "How many logo concepts do I get?",
    answer: "We present three unique initial concepts for you to review. You then choose a direction and we refine it until you are completely happy. We do not limit the number of revisions — we work until it is right.",
  },
  {
    question: "How long does logo design take?",
    answer: "You will typically see your first concepts within 5 to 7 working days. Once you have chosen a direction, the final files are usually delivered within another 3 to 5 days. We can work faster if you have a deadline.",
  },
  {
    question: "What files will I receive?",
    answer: "You will receive your logo in every format you need: vector files (AI, EPS, SVG) for print and professional use, plus PNG and JPEG exports in various sizes for digital use. We also provide versions on transparent backgrounds and optimised for social media profile pictures.",
  },
  {
    question: "Can you redesign my existing logo?",
    answer: "Yes. If your current logo is outdated or not working, we can either refresh it or start fresh. We will look at what you have and advise on the best approach. Sometimes a modernisation is enough; other times a full redesign is the better move.",
  },
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
      faqs={faqs}
    />
  );
}
