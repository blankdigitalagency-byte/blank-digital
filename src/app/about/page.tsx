import type { Metadata } from "next";
import Image from "next/image";
import { Users, Target, Award, Heart } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";

export const metadata: Metadata = {
  title: "About Us | Edinburgh Digital Agency",
  description:
    "Blank Digital is an Edinburgh-based digital agency with a track record of helping local tradespeople, restaurants and service businesses get online, rank on Google and grow. Find out how we work.",
  alternates: {
    canonical: "https://www.blankdigital.co.uk/about",
  },
  openGraph: {
    title: "About Us | Blank Digital Edinburgh",
    description:
      "Edinburgh digital agency with a proven track record helping local businesses get online and grow.",
    url: "https://www.blankdigital.co.uk/about",
  },
};

const values = [
  {
    icon: Target,
    title: "Results Over Promises",
    description:
      "We focus on what actually moves the needle for your business. More calls, more bookings, more customers. That is what we measure ourselves on.",
  },
  {
    icon: Award,
    title: "Quality in Everything",
    description:
      "Whether it is a logo or a full website build, we take the same care with every project. Good enough is not good enough.",
  },
  {
    icon: Users,
    title: "Real Partnership",
    description:
      "We work with you, not just for you. You will always know what is happening with your project and why.",
  },
  {
    icon: Heart,
    title: "We Love Edinburgh",
    description:
      "This city is our home. We genuinely care about helping local businesses thrive here. Every job we do is an investment in our community.",
  },
];

const stats = [
  { value: "50+", label: "Edinburgh businesses helped" },
  { value: "5 star", label: "Average Google rating" },
  { value: "30 days", label: "Average time to results" },
  { value: "100%", label: "UK based team" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero with Edinburgh image */}
      <section className="relative overflow-hidden">
        <div className="relative h-[60vh] min-h-[420px]">
          <Image
            src="/images/edinburgh-calton.jpg"
            alt="Edinburgh city view from Calton Hill showing Edinburgh Castle and city skyline"
            fill
            className="object-cover object-center"
            priority
            quality={85}
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 flex h-full items-end px-6 pb-16 pt-36">
            <div className="mx-auto max-w-4xl w-full">
              <AnimatedSection>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
                  About Us
                </p>
                <h1 className="text-5xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
                  Edinburgh Through
                  <br />
                  and Through
                </h1>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#0a0a0a] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <AnimatedSection key={stat.label} delay={i * 0.1} className="text-center">
                <p className="text-3xl font-black text-white sm:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
                Our Track Record
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a]">
                Built on Results, Not Promises
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  Over six years, Blank Digital has helped more than 50 Edinburgh businesses
                  build a digital presence that actually delivers. Plumbers in Leith ranking on
                  page one. Restaurants in Stockbridge filling tables through Google. Electricians
                  in Morningside getting calls from customers who had never heard of them before.
                </p>
                <p>
                  We built the agency because too many great Edinburgh businesses had no website,
                  a bad one, or were paying through the nose for something that never worked.
                  Every service we offer is designed to give local tradespeople, restaurants and
                  service businesses access to the same quality of digital marketing that big
                  companies take for granted — at prices that make sense for a local business.
                </p>
                <p>
                  We are a dedicated team based right here in Edinburgh. We know the city, we
                  know the neighbourhoods — from the Old Town and New Town to Portobello, East
                  Lothian and beyond — and we know what it takes to get a local business noticed
                  online.
                </p>
              </div>
            </AnimatedSection>

            {/* Office image */}
            <AnimatedSection delay={0.15}>
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/blank-digital-edinburgh-office.png"
                  alt="Blank Digital Edinburgh office with Edinburgh Castle visible through the window"
                  width={640}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              How We Work
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              What We Stand For
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <AnimatedSection key={value.title} delay={i * 0.1}>
                  <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                    <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-orange-50">
                      <Icon className="h-5 w-5 text-[#ff5c1a]" />
                    </div>
                    <h3 className="mb-3 text-lg font-bold text-[#0a0a0a]">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-500">
                      {value.description}
                    </p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              Ready to Work Together?
            </h2>
            <p className="mb-10 text-base leading-relaxed text-gray-500">
              Tell us about your business and what you need. We will come back
              to you with a straight-talking quote, usually the same day.
            </p>
            <CTAButton href="/contact">Get Your Free Quote</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
