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
  openGraph: {
    title: "SEO Edinburgh | Local SEO for Tradespeople | Blank Digital",
    description: "Get your Edinburgh business to the top of Google. Local SEO that gets tradespeople and service businesses more calls and more customers.",
    images: [{ url: "/images/developer-studio.jpg", width: 1200, height: 630, alt: "SEO and digital marketing team at Blank Digital Edinburgh" }],
  },
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

const faqs = [
  {
    question: "How long does SEO take to work in Edinburgh?",
    answer: "Most local businesses start to see noticeable improvements in Google rankings within 3 to 6 months. Some improvements — especially Google Business Profile and local citations — can show results faster. SEO is a long-term investment, but the results compound over time and continue working without ongoing ad spend.",
  },
  {
    question: "How much does SEO cost for a small business in Edinburgh?",
    answer: "Local SEO for small businesses typically starts from around £350 per month for ongoing work. One-off projects like a full SEO audit and on-page fixes start from £499. We always explain exactly what you will get and what results you can expect before any work begins.",
  },
  {
    question: "What is local SEO and how is it different from regular SEO?",
    answer: "Local SEO is focused on getting your business found by people searching in your area — for example, people searching for 'plumber Edinburgh' or 'best restaurant near the Royal Mile'. It involves optimising your Google Business Profile, building local citations and targeting location-specific keywords. It is the most important type of SEO for tradespeople and service businesses.",
  },
  {
    question: "Do I need SEO if I already get work by word of mouth?",
    answer: "Word of mouth is great but it has limits. When a customer wants to recommend you to a friend, the first thing that friend does is Google you. If you do not show up or your online presence looks unprofessional, you lose that job. SEO also opens you up to a completely new stream of customers who have never heard of you.",
  },
  {
    question: "Will you guarantee a number one Google ranking?",
    answer: "No reputable SEO agency can guarantee specific rankings — Google does not allow it and anyone who promises it is not being straight with you. What we do guarantee is transparent reporting, honest advice and a clear strategy based on what actually works for Edinburgh businesses.",
  },
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
      faqs={faqs}
    />
  );
}
