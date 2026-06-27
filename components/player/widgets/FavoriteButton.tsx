"use client";

import { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import { useAudioPlayer } from "@/context/AudioPlayerContext";
import { isFavorite, toggleFavorite, PRACTICE_EVENT } from "@/lib/practice";

export default function FavoriteButton() {
  const { currentTrack } = useAudioPlayer();
  const trackId = currentTrack?.id;
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    if (!trackId) {
      setFavorite(false);
      return;
    }
    setFavorite(isFavorite(trackId));

    const onUpdate = () => setFavorite(isFavorite(trackId));
    window.addEventListener(PRACTICE_EVENT, onUpdate);
    return () => window.removeEventListener(PRACTICE_EVENT, onUpdate);
  }, [trackId]);

  if (!trackId) {
    return (
      <button type="button" disabled className="text-white/30" aria-label="Favorite">
        <Heart className="h-[18px] w-[18px]" />
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={() => setFavorite(toggleFavorite(trackId))}
      className={`transition hover:scale-110 active:scale-95 ${
        favorite ? "text-green-400" : "text-white/60 hover:text-white"
      }`}
      aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      aria-pressed={favorite}
    >
      <Heart className={`h-[18px] w-[18px] ${favorite ? "fill-current" : ""}`} />
    </button>
  );
}
