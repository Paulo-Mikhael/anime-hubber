"use client";

import IPopularAnimes from "@/interfaces/IPopularAnime";

export default function AnimeInfos({ popularAnime }: { popularAnime: IPopularAnimes | undefined }) {
  if (!popularAnime) return;

  return (
    <span className="w-[465px]">
      <h2 className="text-right text-section-subtitle">Populares</h2>
      <h3 className="text-emphasis font-bold text-right w-full text-nowrap overflow-hidden">
        {popularAnime.position}. {popularAnime.name}
      </h3>
      <p className="text-right text-section-subtitle mt-6 min-h-[66px]">
        {popularAnime.description}
      </p>
    </span>
  );
}