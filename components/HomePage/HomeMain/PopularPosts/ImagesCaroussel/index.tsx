"use client";

import Image from "next/image";
import LinearFilter from "@/components/ui/LinearFilter";
import Arrow from "@/components/ui/Arrow";
import IPost from "@/interfaces/IPost";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import clsx from "clsx";
import IPopularAnime from "@/interfaces/IPopularAnime";

interface Props {
  popularAnimes: IPopularAnime[],
  setSelectedPopularAnime: Dispatch<SetStateAction<IPopularAnime | undefined>>;
}

export default function ImagesCaroussel({ popularAnimes, setSelectedPopularAnime }: Props) {
  // Animes displayed in carousel
  const [showedAnimes, setShowedAnimes] = useState<IPopularAnime[]>([]);
  // Last showed anime's index
  const [lastShowedAnimeIndex, setLastShowedAnimeIndex] = useState<number>(2);
  // First anime in carousel's id
  const [selectedAnimeId, setSelectedAnimeId] = useState<number>(1);

  // Executes when the last showed anime is changed
  useEffect(() => {
    // It doesn't let the last showed anime's index be lower than two
    if (lastShowedAnimeIndex < 2) {
      setLastShowedAnimeIndex(2);
      return
    };
    // It doesn't let the last showed anime's index be greater than `popularAnimes` array's lenght
    if (lastShowedAnimeIndex >= popularAnimes.length) {
      setLastShowedAnimeIndex(popularAnimes.length - 1);
      return;
    };

    const firstAnime = popularAnimes[lastShowedAnimeIndex - 2];
    // Takes the last showed anime's index and adds the anime with that index and the previous two animes to the `showedAnimes` array
    setShowedAnimes([
      firstAnime,
      popularAnimes[lastShowedAnimeIndex - 1],
      popularAnimes[lastShowedAnimeIndex]
    ]);

    // Sets the first showed anime's id as the select anime's id
    setSelectedAnimeId(firstAnime.id);
    // Sets the selected anime on the father component's state
    setSelectedPopularAnime(firstAnime);
  }, [lastShowedAnimeIndex]);

  // Executes once
  useEffect(() => {
    // It only executes if the `showedanime` array is empty
    if (showedAnimes.length > 0) return;

    // Sets the first animes to be shown as the three first items in `popularAnimes` array
    setShowedAnimes([
      popularAnimes[0],
      popularAnimes[1],
      popularAnimes[2]
    ]);
  }, []);

  return (
    <span>
      <div className="flex gap-5 w-[465px] mt-6 overflow-hidden relative">
        <LinearFilter linearDirection="left" blackOpacity={80} toPercentage={20} />
        {showedAnimes.map((anime) => (
          <span className="w-[179.2px] h-28 shrink-0 relative" key={anime.id}>
            <Image
              sizes="179.2px"
              src={anime.image.url}
              fill
              alt={anime.image.alt}
              className={
                clsx(
                  "border-2 rounded-[3px]",
                  anime.id != selectedAnimeId && "border-primary-1000",
                  anime.id == selectedAnimeId && "border-success"
                )
              } />
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 w-[465px] mt-6 justify-between">
        <blockquote>
          {showedAnimes.length > 0 && (
            showedAnimes[showedAnimes.length - 3].image.alt
          )}
        </blockquote>
        <span className="flex gap-2.5 items-center justify-end">
          <Arrow onClick={() => setLastShowedAnimeIndex(lastShowedAnimeIndex - 1)}>
            <Arrow.Left />
          </Arrow>
          <Arrow onClick={() => setLastShowedAnimeIndex(lastShowedAnimeIndex + 1)}>
            <Arrow.Right />
          </Arrow>
        </span>
      </div>
    </span>
  );
}