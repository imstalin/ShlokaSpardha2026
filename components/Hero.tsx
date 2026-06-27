"use client";

import { motion } from "framer-motion";
import { EVENT } from "@/data/event";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Hero() {
  return (
    <header className="relative mx-auto max-w-[980px] px-5 pb-10 pt-14 text-center md:pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-5 flex justify-center gap-2.5 opacity-90"
        aria-hidden="true"
      >
        {[0.5, 0.75, 1].map((opacity, i) => (
          <svg key={i} width={i === 2 ? 26 : 22} height={i === 2 ? 26 : 22} viewBox="0 0 24 24">
            {i === 2 ? (
              <circle cx="12" cy="12" r="10" fill="#C8862B" />
            ) : (
              <path
                d="M12 2a10 10 0 100 20 8 8 0 010-20z"
                fill="#E3A94F"
                opacity={opacity}
              />
            )}
          </svg>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-4 inline-block rounded-full border border-line bg-card px-3.5 py-1.5 text-xs font-bold tracking-widest text-maroon"
      >
        {EVENT.themeSanskrit} · Guru Purnima Celebration 2026
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="font-devanagari text-[clamp(1.875rem,6vw,3.25rem)] font-bold leading-tight text-maroon"
      >
        {EVENT.title}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="font-sanskrit mb-4 text-[clamp(1.25rem,3.5vw,1.75rem)] text-gold"
      >
        {EVENT.titleSanskrit}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mx-auto mb-7 max-w-[620px] text-[16.5px] text-ink-soft"
      >
        <span className="font-bold text-maroon">{EVENT.organizer}</span> invites children to
        offer their voice in devotion — a sloka recitation competition held in reverence of our
        Gurus, this Guru Purnima.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="mb-7 flex flex-wrap justify-center gap-3"
      >
        {[
          { icon: "📅", text: EVENT.date },
          { icon: "🕠", text: EVENT.time },
          { icon: "👧🧒", text: EVENT.agesFull },
        ].map((fact) => (
          <div
            key={fact.text}
            className="flex items-center gap-2 rounded-[14px] border border-line bg-card px-4 py-3 text-sm font-semibold text-maroon-dark shadow-[0_8px_24px_rgba(58,20,16,0.08)]"
          >
            <span aria-hidden="true">{fact.icon}</span>
            {fact.text}
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <button
          type="button"
          onClick={() => scrollTo("register")}
          className="inline-flex items-center gap-2 rounded-full bg-maroon px-6 py-3.5 text-sm font-bold text-cream shadow-[0_6px_18px_rgba(122,31,43,0.25)] transition hover:bg-maroon-dark active:scale-[0.97]"
        >
          Register
        </button>
        <button
          type="button"
          onClick={() => scrollTo("slokas")}
          className="inline-flex items-center gap-2 rounded-full border-2 border-maroon px-6 py-3.5 text-sm font-bold text-maroon transition hover:bg-card active:scale-[0.97]"
        >
          View Slokas
        </button>
        <button
          type="button"
          onClick={() => scrollTo("practice-audio")}
          className="inline-flex items-center gap-2 rounded-full border-2 border-maroon px-6 py-3.5 text-sm font-bold text-maroon transition hover:bg-card active:scale-[0.97]"
        >
          Practice Audio
        </button>
      </motion.div>
    </header>
  );
}
