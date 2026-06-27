"use client";

import { useEffect, useState } from "react";

export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return reduced;
}

export function motionProps(reduced: boolean, animate: object, transition?: object) {
  if (reduced) {
    return { initial: false, animate: undefined, transition: { duration: 0 } };
  }
  return { initial: { opacity: 0, y: 20 }, animate, transition: transition ?? { duration: 0.5 } };
}
