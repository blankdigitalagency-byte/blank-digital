import type { Metadata } from "next";
import Link from "next/link";
import { Pen, Palette, Code2, Search, Zap, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "Services | Web Design, Branding and SEO for Edinburgh Businesses",
  description:
    "Website design, logo and brand identity, SEO and generative engine optimisation for Edinburgh tradespeople and local businesses. See all services and pricing.",
  alternates: { canonical: "https://www.blankdigital.co.uk/services" },
  openGraph: {
    title: "Services | Web Design, Branding and SEO for Edinburgh Businesses",
    description: "Website design, logo and brand identity, SEO and GEO for Edinburgh tradespeople and local businesses.",
    url: "https://www.blankdigital.co.uk/services",
  },
};

const services = [
  {
    icon: Pen,
    title: "Logo Design",
    description:
      "A professional logo that gives your Edinburgh business instant credibility. Works on everything from your website to your van.",
    href: "/services/logos",
    color: "bg-orange-50",
    iconColor: "text-[#ff5c1a]",
  },
  {
    icon: Palette,
    title: "Brand Identity",
    description:
      "Complete branding for local businesses. Logo, colours, fonts and guidelines so everything looks consistent and professional.",
    href: "/services/branding",
    color: "bg-orange-50",
    iconColor: "text-[#ff5c1a]",
  },
  {
    icon: Code2,
    title: "Website Design and Development",
    description:
      "Fast, mobile-friendly websites that rank on Google and turn visitors into customers. Built for tradespeople, restaurants and service businesses.",
    href: "/services/web-development",
    color: "bg-blue-50",
    iconColor: "text-[#1a73e8]",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description:
      "Get to the top of Google for your trade or service in Edinburgh. More visibility means more calls and more jobs.",
    href: "/services/seo-optimisation",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Zap,
    title: "Generative Engine Optimisation",
    description:
      "Get recommended by ChatGPT, Perplexity and Google AI when people ask for local businesses in Edinburgh. The future of local search.",
    href: "/services/generative-engine-optimisation",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-gradient hero-stripes px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Our Services
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Everything You Need
              <br />
              to Win Online
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              From your first logo to a full digital presence, we give Edinburgh
              businesses the tools to get found, get trusted and get customers.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <AnimatedSection key={service.title} delay={i * 0.1}>
                  <Link
                    href={service.href}
                    className="group flex h-full flex-col rounded-3xl border border-black/5 p-8 shadow-sm hover:shadow-md transition-shadow duration-300 bg-white"
                  >
                    <div
                      className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.color}`}
                    >
                      <Icon className={`h-6 w-6 ${service.iconColor}`} />
                    </div>
                    <h2 className="mb-3 text-xl font-bold text-[#0a0a0a]">
                      {service.title}
                    </h2>
                    <p className="flex-1 text-sm leading-relaxed text-gray-500">
                      {service.description}
                    </p>
                    <div className="mt-6 flex items-center gap-1.5 text-sm font-semibold text-[#0a0a0a] group-hover:gap-2.5 transition-all">
                      Find out more
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </Link>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-4xl font-black text-white sm:text-5xl">
              Not sure where to start?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-400">
              Tell us about your business. We will recommend exactly what you
              need and give you a straight-talking quote.
            </p>
            <CTAButton href="/contact">Get Free Advice</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
