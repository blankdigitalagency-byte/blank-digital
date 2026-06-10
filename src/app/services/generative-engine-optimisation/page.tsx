import type { Metadata } from "next";
import ServicePageTemplate from "@/components/services/ServicePageTemplate";
import { Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Generative Engine Optimisation (GEO) Edinburgh | AI Search for Local Businesses",
  description:
    "Get your Edinburgh business recommended by ChatGPT, Perplexity, Google AI and other AI tools. Blank Digital's GEO service puts local businesses in front of AI-generated answers.",
  alternates: { canonical: "https://www.blankdigital.co.uk/services/generative-engine-optimisation" },
  openGraph: {
    title: "Generative Engine Optimisation (GEO) Edinburgh | Blank Digital",
    description: "Get your Edinburgh business recommended by ChatGPT, Google AI and Perplexity. The future of local search is here.",
    url: "https://www.blankdigital.co.uk/services/generative-engine-optimisation",
    images: [{ url: "/images/developer-studio.jpg", width: 1200, height: 630, alt: "Generative engine optimisation strategy at Blank Digital Edinburgh" }],
  },
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

const faqs = [
  {
    question: "What is Generative Engine Optimisation (GEO)?",
    answer: "Generative Engine Optimisation (GEO) is the process of making your business more likely to be mentioned or recommended by AI tools like ChatGPT, Google AI Overviews, Perplexity and Microsoft Copilot. As more people ask AI tools for recommendations instead of typing searches into Google, businesses that are optimised for AI answers get a significant advantage.",
  },
  {
    question: "How is GEO different from traditional SEO?",
    answer: "Traditional SEO focuses on getting your website to appear in Google's blue link results. GEO focuses on getting your business mentioned in AI-generated answers. The techniques are related but different — GEO relies heavily on structured data, authoritative content, entity recognition and being cited by trusted sources that AI models pull from.",
  },
  {
    question: "Will my Edinburgh business show up when people ask ChatGPT for recommendations?",
    answer: "With the right GEO strategy, yes. AI models like ChatGPT draw from publicly available information, structured data, reviews and authoritative content. We build the kind of online presence that AI tools recognise as a credible, relevant answer for local searches in Edinburgh and Scotland.",
  },
  {
    question: "Is GEO worth investing in for a small local business?",
    answer: "Yes, especially now. GEO is still early, which means Edinburgh businesses that invest in it now will establish a strong AI presence before their competitors. Think of it like getting on Google in 2005 — the businesses that moved early got a head start that lasted years.",
  },
  {
    question: "Do I need GEO as well as SEO?",
    answer: "For the best results, yes. GEO and SEO work together. Good traditional SEO supports your GEO efforts because AI tools still draw from high-quality, well-ranked web content. We can run both strategies together or start with whichever is the bigger priority for your business.",
  },
];

export default function GEOPage() {
  return (
    <>
      <ServicePageTemplate
        title="Generative Engine Optimisation"
        subtitle="When someone asks ChatGPT or Google AI to recommend a local plumber, electrician or restaurant in Edinburgh, your business should be the answer. We make that happen."
        capabilities={capabilities}
        geoDescription="AI tools like ChatGPT, Perplexity and Google's AI Overviews are changing how people find local businesses. Edinburgh businesses that get GEO right now will dominate local search for years to come. We specialise in helping Scottish tradespeople and service businesses become the trusted answer across every AI platform."
        ctaText="Get AI Ready"
        icon={Zap}
        accentColor="text-purple-600"
        bgColor="bg-purple-50"
        faqs={faqs}
      />

      {/* Free GEO Audit CTA */}
      <section className="bg-purple-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-3xl bg-purple-100">
            <Zap className="h-7 w-7 text-purple-600" />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-purple-600">
            Free Offer
          </p>
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
            Not Sure Where You Stand?
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-base leading-relaxed text-gray-500">
            We will check whether your Edinburgh business shows up in ChatGPT,
            Perplexity and Google AI for free. No obligation, results within
            one business day.
          </p>
          <a
            href="/free-geo-audit"
            className="inline-flex items-center gap-3 rounded-full bg-[#0a0a0a] px-7 py-4 text-base font-semibold text-white hover:bg-[#1a1a1a] transition-colors"
          >
            Get Your Free GEO Audit →
          </a>
        </div>
      </section>
    </>
  );
}
