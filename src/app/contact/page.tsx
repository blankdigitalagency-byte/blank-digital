import type { Metadata } from "next";
import { Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/contact/ContactForm";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact | Get a Free Quote from Edinburgh's Blank Digital",
  description:
    "Get in touch with Blank Digital Edinburgh. Free quotes for websites, branding and SEO for local businesses. We get back to you the same day.",
};

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "info@blankdigital.co.uk",
    href: "mailto:info@blankdigital.co.uk",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Edinburgh, Scotland",
    href: null,
  },
  {
    icon: Clock,
    label: "We reply within",
    value: "Same day (usually faster)",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="hero-gradient hero-stripes px-6 pb-24 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Get In Touch
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Tell Us About
              <br />
              Your Business
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              No sales pitch, no hard sell. Just a straight-talking conversation
              about what your business needs and what it costs.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-5 lg:items-start">
            {/* Left: info */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <h2 className="mb-8 text-2xl font-black text-[#0a0a0a]">
                  Contact Details
                </h2>
                <div className="space-y-5">
                  {info.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.label} className="flex items-center gap-4">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-orange-50">
                          <Icon className="h-5 w-5 text-[#ff5c1a]" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                            {item.label}
                          </p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-sm font-semibold text-[#0a0a0a] hover:text-[#ff5c1a] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-sm font-semibold text-[#0a0a0a]">
                              {item.value}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-10 rounded-3xl bg-[#f8fafc] p-6">
                  <h3 className="mb-3 text-sm font-bold text-[#0a0a0a]">
                    What happens after you get in touch?
                  </h3>
                  <ol className="space-y-3">
                    {[
                      "We read your message and get back to you the same day",
                      "We have a quick call to understand what you need",
                      "We send you a clear, fixed-price quote",
                    ].map((step, i) => (
                      <li key={step} className="flex items-start gap-3 text-sm text-gray-500">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#ff5c1a] text-[10px] font-bold text-white">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </AnimatedSection>
            </div>

            {/* Right: form */}
            <div className="lg:col-span-3">
              <AnimatedSection delay={0.15}>
                <div className="rounded-3xl border border-black/5 bg-white p-8 shadow-sm">
                  <h2 className="mb-2 text-2xl font-black text-[#0a0a0a]">
                    Send Us a Message
                  </h2>
                  <p className="mb-6 text-sm text-gray-500">
                    Tell us what you do, where you are based and what you are
                    looking for. We do the rest.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
