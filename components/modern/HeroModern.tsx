"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { EVENT } from "@/data/event";
import CountdownTimer from "@/components/modern/CountdownTimer";
import { GradientOrb } from "@/components/modern/ui";
import { useReducedMotion } from "@/lib/motion";

const PARTICLES = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  left: `${8 + (i * 7.5) % 85}%`,
  top: `${10 + (i * 11) % 75}%`,
  size: 4 + (i % 3) * 2,
  delay: i * 0.4,
  duration: 4 + (i % 4),
}));

interface HeroModernProps {
  onExploreSlokas: () => void;
  onPracticeTracker: () => void;
  onRegister: () => void;
}

export default function HeroModern({
  onExploreSlokas,
  onPracticeTracker,
  onRegister,
}: HeroModernProps) {
  const reduced = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative overflow-hidden px-4 pb-16 pt-10 sm:px-6 sm:pt-14"
    >
      <GradientOrb className="-left-20 -top-20 h-72 w-72" color="gold" />
      <GradientOrb className="-right-16 top-1/3 h-64 w-64" color="maroon" />
      <GradientOrb className="bottom-0 left-1/3 h-56 w-56" color="green" />

      {!reduced &&
        PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            aria-hidden="true"
            className="absolute rounded-full bg-gold-light/60"
            style={{ left: p.left, top: p.top, width: p.size, height: p.size }}
            animate={{ y: [0, -18, 0], opacity: [0.3, 0.9, 0.3] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex flex-wrap items-center gap-3"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 text-xs font-semibold text-maroon backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
            {EVENT.themeSanskrit} · {EVENT.theme}
          </span>
        </motion.div>

        <motion.h1
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-devanagari max-w-3xl text-4xl font-bold leading-[1.1] text-maroon sm:text-5xl lg:text-6xl"
        >
          {EVENT.title}
          <span className="mt-2 block font-sanskrit text-2xl font-normal text-gold sm:text-3xl">
            {EVENT.titleSanskrit}
          </span>
        </motion.h1>

        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          A premium Guru Purnima sloka celebration by{" "}
          <strong className="text-maroon">{EVENT.organizer}</strong> — guiding children aged{" "}
          {EVENT.ages} to learn, recite, and offer their voice in devotion.
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          {[
            { icon: "📅", text: EVENT.date },
            { icon: "🕠", text: EVENT.time },
            { icon: "👧", text: EVENT.agesFull },
          ].map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-sm font-medium text-maroon-dark backdrop-blur-md"
            >
              <span aria-hidden="true">{item.icon}</span>
              {item.text}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-10 rounded-2xl border border-white/40 bg-white/30 p-6 backdrop-blur-xl sm:inline-block"
        >
          <CountdownTimer targetISO={EVENT.registrationDeadlineISO} />
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-wrap gap-3"
        >
          <button
            type="button"
            onClick={onRegister}
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-maroon to-maroon-dark px-6 py-3.5 text-sm font-bold text-cream shadow-lg shadow-maroon/25 transition hover:shadow-xl active:scale-[0.98]"
          >
            Register
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </button>
          <button
            type="button"
            onClick={onExploreSlokas}
            className="inline-flex items-center gap-2 rounded-full border border-maroon/30 bg-white/50 px-6 py-3.5 text-sm font-bold text-maroon backdrop-blur-md transition hover:bg-white/70 active:scale-[0.98]"
          >
            <BookOpen className="h-4 w-4" />
            Explore Slokas
          </button>
          <button
            type="button"
            onClick={onPracticeTracker}
            className="inline-flex items-center gap-2 rounded-full border border-tulsi/30 bg-tulsi/10 px-6 py-3.5 text-sm font-bold text-tulsi transition hover:bg-tulsi/15 active:scale-[0.98]"
          >
            Practice Tracker
          </button>
        </motion.div>
      </div>
    </section>
  );
}
