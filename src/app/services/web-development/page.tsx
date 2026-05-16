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
  openGraph: {
    title: "Website Design Edinburgh | Blank Digital",
    description: "Fast, mobile-friendly websites built for Edinburgh tradespeople and local businesses. Rank on Google and turn visitors into customers.",
    images: [{ url: "/images/web-design-studio.jpg", width: 1200, height: 630, alt: "Web design studio at Blank Digital Edinburgh" }],
  },
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

const faqs = [
  {
    question: "How much does a website cost in Edinburgh?",
    answer: "A professional website for a small business or tradesperson typically starts from around £500 for a simple site and goes up depending on the number of pages and features needed. We give you a fixed price upfront with no hidden extras. Get in touch for a free quote specific to your business.",
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most small business websites are completed within 2 to 4 weeks. Larger sites with more pages, booking systems or e-commerce can take 4 to 8 weeks. We always give you a realistic timeline before we start.",
  },
  {
    question: "Will my website show up on Google?",
    answer: "Yes. Every website we build includes on-page SEO as standard — proper page titles, meta descriptions, heading structure and local keyword targeting. We also set up your Google Search Console and submit your sitemap. For stronger Google rankings, our SEO service takes things further.",
  },
  {
    question: "Do I need a website if I already have a Facebook page?",
    answer: "Yes. A Facebook page is useful but you do not own it — Facebook can change its rules or reach at any time. A website is your permanent home on the internet. It also ranks on Google in a way that social media profiles usually do not, meaning customers actively searching for your service can find you.",
  },
  {
    question: "Can you update my existing website instead of building a new one?",
    answer: "Sometimes. If your existing site is built on a platform we can work with and just needs improvements, we can update it. If it is slow, hard to edit, or not mobile-friendly, a fresh build is usually the better investment. We will be honest about which option makes more sense for you.",
  },
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
      faqs={faqs}
    />
  );
}
