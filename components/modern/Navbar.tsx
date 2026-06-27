"use client";

import { useCallback, useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { BrandMark } from "@/components/ui";
import { useReducedMotion } from "@/lib/motion";

const NAV = [
  { id: "timeline", label: "Timeline" },
  { id: "practice-dashboard", label: "Progress" },
  { id: "slokas", label: "Slokas" },
  { id: "rules", label: "Rules" },
  { id: "register", label: "Register" },
  { id: "evaluation", label: "Evaluation" } 
] as const;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const reduced = useReducedMotion();

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => e.isIntersecting && setActive(id),
        { rootMargin: "-45% 0px -45% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/30 bg-cream/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 font-bold text-maroon"
          aria-label="Scroll to top"
        >
          <BrandMark className="h-8 w-8" />
          <span className="hidden text-sm sm:inline">Bhakthi Sudha Mandali</span>
        </button>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {NAV.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              onClick={() => scrollTo(id)}
              className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${
                active === id
                  ? "bg-maroon text-cream"
                  : "text-ink-soft hover:bg-white/50 hover:text-maroon"
              }`}
              aria-current={active === id ? "true" : undefined}
            >
              {label}
            </button>
          ))}
         
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/40 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={reduced ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduced ? undefined : { height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/30 bg-cream/95 md:hidden"
            aria-label="Mobile"
          >
            <div className="space-y-1 px-4 py-3">
              {NAV.map(({ id, label }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  className="block w-full rounded-lg px-3 py-3 text-left text-sm font-semibold text-ink hover:bg-white/50"
                >
                  {label}
                </button>
              ))}
              <Link
                href="/classic"
                className="block rounded-lg px-3 py-3 text-sm font-semibold text-ink-soft"
                onClick={() => setOpen(false)}
              >
                Classic version
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
