import type { Metadata } from "next";
import { Pen, Palette, Code2, Search, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Website Design, SEO and Branding for Edinburgh Businesses",
  description:
    "Clear, fixed pricing for websites, branding and SEO for Edinburgh businesses. No hidden costs, no surprises. Starting from £299.",
  alternates: { canonical: "https://www.blankdigital.co.uk/pricing" },
  openGraph: {
    title: "Pricing | Blank Digital Edinburgh",
    description: "Clear, fixed pricing for websites, branding and SEO for Edinburgh businesses. Starting from £299.",
    url: "https://www.blankdigital.co.uk/pricing",
  },
};

const designCards = [
  {
    icon: Pen,
    title: "Logo Design",
    price: "299",
    description: "A professional logo that gives your business instant credibility.",
    features: [
      "3 initial concepts to choose from",
      "Unlimited revisions until you're happy",
      "All file formats (SVG, PNG, PDF, EPS)",
      "Brand colour palette",
      "Font pairing recommendation",
      "Logo usage guide",
    ],
    cta: "Get a Logo",
    popular: false,
    accent: "text-[#ff5c1a]",
    bg: "bg-orange-50",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    price: "699",
    description: "Everything you need to look consistent and professional across every touchpoint.",
    features: [
      "Everything in Logo Design",
      "Full brand colour system",
      "Typography selection and licensing advice",
      "Business card design",
      "Brand guidelines document",
      "Social media profile and cover images",
    ],
    cta: "Get a Brand",
    popular: false,
    accent: "text-[#ff5c1a]",
    bg: "bg-orange-50",
  },
];

const webCards = [
  {
    icon: Code2,
    title: "Website Starter",
    price: "599",
    description: "Everything a sole trader or small business needs to get online properly.",
    features: [
      "Up to 5 pages",
      "Mobile-first design",
      "On-page SEO included",
      "Contact form and click-to-call",
      "Google Maps integration",
      "Google Search Console setup",
      "1 month of support after launch",
    ],
    cta: "Get a Website",
    popular: false,
    accent: "text-[#1a73e8]",
    bg: "bg-blue-50",
  },
  {
    icon: Code2,
    title: "Website Business",
    price: "999",
    description: "For businesses that need more pages, more features and more conversions.",
    features: [
      "Up to 10 pages",
      "Everything in Starter",
      "Online booking or enquiry system",
      "Blog or news section",
      "Advanced local SEO setup",
      "Page speed optimisation",
      "3 months of support after launch",
    ],
    cta: "Get a Website",
    popular: true,
    accent: "text-[#1a73e8]",
    bg: "bg-blue-50",
  },
];

const marketingCards = [
  {
    icon: Search,
    title: "SEO",
    price: "299",
    period: "/month",
    description: "Get to the top of Google for your trade or service in Edinburgh.",
    features: [
      "Local keyword research",
      "Google Business Profile optimisation",
      "On-page SEO updates each month",
      "Technical SEO fixes",
      "Monthly performance report",
      "Google Search Console monitoring",
      "3-month minimum",
    ],
    cta: "Start SEO",
    popular: false,
    accent: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Zap,
    title: "Generative Engine Optimisation",
    price: "199",
    period: "/month",
    description: "Get recommended by ChatGPT, Perplexity and Google AI for your service in Edinburgh.",
    features: [
      "AI visibility checks across all major tools",
      "Schema markup setup and updates",
      "FAQ content for AI citation",
      "Entity and knowledge graph building",
      "Monthly GEO visibility report",
      "3-month minimum",
    ],
    cta: "Start GEO",
    popular: false,
    accent: "text-purple-600",
    bg: "bg-purple-50",
  },
];

const faqs = [
  {
    q: "Are these fixed prices or estimates?",
    a: "These are starting from prices. For straightforward projects — a logo, a 5-page website for a tradesperson — the final price will often match the starting price. For anything more complex, we will give you a fixed quote before any work begins. No surprises.",
  },
  {
    q: "Can I pay in instalments?",
    a: "Yes. For website and branding projects we typically take 50% upfront and 50% on completion. If you need a different arrangement just ask — we are flexible for the right projects.",
  },
  {
    q: "Do I need to sign a long contract?",
    a: "For one-off projects like a logo or website there is no ongoing contract. For SEO and GEO we ask for a 3-month minimum so there is enough time to see real results, then it rolls monthly with 30 days notice to cancel.",
  },
  {
    q: "What is not included in the price?",
    a: "Domain registration (typically £10 to £20 per year) and website hosting (typically £100 to £200 per year) are not included in our website prices, but we will help you set these up and point you to the best options.",
  },
  {
    q: "Can I bundle services together?",
    a: "Yes — and we offer a discount when you do. SEO and GEO together start from £399 per month instead of £498. Website and SEO together also get a reduced rate. Get in touch and we will put together a package that fits your budget.",
  },
];

