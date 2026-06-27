"use client";

import { useCallback, useEffect, useState } from "react";
import { BrandMark } from "@/components/ui";

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "rules", label: "Rules" },
  { id: "register", label: "Register" },
  { id: "slokas", label: "Slokas" },
  { id: "evaluation", label: "Evaluation" },
  { id: "practice-audio", label: "Practice audio" },
  { id: "prizes", label: "Prizes" },
] as const;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollTo = useCallback((id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav
      className="sticky top-0 z-50 border-b border-line bg-cream/92 backdrop-blur-md"
      aria-label="Main navigation"
    >
      <div className="mx-auto flex max-w-[980px] items-center justify-between px-5 py-3">
        <button
          type="button"
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2.5 text-[15px] font-bold text-maroon"
          aria-label="Bhakthi Sudha Mandali — scroll to top"
        >
          <BrandMark />
          <span className="hidden sm:inline">Bhakthi Sudha Mandali</span>
          <span className="sm:hidden">BSM</span>
        </button>

        <button
          type="button"
          className="flex h-[38px] w-[38px] items-center justify-center rounded-lg border border-line bg-card md:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <div
          id="nav-menu"
          className={`${
            menuOpen
              ? "absolute left-0 right-0 top-full flex flex-col border-b border-line bg-cream px-3 py-2 shadow-[0_8px_24px_rgba(58,20,16,0.08)] md:static md:flex md:flex-row md:border-0 md:bg-transparent md:p-0 md:shadow-none"
              : "hidden md:flex md:flex-row md:gap-1"
          }`}
          role="menubar"
        >
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              onClick={() => scrollTo(id)}
              className={`rounded-lg px-3 py-2 text-left text-[13px] font-semibold transition md:whitespace-nowrap ${
                activeSection === id
                  ? "bg-maroon text-cream md:bg-card md:text-maroon"
                  : "text-ink-soft hover:bg-card hover:text-maroon"
              } ${menuOpen ? "border-b border-line py-3 last:border-0 md:border-0" : ""}`}
              aria-current={activeSection === id ? "true" : undefined}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
