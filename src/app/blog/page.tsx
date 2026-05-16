import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing Tips for Edinburgh Businesses",
  description:
    "Practical tips on websites, SEO, branding and digital marketing for Edinburgh tradespeople, restaurants and service businesses. No jargon, just useful advice.",
};

const posts = [
  {
    slug: "how-much-does-a-website-cost-edinburgh",
    title: "How Much Does a Website Cost in Edinburgh?",
    excerpt: "A straight-talking breakdown of what you can expect to pay for a professional business website in Edinburgh, and what you get at each price point.",
    date: "2026-05-01",
    category: "Web Design",
    readTime: "5 min read",
  },
  {
    slug: "local-seo-guide-edinburgh-tradespeople",
    title: "Local SEO Guide for Edinburgh Tradespeople",
    excerpt: "If you are a plumber, electrician or joiner in Edinburgh, here is exactly what you need to do to show up at the top of Google when customers search for your trade.",
    date: "2026-04-18",
    category: "SEO",
    readTime: "8 min read",
  },
  {
    slug: "what-is-generative-engine-optimisation",
    title: "What is Generative Engine Optimisation and Why Does It Matter?",
    excerpt: "ChatGPT and Google AI are changing how people find local businesses. Here is what Edinburgh business owners need to know about GEO and how to get ahead of competitors.",
    date: "2026-04-05",
    category: "GEO",
    readTime: "6 min read",
  },
  {
    slug: "do-edinburgh-restaurants-need-a-website",
    title: "Do Edinburgh Restaurants Still Need a Website in 2026?",
    excerpt: "With Google, TripAdvisor and Instagram all competing for attention, is a website still worth it for Edinburgh restaurants and cafes? The honest answer might surprise you.",
    date: "2026-03-22",
    category: "Web Design",
    readTime: "4 min read",
  },
  {
    slug: "how-to-choose-a-web-designer-edinburgh",
    title: "How to Choose a Web Designer in Edinburgh: 7 Questions to Ask",
    excerpt: "Not all web designers are equal. Before you hand over any money, here are the seven questions that will separate the good from the not so good.",
    date: "2026-03-10",
    category: "Web Design",
    readTime: "7 min read",
  },
  {
    slug: "google-business-profile-guide-edinburgh",
    title: "How to Set Up and Optimise Your Google Business Profile in Edinburgh",
    excerpt: "Your Google Business Profile is the single most important free tool for getting found locally. Here is how to set it up properly and make the most of it.",
    date: "2026-02-28",
    category: "SEO",
    readTime: "6 min read",
  },
];

const categoryColour: Record<string, string> = {
  "Web Design": "bg-blue-50 text-blue-700",
  SEO: "bg-green-50 text-green-700",
  GEO: "bg-purple-50 text-purple-700",
  Branding: "bg-orange-50 text-[#ff5c1a]",
};

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function BlogPage() {
  return (
    <>
      <section className="hero-gradient hero-stripes px-6 pb-20 pt-36">
        <div className="mx-auto max-w-3xl text-center">
          <AnimatedSection>
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              The Blog
            </p>
            <h1 className="mb-6 text-5xl font-black tracking-tight text-[#0a0a0a] sm:text-6xl">
              Straight-Talking
              <br />
              Digital Advice
            </h1>
            <p className="mx-auto max-w-xl text-lg leading-relaxed text-gray-500">
              Practical tips on websites, SEO, branding and digital marketing
              for Edinburgh businesses. Written by people who actually do this
              stuff every day.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <AnimatedSection key={post.slug} delay={i * 0.08}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-3xl border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColour[post.category] ?? "bg-gray-100 text-gray-600"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readTime}</span>
                  </div>
                  <h2 className="mb-3 text-lg font-bold leading-snug text-[#0a0a0a]">
                    {post.title}
                  </h2>
                  <p className="flex-1 text-sm leading-relaxed text-gray-500">
                    {post.excerpt}
                  </p>
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
                    <div className="flex items-center gap-1 text-sm font-semibold text-[#0a0a0a] group-hover:gap-2 transition-all">
                      Read <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
