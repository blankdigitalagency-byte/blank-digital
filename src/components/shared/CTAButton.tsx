"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  className = "",
}: CTAButtonProps) {
  const base =
    "inline-flex items-center gap-3 rounded-full px-7 py-4 text-base font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";

  const variants = {
    primary:
      "bg-[#ff5c1a] text-white hover:bg-[#e64d0e] focus-visible:ring-[#ff5c1a]",
    outline:
      "border-2 border-[#0a0a0a] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-white focus-visible:ring-[#0a0a0a]",
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
        {children}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <ArrowRight className="h-4 w-4" />
        </span>
      </Link>
    </motion.div>
  );
}
