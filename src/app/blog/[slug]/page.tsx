import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getPost, getAllSlugs, type Section } from "@/lib/blog-posts";
import CTAButton from "@/components/shared/CTAButton";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

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

function renderSection(section: Section, i: number) {
  switch (section.type) {
    case "intro":
      return (
        <p key={i} className="text-lg leading-relaxed text-gray-600 font-medium border-l-4 border-[#ff5c1a] pl-5">
          {section.text}
        </p>
      );
    case "h2":
      return (
        <h2 key={i} className="text-2xl font-black text-[#0a0a0a] mt-10 mb-4">
          {section.text}
        </h2>
      );
    case "h3":
      return (
        <h3 key={i} className="text-xl font-bold text-[#0a0a0a] mt-8 mb-3">
          {section.text}
        </h3>
      );
    case "p":
      return (
        <p key={i} className="text-base leading-relaxed text-gray-600">
          {section.text}
        </p>
      );
    case "ul":
      return (
        <ul key={i} className="space-y-2 pl-1">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-base text-gray-600">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#ff5c1a]" />
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol key={i} className="space-y-3 pl-1">
          {section.items?.map((item, j) => (
            <li key={j} className="flex items-start gap-3 text-base text-gray-600">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#ff5c1a] text-xs font-bold text-white">
                {j + 1}
              </span>
              {item}
            </li>
          ))}
        </ol>
      );
    case "cta":
      return (
        <div key={i} className="rounded-3xl bg-[#0a0a0a] p-8 text-center mt-10">
          <p className="mb-6 text-base leading-relaxed text-gray-300">{section.text}</p>
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
        </div>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Blank Digital",
      url: "https://www.blankdigital.co.uk",
    },
    publisher: {
      "@type": "Organization",
      name: "Blank Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.blankdigital.co.uk/images/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.blankdigital.co.uk/blog/${post.slug}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      {/* Hero */}
      <section className="hero-gradient hero-stripes px-6 pb-16 pt-36">
        <div className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#0a0a0a] transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-4 flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${categoryColour[post.category] ?? "bg-gray-100 text-gray-600"}`}
            >
              {post.category}
            </span>
            <span className="text-xs text-gray-400">{post.readTime}</span>
            <span className="text-xs text-gray-400">{formatDate(post.date)}</span>
          </div>
          <h1 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            {post.content.map((section, i) => renderSection(section, i))}
          </div>

          <div className="mt-16 border-t border-black/5 pt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-[#0a0a0a]">Written by Blank Digital</p>
              <p className="text-sm text-gray-500">Edinburgh digital agency for local businesses</p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#ff5c1a] hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> More articles
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
