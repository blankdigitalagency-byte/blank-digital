import Hero from "@/components/home/Hero";
import ServiceTicker from "@/components/home/ServiceTicker";
import ServicesGrid from "@/components/home/ServicesGrid";
import Stats from "@/components/home/Stats";
import CTAButton from "@/components/shared/CTAButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edinburgh Digital Agency | Websites, Branding and SEO for Local Businesses",
  description:
    "Blank Digital is Edinburgh's go-to agency for small businesses and tradespeople. We build websites, create brands and get you ranking on Google. Free quotes available.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiceTicker />
      <ServicesGrid />

      {/* Who we help */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Who We Help
            </p>
            <h2 className="max-w-2xl text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              Built for Edinburgh Businesses That Mean Business
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-500">
              Whether you are a plumber in Leith, a restaurant on the Royal Mile
              or an electrician covering the Lothians, we get you online and in
              front of the right customers.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🔧", title: "Tradespeople", desc: "Plumbers, electricians, joiners, painters, builders. If you work with your hands, we get your phone ringing." },
              { icon: "🍽️", title: "Restaurants and Cafes", desc: "From takeaways to fine dining. We build menus, booking systems and Google rankings that fill your tables." },
              { icon: "🏥", title: "Health and Wellness", desc: "Gyms, physios, dentists, beauty salons. Professional websites that build trust before the first appointment." },
              { icon: "🏠", title: "Property Services", desc: "Estate agents, cleaners, letting agents. Stand out in a crowded market with a site that works as hard as you do." },
              { icon: "⚖️", title: "Professional Services", desc: "Accountants, solicitors, consultants. Credible branding that wins clients before you say a word." },
              { icon: "🛒", title: "Retail and E-commerce", desc: "Local shops going online. We build stores that look great and sell even better." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="rounded-3xl border border-black/5 bg-[#f8fafc] p-6">
                  <span className="text-3xl">{item.icon}</span>
                  <h3 className="mt-3 mb-2 text-lg font-bold text-[#0a0a0a]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-500">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Edinburgh image break */}
      <section className="relative h-72 overflow-hidden sm:h-96">
        <Image
          src="/images/edinburgh-calton.jpg"
          alt="Edinburgh city view from Calton Hill, home of Blank Digital digital agency"
          fill
          className="object-cover object-center"
          quality={80}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <AnimatedSection className="text-center px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/70 mb-2">
              Proud to be from Edinburgh
            </p>
            <p className="text-2xl font-black text-white sm:text-3xl">
              Local knowledge. National quality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <Stats />

      {/* Final CTA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Ready to get started?
            </p>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">
              Your Business Deserves
              <br />
              a Proper Online Presence.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-gray-500">
              Get in touch today for a free, no-obligation quote. We will tell you
              exactly what you need and what it costs.
            </p>
            <CTAButton href="/contact">Get Your Free Quote</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
