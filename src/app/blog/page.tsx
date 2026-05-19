import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/shared/AnimatedSection";
import { posts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog | Digital Marketing Tips for Edinburgh Businesses",
  description:
    "Practical tips on websites, SEO, branding and digital marketing for Edinburgh tradespeople, restaurants and service businesses. No jargon, just useful advice.",
  alternates: { canonical: "https://www.blankdigital.co.uk/blog" },
  openGraph: {
    title: "Blog | Digital Marketing Tips for Edinburgh Businesses",
    description: "Practical tips on websites, SEO, branding and digital marketing for Edinburgh businesses.",
    url: "https://www.blankdigital.co.uk/blog",
  },
};

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
