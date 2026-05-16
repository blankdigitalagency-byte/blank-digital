import type { MetadataRoute } from "next";
import { getAllSlugs } from "@/lib/blog-posts";

const BASE_URL = "https://www.blankdigital.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const blogRoutes = getAllSlugs().map((slug) => ({
    path: `/blog/${slug}`,
    priority: 0.7,
  }));

  const routes = [
    { path: "", priority: 1 },
    { path: "/about", priority: 0.8 },
    { path: "/contact", priority: 0.9 },
    { path: "/services", priority: 0.9 },
    { path: "/services/logos", priority: 0.8 },
    { path: "/services/branding", priority: 0.8 },
    { path: "/services/web-development", priority: 0.8 },
    { path: "/services/seo-optimisation", priority: 0.8 },
    { path: "/services/generative-engine-optimisation", priority: 0.8 },
    { path: "/blog", priority: 0.7 },
    ...blogRoutes,
  ];

  return routes.map(({ path, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
