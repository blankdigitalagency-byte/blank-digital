"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Brand Identity System",
    category: "Branding",
    href: "/projects",
    bg: "from-gray-900 to-gray-700",
    imgSrc: "/images/mockup-phone-1.jpg",
    alt: "iPhone mockup showing brand identity project",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Development",
    href: "/projects",
    bg: "from-slate-800 to-slate-600",
    imgSrc: "/images/mockup-laptop.jpg",
    alt: "MacBook mockup showing e-commerce web platform",
  },
  {
    title: "Mobile App Design",
    category: "UIUX Design",
    href: "/projects",
    bg: "from-zinc-900 to-zinc-700",
    imgSrc: "/images/mockup-phone-2.jpg",
    alt: "iPhone mockup showing mobile app design",
  },
];

export default function Portfolio() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex items-end justify-between"
        >
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#ff5c1a]">
              Our Work
            </p>
            <h2 className="text-4xl font-black tracking-tight text-[#0a0a0a] sm:text-5xl">
              Selected Projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden items-center gap-1.5 text-sm font-medium text-[#0a0a0a] hover:opacity-60 transition-opacity sm:flex"
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <Link href={project.href}>
                <div
                  className={`relative aspect-[4/5] overflow-hidden rounded-3xl bg-gradient-to-br ${project.bg} shadow-lg`}
                >
                  <Image
                    src={project.imgSrc}
                    alt={project.alt}
                    fill
                    className="object-cover opacity-80 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-white/60">
                      {project.category}
                    </p>
                    <h3 className="mt-1 text-lg font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-200 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
