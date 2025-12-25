"use client";

import Button from "@/components/ui/Button";
import ImagesCaroussel from "./ImagesCaroussel";
import PostInfos from "./PostInfos";
import { useState } from "react";
import IPopularAnime from "@/interfaces/IPopularAnime";
import popularAnimes from "@/data/popularAnimes";

export default function PopularPosts() {
  // Controls the actual selected popular anime
  const [selectedAnime, setSelectedAnime] = useState<IPopularAnime>();

  return (
    <span className="flex h-full flex-col items-end">
      {/* Gets the actual selected popular anime */}
      <PostInfos popularAnime={selectedAnime} />
      <span className="flex flex-1 flex-col items-end justify-between">
        {/* Sets the actual selected popular anime */}
        <ImagesCaroussel popularAnimes={popularAnimes} setSelectedPopularAnime={setSelectedAnime} />
        <Button>Veja mais</Button>
      </span>
    </span>
  );
}