"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/lib/motion";

export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/35 shadow-[0_8px_32px_rgba(58,20,16,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}

export function ModernSection({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();

  return (
    <motion.section
      id={id}
      initial={reduced ? false : { opacity: 0, y: 32 }}
      whileInView={reduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: reduced ? 0 : 0.55, ease: "easeOut" }}
      className={`section-scroll-margin mx-auto max-w-6xl px-4 pb-20 pt-4 sm:px-6 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold">{eyebrow}</p>
      <h2 className="font-devanagari text-3xl font-bold tracking-tight text-maroon sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-base leading-relaxed text-ink-soft">{subtitle}</p>}
    </div>
  );
}

export function GradientOrb({
  className,
  color = "gold",
}: {
  className?: string;
  color?: "gold" | "maroon" | "green";
}) {
  const colors = {
    gold: "from-gold/30 to-gold-light/10",
    maroon: "from-maroon/25 to-maroon-dark/5",
    green: "from-tulsi/25 to-tulsi/5",
  };

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full bg-gradient-to-br blur-3xl ${colors[color]} ${className}`}
    />
  );
}
