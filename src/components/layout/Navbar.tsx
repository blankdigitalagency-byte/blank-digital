"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "Logo Design", href: "/services/logos" },
  { label: "Brand Identity", href: "/services/branding" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "SEO Optimisation", href: "/services/seo-optimisation" },
  { label: "Generative Engine Optimisation", href: "/services/generative-engine-optimisation" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Text logo */}
        <Link href="/" className="flex items-center gap-0">
          <span className="text-xl font-black tracking-tight text-[#0a0a0a] leading-none">
            BLANK
          </span>
          <span className="text-xl font-light tracking-tight text-[#0a0a0a] leading-none">
            DIGITAL
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-[#0a0a0a] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            </li>
          ))}

          {/* Services dropdown */}
          <li className="relative">
            <button
              onClick={() => setServicesOpen((o) => !o)}
              onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
              aria-expanded={servicesOpen}
              className="flex items-center gap-1 text-sm font-medium text-[#0a0a0a] hover:opacity-60 transition-opacity"
            >
              Services
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.97 }}
                  transition={{ duration: 0.15 }}
                  className="absolute left-1/2 top-full mt-3 w-64 -translate-x-1/2 rounded-2xl border border-black/8 bg-white p-2 shadow-xl"
                >
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block rounded-xl px-4 py-2.5 text-sm text-[#0a0a0a] hover:bg-gray-50 transition-colors"
                    >
                      {s.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        </ul>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center">
          <Link
            href="/contact"
            className="flex items-center gap-2 rounded-full bg-[#0a0a0a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#333] transition-colors"
          >
            Contact
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 text-xs">
              →
            </span>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="rounded-full p-2 hover:bg-black/5 transition-colors md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-black/5 bg-white md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-[#0a0a0a] hover:bg-gray-50 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-1 border-t border-black/5 pt-2">
                <p className="px-4 py-2 text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Services
                </p>
                {services.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-xl px-4 py-2.5 text-sm text-[#0a0a0a] hover:bg-gray-50 transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 rounded-full bg-[#0a0a0a] px-5 py-3 text-center text-sm font-semibold text-white"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
