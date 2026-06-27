"use client";

import { useCallback, useEffect, useState } from "react";
import {
  getFavorites,
  getPracticeCompleted,
  PRACTICE_EVENT,
} from "@/lib/practice";

export function usePracticeStorage() {
  const [completed, setCompleted] = useState<Set<string>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [ready, setReady] = useState(false);

  const refresh = useCallback(() => {
    setCompleted(getPracticeCompleted());
    setFavorites(getFavorites());
    setReady(true);
  }, []);

  useEffect(() => {
    refresh();
    window.addEventListener(PRACTICE_EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(PRACTICE_EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, [refresh]);

  return { completed, favorites, ready, refresh };
}
