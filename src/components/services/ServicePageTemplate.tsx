import { LucideIcon, CheckCircle2, MapPin } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import CTAButton from "@/components/shared/CTAButton";

interface ServicePageTemplateProps {
  title: string;
  subtitle: string;
  capabilities: string[];
  geoDescription: string;
  ctaText: string;
  icon: LucideIcon;
  accentColor?: string;
  bgColor?: string;
}

const serviceAreas = [
  "London",
  "Manchester",
  "Edinburgh",
  "Birmingham",
  "Leeds",
  "Bristol",
  "Glasgow",
  "Liverpool",
];

export default function ServicePageTemplate({
  title,
  subtitle,
  capabilities,
  geoDescription,
  ctaText,
  icon: Icon,
  accentColor = "text-[#ff5c1a]",
  bgColor = "bg-orange-50",
}: ServicePageTemplateProps) {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-stripes relative overflow-hidden px-6 pb-24 pt-36">
        <div className="mx-auto max-w-4xl text-center">
          <AnimatedSection delay={0.05}>
            <div
              className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl ${bgColor}`}
            >
              <Icon className={`h-8 w-8 ${accentColor}`} />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={0.25}>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-500">
              {subtitle}
            </p>
            <CTAButton href="/contact">{ctaText}</CTAButton>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <AnimatedSection className="mb-12">
            <p className={`mb-2 text-xs font-semibold uppercase tracking-widest ${accentColor}`}>
              What&apos;s Included
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              Our Capabilities
            </h2>
          </AnimatedSection>

          <div className="grid gap-4 sm:grid-cols-2">
            {capabilities.map((cap, i) => (
              <AnimatedSection key={cap} delay={i * 0.07}>
                <div className="flex items-start gap-3 rounded-2xl border border-black/5 bg-[#f8fafc] p-5">
                  <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${accentColor}`} />
                  <p className="text-sm font-medium text-[#0a0a0a]">{cap}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GEO Section */}
      <section className="bg-[#f8fafc] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <AnimatedSection>
              <p className={`mb-2 text-xs font-semibold uppercase tracking-widest ${accentColor}`}>
                UK-Wide Coverage
              </p>
              <h2 className="mb-6 text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
                Serving Businesses
                <br />
                Across the UK
              </h2>
              <p className="mb-8 text-base leading-relaxed text-gray-500">
                {geoDescription}
              </p>
              <CTAButton href="/contact" variant="outline">
                Get a Free Consultation
              </CTAButton>
            </AnimatedSection>

            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="flex items-center gap-2 rounded-2xl border border-black/5 bg-white p-4 shadow-sm"
                  >
                    <MapPin className={`h-4 w-4 shrink-0 ${accentColor}`} />
                    <span className="text-sm font-medium text-[#0a0a0a]">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#ff5c1a] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <h2 className="mb-6 text-4xl font-black tracking-tight text-white sm:text-5xl">
              Ready to Get Started?
            </h2>
            <p className="mb-10 text-base text-white/80">
              Let&apos;s talk about your project and how we can help you grow.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 rounded-full bg-white px-7 py-4 text-base font-semibold text-[#ff5c1a] hover:bg-white/90 transition-colors"
            >
              {ctaText}
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#ff5c1a]/15">
                →
              </span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