interface PricingCardProps {
  icon: React.ElementType;
  title: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  cta: string;
  popular: boolean;
  accent: string;
  bg: string;
  delay?: number;
}

function PricingCard({ icon: Icon, title, price, period, description, features, cta, popular, accent, bg, delay = 0 }: PricingCardProps) {
  return (
    <AnimatedSection delay={delay} className="h-full">
      <div className={`relative flex h-full flex-col rounded-3xl border bg-white p-8 shadow-sm transition-shadow hover:shadow-md ${popular ? "border-[#ff5c1a] ring-2 ring-[#ff5c1a]/20" : "border-black/5"}`}>
        {popular && (
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-[#ff5c1a] px-4 py-1 text-xs font-bold text-white">
              Most Popular
            </span>
          </div>
        )}

        <div className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${bg}`}>
          <Icon className={`h-6 w-6 ${accent}`} />
        </div>

        <h3 className="mb-1 text-xl font-black text-[#0a0a0a]">{title}</h3>
        <p className="mb-5 text-sm leading-relaxed text-gray-500">{description}</p>

        <div className="mb-6">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">Starting from</span>
          <div className="mt-1 flex items-end gap-1">
            <span className="text-4xl font-black text-[#0a0a0a]">£{price}</span>
            {period && <span className="mb-1 text-sm text-gray-400">{period}</span>}
          </div>
        </div>

        <ul className="mb-8 flex-1 space-y-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-600">
              <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${accent}`} />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className={`flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-colors ${
            popular
              ? "bg-[#ff5c1a] text-white hover:bg-[#e64d0e]"
              : "border border-black/10 bg-[#f8fafc] text-[#0a0a0a] hover:bg-black hover:text-white"
          }`}
        >
          {cta} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </AnimatedSection>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-stripes px-6 pb-16 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Pricing
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Clear Prices.
              <br />
              No Surprises.
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              Every project gets a fixed price before we start. What you see
              below is what you pay — no hidden extras, no scope creep charges.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Design */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">Design</p>
            <h2 className="text-3xl font-black text-[#0a0a0a]">Logo and Branding</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-3xl">
            {designCards.map((card, i) => (
              <PricingCard key={card.title} {...card} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Web */}
      <section className="bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">Web</p>
            <h2 className="text-3xl font-black text-[#0a0a0a]">Website Design and Development</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {webCards.map((card, i) => (
              <PricingCard key={card.title} {...card} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Marketing */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <AnimatedSection className="mb-10">
            <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">Monthly</p>
            <h2 className="text-3xl font-black text-[#0a0a0a]">SEO and GEO</h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 max-w-3xl">
            {marketingCards.map((card, i) => (
              <PricingCard key={card.title} {...card} delay={i * 0.1} />
            ))}
          </div>

          {/* Bundle */}
          <AnimatedSection delay={0.2} className="mt-6 max-w-3xl">
            <div className="rounded-3xl border-2 border-[#0a0a0a] bg-[#0a0a0a] p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <span className="mb-2 inline-block rounded-full bg-[#ff5c1a] px-3 py-0.5 text-xs font-bold text-white">
                    Bundle Deal
                  </span>
                  <h3 className="mb-1 text-xl font-black text-white">SEO + GEO Together</h3>
                  <p className="text-sm text-gray-400">
                    Get both services at a reduced rate. Cover traditional Google rankings and AI search in one go.
                  </p>
                </div>
                <div className="shrink-0 text-right">
                  <span className="block text-xs text-gray-500 line-through">£498/month</span>
                  <div className="flex items-end gap-1 justify-end">
                    <span className="text-4xl font-black text-white">£399</span>
                    <span className="mb-1 text-sm text-gray-400">/month</span>
                  </div>
                  <span className="text-xs text-[#ff5c1a] font-semibold">Save £99/month</span>
                </div>
              </div>
              <div className="mt-6">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-[#ff5c1a] px-6 py-3.5 text-sm font-semibold text-white hover:bg-[#e64d0e] transition-colors"
                >
                  Get the Bundle <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">Questions</p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a]">
              Pricing FAQs
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group rounded-2xl border border-black/5 bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#0a0a0a] marker:content-none">
                    {faq.q}
                    <span className="shrink-0 text-gray-400 transition-transform group-open:rotate-180">▾</span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="mb-4 text-4xl font-black text-white sm:text-5xl">
              Not Sure What You Need?
            </h2>
            <p className="mb-8 text-base leading-relaxed text-gray-400">
              Tell us about your business and we will recommend exactly what makes
              sense for your situation and your budget. No sales pitch.
            </p>
            <CTAButton href="/contact">Get a Free Quote</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
