import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) Edinburgh",
  description:
    "Get your Edinburgh business recommended by ChatGPT, Perplexity, Google AI and other AI tools. Blank Digital's GEO service puts local businesses in front of AI-generated answers.",
  keywords: [
    "generative engine optimisation Edinburgh",
    "GEO Edinburgh",
    "AI search optimisation Scotland",
    "ChatGPT local business Edinburgh",
    "AI SEO Edinburgh",
  ],
};

const capabilities = [
  "AI answer engine optimisation (ChatGPT, Perplexity, Gemini)",
  "Structured data and schema markup for AI visibility",
  "Entity building and knowledge graph optimisation",
  "Authoritative content creation for AI citation",
  "Google AI Overviews optimisation",
  "Bing Copilot and Microsoft AI search",
  "Local AI search presence for Edinburgh and Scotland",
  "Competitor gap analysis across AI platforms",
  "Monthly AI visibility reporting and tracking",
  "FAQ and conversational content strategy",
];

export default function GEOPage() {
  return (
    <ServicePageTemplate
      title="Generative Engine Optimisation"
      subtitle="When someone asks ChatGPT or Google AI to recommend a local plumber, electrician or restaurant in Edinburgh, your business should be the answer. We make that happen."
      capabilities={capabilities}
      geoDescription="AI tools like ChatGPT, Perplexity and Google's AI Overviews are changing how people find local businesses. Edinburgh businesses that get GEO right now will dominate local search for years to come. We specialise in helping Scottish tradespeople and service businesses become the trusted answer across every AI platform."
      ctaText="Get AI Ready"
      icon={Zap}
      accentColor="text-purple-600"
      bgColor="bg-purple-50"
    />
  );
}
