import Link from "next/link";
import { Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { label: "Logo Design", href: "/services/logos" },
  { label: "Brand Identity", href: "/services/branding" },
  { label: "Web Development", href: "/services/web-development" },
  { label: "SEO Optimisation", href: "/services/seo-optimisation" },
  { label: "Generative Engine Optimisation", href: "/services/generative-engine-optimisation" },
];

const serviceAreas = [
  "Edinburgh City Centre",
  "Leith",
  "Morningside",
  "Stockbridge",
  "Portobello",
  "East Lothian",
  "Midlothian",
  "UK-Wide",
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="text-xl font-black tracking-tight text-white leading-none">
                BLANK
              </span>
              <span className="text-xl font-light tracking-tight text-white leading-none">
                DIGITAL
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-400 mb-2 max-w-xs">
              Edinburgh digital agency helping local businesses get online, get
              found and get customers.
            </p>
            <p className="text-xs text-gray-600">Based in Edinburgh, Scotland.</p>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Areas We Cover
            </h3>
            <ul className="space-y-2.5">
              {serviceAreas.map((area) => (
                <li key={area} className="flex items-center gap-1.5">
                  <MapPin className="h-3 w-3 text-gray-600" />
                  <span className="text-sm text-gray-400">{area}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-500">
              Get In Touch
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@blankdigital.co.uk"
                className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-white transition-colors"
              >
                <Mail className="h-4 w-4 shrink-0" />
                info@blankdigital.co.uk
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#ff5c1a] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e64d0e] transition-colors"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 sm:flex-row">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} Blank Digital Ltd. All rights reserved. Edinburgh, Scotland.
          </p>
          <div className="flex gap-6">
            <Link href="/about" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              About
            </Link>
            <Link href="/blog" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="text-xs text-gray-600 hover:text-gray-400 transition-colors">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
