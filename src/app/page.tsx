import Hero from "@/components/home/Hero";
import ServiceTicker from "@/components/home/ServiceTicker";
import ServicesGrid from "@/components/home/ServicesGrid";
import Stats from "@/components/home/Stats";
import CTAButton from "@/components/shared/CTAButton";
import AnimatedSection from "@/components/shared/AnimatedSection";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edinburgh Digital Agency | Websites, SEO & GEO for Local Businesses",
  description:
    "Blank Digital is Edinburgh's go-to agency for small businesses and tradespeople. We build websites, create brands and get you ranking on Google and AI search. Free quotes available.",
  alternates: {
    canonical: "https://www.blankdigital.co.uk",
  },
  openGraph: {
    title: "Edinburgh Digital Agency | Websites, SEO & GEO for Local Businesses",
    description:
      "Blank Digital is Edinburgh's go-to agency for small businesses and tradespeople. We build websites, create brands and get you ranking on Google.",
    url: "https://www.blankdigital.co.uk",
  },
};

const faqs = [
  {
    q: "How much does a website cost for an Edinburgh business?",
    a: "A professional website for a small Edinburgh business typically starts from around £500 for a straightforward site. Most tradespeople and restaurants sit between £500 and £1,500 depending on the number of pages and features needed. We always give you a fixed price upfront with nothing hidden. Get in touch for a free quote.",
  },
  {
    q: "How long does SEO take to work?",
    a: "Most Edinburgh businesses start seeing meaningful movement in their Google rankings within 3 to 6 months. Some improvements — like getting your Google Business Profile right and fixing your on-page SEO — can show results faster. The key is consistency. SEO is a long-term investment, but once it works it keeps delivering without ongoing ad spend.",
  },
  {
    q: "What is Generative Engine Optimisation (GEO)?",
    a: "GEO is the process of making your business show up in answers from AI tools like ChatGPT, Perplexity and Google's AI Overviews. More and more people are asking AI tools to recommend local businesses rather than searching Google the traditional way. GEO makes sure your Edinburgh business appears in those recommendations.",
  },
  {
    q: "Why does my Edinburgh business need a digital agency?",
    a: "Most Edinburgh tradespeople and local businesses lose customers every day to competitors who have a better website or rank higher on Google. A digital agency handles everything — website, branding, SEO — so you can focus on running your business. You get the same quality of digital presence that big companies have, at a price that makes sense for a local business.",
  },
  {
    q: "What is the difference between branding and web design?",
    a: "Branding is your identity — your logo, colours, fonts and the overall look and feel of your business. Web design is how that identity is applied to your website. Good branding makes your website more effective, and a well-designed website brings your branding to life. We offer both, and they work best when done together.",
  },
  {
    q: "How do I get started with Blank Digital?",
    a: "Just get in touch. Tell us what you do, where you are based and what you are looking for. We will get back to you the same day, have a quick call to understand your needs, and send you a clear, fixed-price quote. There is no obligation and no sales pressure.",
  },
];

