"use client";

import Image from "next/image";
import LinearFilter from "@/components/ui/LinearFilter";
import Arrow from "@/components/ui/Arrow";
import IPost from "@/interfaces/IPost";
import { useEffect, useState } from "react";

interface Props {
  posts: IPost[]
}

export default function ImagesCaroussel({ posts }: Props) {
  const [showedPosts, setShowedPosts] = useState<IPost[]>([]);
  const [lastShowedPostId, setLastShowedPostId] = useState<number>(2);

  useEffect(() => {
    if (lastShowedPostId < 2) {
      setLastShowedPostId(2);
      return
    };
    if (lastShowedPostId >= posts.length) {
      setLastShowedPostId(posts.length - 1);
      return;
    };

    setShowedPosts([
      posts[lastShowedPostId - 2],
      posts[lastShowedPostId - 1],
      posts[lastShowedPostId]
    ]);
  }, [lastShowedPostId]);

  useEffect(() => {
    if (showedPosts.length > 0) return;

    setShowedPosts([
      posts[0],
      posts[1],
      posts[2]
    ]);
  }, []);

  return (
    <span>
      <div className="flex gap-5 w-[465px] mt-6 overflow-hidden relative">
        <LinearFilter linearDirection="left" blackOpacity={80} toPercentage={20} />
        {showedPosts.map((post) => (
          <span className="w-[179.2px] h-28 shrink-0 relative" key={post.id}>
            <Image src={post.postImage.url} fill alt={post.postImage.alt} className="border-2 border-primary-1000 rounded-[3px]" />
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 w-[465px] mt-6 justify-between">
        <blockquote>
          Personagem Reze deitada em um campo de flores.
        </blockquote>
        <span className="flex gap-2.5 items-center justify-end">
          <Arrow onClick={() => setLastShowedPostId(lastShowedPostId - 1)}>
            <Arrow.Left />
          </Arrow>
          <Arrow onClick={() => setLastShowedPostId(lastShowedPostId + 1)}>
            <Arrow.Right />
          </Arrow>
        </span>
      </div>
    </span>
  );
}