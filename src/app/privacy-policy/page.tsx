import type { Metadata } from "next";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Privacy Policy | Blank Digital Edinburgh",
  description:
    "Privacy policy for Blank Digital. How we collect, use and protect your personal data in line with UK GDPR.",
  alternates: { canonical: "https://www.blankdigital.co.uk/privacy-policy" },
  robots: { index: false, follow: true },
};

const sections = [
  {
    title: "Who We Are",
    content: `Blank Digital is a digital agency based in Edinburgh, Scotland. We provide website design, branding, SEO and Generative Engine Optimisation (GEO) services to businesses across Edinburgh and the Lothians.

You can contact us at: info@blankdigital.co.uk`,
  },
  {
    title: "What Data We Collect",
    content: `We collect personal data only when you choose to provide it. This includes:

• **Contact form submissions** — your name, email address, company name (if provided) and the message you send us.
• **GEO audit requests** — your business name, website URL, email address, service type, location and target searches.
• **Website usage data** — anonymous analytics data such as pages visited, time on site and general geographic region (via Vercel Analytics). No personally identifiable information is collected here.

We do not collect payment information directly. Any payment processing is handled by third-party providers with their own privacy policies.`,
  },
  {
    title: "How We Use Your Data",
    content: `We use the data you provide solely to:

• Respond to your enquiry or quote request
• Deliver the service you have asked for (e.g. a GEO audit)
• Send you project-related communications

We do not use your data for unsolicited marketing, and we will not send you emails unrelated to your enquiry unless you have explicitly asked us to keep in touch.`,
  },
  {
    title: "How We Store Your Data",
    content: `Contact form submissions are processed via a third-party form service and delivered to our email inbox. We do not operate a separate CRM or database of contacts.

Emails you send us are stored in our email system and retained for as long as necessary to fulfil the service or for accounting and legal purposes (typically up to 6 years).

Our website is hosted by a reputable cloud hosting provider with infrastructure based in the European Union and United States, operating under standard contractual clauses for international data transfers.`,
  },
  {
    title: "Your Legal Rights",
    content: `Under UK GDPR you have the right to:

• **Access** — request a copy of the personal data we hold about you
• **Rectification** — ask us to correct inaccurate data
• **Erasure** — ask us to delete your personal data (the "right to be forgotten")
• **Restriction** — ask us to limit how we use your data
• **Portability** — receive your data in a structured, machine-readable format
• **Object** — object to our processing of your data

To exercise any of these rights, email us at info@blankdigital.co.uk. We will respond within 30 days.`,
  },
  {
    title: "Cookies",
    content: `Our website uses minimal cookies. We do not use advertising, tracking or third-party marketing cookies.

Vercel Analytics uses privacy-friendly, cookieless tracking to give us anonymous usage statistics. This does not require your consent under UK GDPR because no personal data is processed.

If we add any additional cookies in the future we will update this policy and display a consent notice.`,
  },
  {
    title: "Third-Party Services",
    content: `We use third-party services that may process data as part of operating our website, including:

• A **contact form provider** — processes form submissions before delivering them to our inbox
• A **cloud hosting provider** — hosts the website and provides anonymous, privacy-friendly analytics
• An **email provider** — stores and delivers email communications

Each of these providers processes data in accordance with their own privacy policies and applicable data protection law.`,
  },
  {
    title: "Data Retention",
    content: `We retain your personal data for as long as is necessary for the purpose it was collected. Specifically:

• Enquiry emails: retained for up to 6 years from the date of last contact (in line with standard business record-keeping)
• Anonymous analytics data: aggregated and not linked to individuals

You may request deletion of your data at any time by contacting us at info@blankdigital.co.uk.`,
  },
  {
    title: "Changes to This Policy",
    content: `We may update this privacy policy from time to time. The most recent version will always be available at blankdigital.co.uk/privacy-policy. The date at the bottom of this page shows when it was last updated.`,
  },
  {
    title: "Contact and Complaints",
    content: `If you have any questions about this privacy policy or how we handle your data, please email us at info@blankdigital.co.uk.

If you are not satisfied with our response, you have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk.`,
  },
];

function renderContent(content: string) {
  return content.split("\n\n").map((paragraph, i) => {
    if (paragraph.startsWith("•") || paragraph.includes("\n•")) {
      const items = paragraph.split("\n").filter((l) => l.trim());
      return (
        <ul key={i} className="mb-4 space-y-2">
          {items.map((item, j) => {
            const clean = item.replace(/^•\s*/, "");
            const parts = clean.split(/\*\*(.*?)\*\*/g);
            return (
              <li key={j} className="flex items-start gap-2 text-sm leading-relaxed text-gray-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff5c1a]" />
                <span>
                  {parts.map((part, k) =>
                    k % 2 === 1 ? <strong key={k} className="text-[#0a0a0a]">{part}</strong> : part
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      );
    }

    const parts = paragraph.split(/\*\*(.*?)\*\*/g);
    return (
      <p key={i} className="mb-4 text-sm leading-relaxed text-gray-600">
        {parts.map((part, k) =>
          k % 2 === 1 ? <strong key={k} className="text-[#0a0a0a]">{part}</strong> : part
        )}
      </p>
    );
  });
}

export default function PrivacyPolicyPage() {
  return (
    <>
      {/* Hero */}
      <section className="hero-gradient hero-stripes px-6 pb-16 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Legal
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Privacy Policy
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              How Blank Digital collects, uses and protects your personal data.
              Last updated: June 2025.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-10">
            {sections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.04}>
                <div className="rounded-3xl border border-black/5 bg-[#f8fafc] p-8">
                  <h2 className="mb-4 text-xl font-black text-[#0a0a0a]">{section.title}</h2>
                  <div>{renderContent(section.content)}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Contact strip */}
          <AnimatedSection delay={0.2} className="mt-10">
            <div className="rounded-3xl bg-[#0a0a0a] p-8 text-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
                Questions?
              </p>
              <h2 className="mb-3 text-2xl font-black text-white">
                Get in Touch
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-gray-400">
                If you have any questions about this policy or want to exercise your data rights, email us directly.
              </p>
              <a
                href="mailto:info@blankdigital.co.uk"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff5c1a] px-6 py-3 text-sm font-semibold text-white hover:bg-[#e64d0e] transition-colors"
              >
                info@blankdigital.co.uk
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
