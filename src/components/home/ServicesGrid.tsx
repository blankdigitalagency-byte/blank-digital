import Link from "next/link";
import { Palette, Code2, Search, Zap, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

const services = [
  {
    icon: Palette,
    title: "Brand Identity and Logo Design",
    description:
      "A professional logo and brand that makes customers trust you before you even pick up the phone.",
    href: "/services/branding",
    color: "bg-orange-50",
    iconColor: "text-[#ff5c1a]",
  },
  {
    icon: Code2,
    title: "Website Design and Development",
    description:
      "Fast, mobile-friendly websites built to show up on Google and turn visitors into paying customers.",
    href: "/services/web-development",
    color: "bg-blue-50",
    iconColor: "text-[#1a73e8]",
  },
  {
    icon: Search,
    title: "SEO Optimisation",
    description:
      "Get found when local customers search for what you do. We handle everything from keyword strategy to technical SEO.",
    href: "/services/seo-optimisation",
    color: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Zap,
    title: "Generative Engine Optimisation",
    description:
      "Get your business recommended by ChatGPT, Perplexity and Google AI. The new frontier of local search.",
    href: "/services/generative-engine-optimisation",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-[#f8fafc] px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-12 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
            What We Do
          </p>
          <h2 className="mx-auto max-w-xl text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
            Everything Your Business Needs Online
          </h2>
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <Link
                  href={service.href}
                  className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div
                    className={`mb-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl ${service.color}`}
                  >
                    <Icon className={`h-6 w-6 ${service.iconColor}`} />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-[#0a0a0a]">
                    {service.title}
                  </h3>
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
  );
}