const testimonials = [
  {
    quote:
      "Before working with Blank Digital I had no website at all. Now I get calls every week from people who found me on Google. The site looks professional and it actually works.",
    author: "Plumber",
    location: "Leith, Edinburgh",
  },
  {
    quote:
      "We were invisible on Google. Within a few months of launching our new site with Blank Digital, we were ranking for our key searches in the Old Town. Bookings are up noticeably.",
    author: "Restaurant owner",
    location: "Old Town, Edinburgh",
  },
  {
    quote:
      "Really straightforward to work with. Fixed price, no surprises, delivered on time. The branding they did for us looks brilliant on everything from the van to the website.",
    author: "Electrician",
    location: "Morningside, Edinburgh",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, "\\u003c"),
        }}
      />

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
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
              We work with local businesses right across Edinburgh and the Lothians. Whether you are a
              plumber in Leith, a restaurant on the Royal Mile, a joiner in Stockbridge or an electrician
              covering Morningside and Portobello — we know your market and we know what it takes to
              get you found online. We have helped over 50 Edinburgh businesses build a proper digital
              presence, and we can do the same for you.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔧",
                title: "Tradespeople",
                desc: "Plumbers, electricians, joiners, painters and builders across Edinburgh and the Lothians. If you work with your hands, we get your phone ringing.",
              },
              {
                icon: "🍽️",
                title: "Restaurants and Cafes",
                desc: "From Leith takeaways to Old Town fine dining. We build menus, booking systems and Google rankings that fill your tables.",
              },
              {
                icon: "🏥",
                title: "Health and Wellness",
                desc: "Gyms, physios, dentists and beauty salons across Edinburgh. Professional websites that build trust before the first appointment.",
              },
              {
                icon: "🏠",
                title: "Property Services",
                desc: "Estate agents, cleaners and letting agents in Edinburgh and the Lothians. Stand out in a crowded market with a site that works as hard as you do.",
              },
              {
                icon: "⚖️",
                title: "Professional Services",
                desc: "Accountants, solicitors and consultants based in Edinburgh. Credible branding that wins clients before you say a word.",
              },
              {
                icon: "🛒",
                title: "Retail and E-commerce",
                desc: "Local Edinburgh shops going online. We build stores that look great and sell even better.",
              },
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

      {/* Testimonials */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Client Results
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              What Edinburgh Businesses Say
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-3">
            {testimonials.map((t, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex gap-1">
                    {[...Array(5)].map((_, s) => (
                      <span key={s} className="text-[#ff5c1a] text-sm">★</span>
                    ))}
                  </div>
                  <p className="flex-1 text-sm leading-relaxed text-gray-600 italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-black/5 pt-4">
                    <p className="text-sm font-semibold text-[#0a0a0a]">{t.author}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
                Why Blank Digital
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
                We Are an Edinburgh Agency That Delivers Results
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600">
                <p>
                  We are based in Edinburgh and we work exclusively with local businesses. That means
                  we understand the Edinburgh market, the types of customers your business attracts and
                  what it takes to get noticed in a competitive local search landscape.
                </p>
                <p>
                  We have delivered websites, branding and SEO campaigns for businesses across
                  Edinburgh City Centre, Leith, Stockbridge, Morningside, Portobello, East Lothian
                  and Midlothian. Every project gets the same level of care regardless of budget.
                </p>
                <p>
                  We give fixed prices, meet deadlines and explain what we are doing in plain English.
                  No jargon, no lock-in contracts and no disappearing after the invoice is paid.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "50+", label: "Edinburgh businesses helped" },
                  { value: "5★", label: "Average client satisfaction" },
                  { value: "6+", label: "Years serving Edinburgh" },
                  { value: "10+", label: "Industries served" },
                ].map((stat, i) => (
                  <div key={i} className="rounded-3xl bg-[#f8fafc] p-6 text-center border border-black/5">
                    <p className="text-4xl font-black text-[#ff5c1a]">{stat.value}</p>
                    <p className="mt-2 text-sm text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <AnimatedSection className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Common Questions
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </AnimatedSection>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <AnimatedSection key={i} delay={i * 0.06}>
                <details className="group rounded-2xl border border-black/5 bg-white p-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-[#0a0a0a] marker:content-none">
                    {faq.q}
                    <span className="shrink-0 text-gray-400 transition-transform group-open:rotate-180">
                      ▾
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-gray-500">{faq.a}</p>
                </details>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Ready to get started?
            </p>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl lg:text-6xl">
              Your Edinburgh Business Deserves
              <br />
              a Proper Online Presence.
            </h2>
            <p className="mx-auto mb-10 max-w-lg text-base leading-relaxed text-gray-500">
              Get in touch today for a free, no-obligation quote. We will tell you
              exactly what you need and what it costs. Usually back to you the same day.
            </p>
            <CTAButton href="/contact">Get Your Free Quote</CTAButton>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
