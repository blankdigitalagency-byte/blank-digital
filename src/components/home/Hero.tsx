"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTAButton from "@/components/shared/CTAButton";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.55, delay, ease: [0.25, 0.1, 0.25, 1] as const },
});

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24 pb-16">
      {/* Edinburgh background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/edinburgh-hero.jpg"
          alt="Edinburgh skyline at golden hour"
          fill
          className="object-cover object-center"
          priority
          quality={85}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />
        {/* Subtle gradient at bottom */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Location badge */}
        <motion.div {...fadeUp(0.1)} className="mb-6 inline-flex">
          <span className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-medium text-white backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-[#ff5c1a]" />
            Edinburgh Digital Agency
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          {...fadeUp(0.2)}
          className="mb-6 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[80px]"
        >
          Get Your Edinburgh Business
          <br />
          Found Online.
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.35)}
          className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg"
        >
          We help Edinburgh tradespeople, restaurants and service businesses get
          professional websites, strong branding and top Google rankings. No
          jargon. Just results.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.45)} className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <CTAButton href="/contact">Get a Free Quote</CTAButton>
          <Link href="/about" variant="ghost">
            See How We Work
          </Link>
        </motion.div>

        {/* Trust row */}
        <motion.div
          {...fadeUp(0.55)}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-white/60"
        >
          <span className="flex items-center gap-2">
            <span className="text-[#ff5c1a]">✓</span> Based in Edinburgh
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-[#ff5c1a]">✓</span> 50+ Local Businesses Helped
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-white/30 sm:block" />
          <span className="flex items-center gap-2">
            <span className="text-[#ff5c1a]">✓</span> Results in 30 Days
          </span>
        </motion.div>
      </div>
    </section>
  );
}

function Link({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "ghost";
}) {
  if (variant === "ghost") {
    return (
      <a
        href={href}
        className="text-sm font-semibold text-white/80 hover:text-white transition-colors underline underline-offset-4"
      >
        {children}
      </a>
    );
  }
  return <a href={href}>{children}</a>;
}
