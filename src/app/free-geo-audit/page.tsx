import type { Metadata } from "next";
import { Zap, Search, MessageSquare, Globe, CheckCircle2 } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import GeoAuditForm from "@/components/geo-audit/GeoAuditForm";

export const metadata: Metadata = {
  title: "Free GEO Audit for Edinburgh Businesses | Generative Engine Optimisation",
  description:
    "Find out if your Edinburgh business appears when people ask ChatGPT, Perplexity or Google AI for your service. Free GEO audit from Blank Digital — results within one business day.",
  alternates: { canonical: "https://www.blankdigital.co.uk/free-geo-audit" },
  openGraph: {
    title: "Free GEO Audit for Edinburgh Businesses | Blank Digital",
    description:
      "Find out if your Edinburgh business shows up in AI search tools like ChatGPT and Perplexity. Free audit, results within one business day.",
    url: "https://www.blankdigital.co.uk/free-geo-audit",
  },
};

const auditPoints = [
  {
    icon: MessageSquare,
    title: "ChatGPT & Perplexity",
    desc: "We check whether your business appears when someone asks AI tools for your service in Edinburgh.",
  },
  {
    icon: Search,
    title: "Google AI Overviews",
    desc: "We check if you are being surfaced in Google's AI-generated answers at the top of search results.",
  },
  {
    icon: Globe,
    title: "Online Presence Score",
    desc: "We review your schema markup, Google Business Profile and citation consistency — the foundations of GEO.",
  },
  {
    icon: Zap,
    title: "Quick Wins Report",
    desc: "We identify the two or three things that would make the biggest difference to your AI visibility right now.",
  },
];

export default function FreeGeoAuditPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Free GEO Audit",
    description:
      "A free generative engine optimisation audit for Edinburgh businesses, checking AI search visibility across ChatGPT, Perplexity and Google AI.",
    provider: {
      "@type": "LocalBusiness",
      name: "Blank Digital",
      "@id": "https://www.blankdigital.co.uk/#business",
    },
    areaServed: { "@type": "City", name: "Edinburgh" },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "GBP",
      description: "Free GEO audit for Edinburgh businesses",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient hero-stripes px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-purple-50">
              <Zap className="h-8 w-8 text-purple-600" />
            </div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Free Offer
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Free GEO Audit
              <br />
              for Your Business
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              Find out if your Edinburgh business shows up when customers ask
              ChatGPT, Perplexity or Google AI for your service. We check it
              for free and send you the results within one business day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What's included */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              What You Get
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a]">
              What We Check
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {auditPoints.map((point, i) => {
              const Icon = point.icon;
              return (
                <AnimatedSection key={point.title} delay={i * 0.08}>
                  <div className="rounded-3xl border border-black/5 bg-[#f8fafc] p-6 h-full">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-purple-50">
                      <Icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <h3 className="mb-2 text-sm font-bold text-[#0a0a0a]">{point.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-500">{point.desc}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={0.2} className="mt-10">
            <div className="rounded-3xl bg-[#0a0a0a] px-8 py-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex gap-6 flex-wrap">
                {[
                  "Completely free",
                  "No obligation",
                  "Results in 1 business day",
                  "Plain English report",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-sm text-white/80">
                    <CheckCircle2 className="h-4 w-4 text-[#ff5c1a] shrink-0" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Form */}
      <section className="bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto max-w-2xl">
          <AnimatedSection>
            <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
              <h2 className="mb-2 text-2xl font-black text-[#0a0a0a]">
                Request Your Free Audit
              </h2>
              <p className="mb-8 text-sm text-gray-500">
                Fill in your details below. We will check your AI search visibility
                and email you a plain English report within one business day.
              </p>
              <GeoAuditForm />
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="mt-6 text-center">
            <p className="text-xs text-gray-400">
              We will never share your details. This audit is genuinely free with no
              obligation to buy anything.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What happens next */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              The Process
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a]">
              What Happens After You Submit
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {[
              {
                step: "1",
                title: "We receive your details",
                desc: "We get a notification as soon as you submit. We aim to start every audit within a few hours.",
              },
              {
                step: "2",
                title: "We run the audit",
                desc: "We check your visibility across ChatGPT, Perplexity, Google AI Overviews and Bing Copilot. We also review your schema markup, Google Business Profile and online citations.",
              },
              {
                step: "3",
                title: "You get a plain English report",
                desc: "We email you a short, jargon-free summary of what we found and the two or three things that would make the biggest difference to your AI search visibility.",
              },
              {
                step: "4",
                title: "No obligation",
                desc: "The report is yours to keep and act on yourself. If you want us to help you implement the fixes, we can talk about that — but there is absolutely no pressure.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.08}>
                <div className="flex items-start gap-5 rounded-2xl border border-black/5 bg-[#f8fafc] p-6">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#ff5c1a] text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <div>
                    <p className="mb-1 text-sm font-bold text-[#0a0a0a]">{item.title}</p>
                    <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
