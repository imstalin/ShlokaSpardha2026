"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function SectionWrapper({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`section-scroll-margin mx-auto max-w-[980px] px-5 pb-16 pt-2.5 ${className}`}
    >
      {children}
    </motion.section>
  );
}

export function SectionHead({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-7">
      <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gold">{kicker}</p>
      <h2 className="font-devanagari text-[clamp(1.5rem,4vw,2rem)] font-bold text-maroon">
        {title}
      </h2>
      {description && (
        <p className="mt-2 max-w-[640px] text-[15px] text-ink-soft">{description}</p>
      )}
    </div>
  );
}

export function MoonDivider() {
  return (
    <div className="mx-auto max-w-[980px] px-5" aria-hidden="true">
      <div className="my-2 mb-11 flex items-center gap-3.5">
        <div className="h-px flex-1 bg-line" />
        <div className="flex gap-1.5">
          <div className="h-3.5 w-3.5 rounded-full bg-gold-light opacity-35" />
          <div className="h-3.5 w-3.5 rounded-full bg-gold-light opacity-60" />
          <div className="h-3.5 w-3.5 rounded-full bg-gold-light" />
        </div>
        <div className="h-px flex-1 bg-line" />
      </div>
    </div>
  );
}

export function BrandMark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="19" stroke="#C8862B" strokeWidth="1.5" />
      <path
        d="M20 8 L23 17 L32 17 L24.5 22.5 L27.5 31.5 L20 26 L12.5 31.5 L15.5 22.5 L8 17 L17 17 Z"
        fill="#7A1F2B"
      />
    </svg>
  );
}
