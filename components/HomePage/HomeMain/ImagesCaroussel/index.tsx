"use client";

import Image from "next/image";
import LinearFilter from "@/components/ui/LinearFilter";
import Arrow from "@/components/ui/Arrow";
import IPost from "@/interfaces/IPost";
import { useEffect, useState } from "react";
import clsx from "clsx";

interface Props {
  posts: IPost[]
}

export default function ImagesCaroussel({ posts }: Props) {
  const [showedPosts, setShowedPosts] = useState<IPost[]>([]);
  const [selectedPostId, setSelectedPostId] = useState<number>(1);
  const [lastShowedPostIndex, setLastShowedPostIndex] = useState<number>(2);

  useEffect(() => {
    if (lastShowedPostIndex < 2) {
      setLastShowedPostIndex(2);
      return
    };
    if (lastShowedPostIndex >= posts.length) {
      setLastShowedPostIndex(posts.length - 1);
      return;
    };

    setShowedPosts([
      posts[lastShowedPostIndex - 2],
      posts[lastShowedPostIndex - 1],
      posts[lastShowedPostIndex]
    ]);

    setSelectedPostId(posts[lastShowedPostIndex - 2].id);
  }, [lastShowedPostIndex]);

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
            <Image
              sizes="179.2px"
              src={post.postImage.url}
              fill
              alt={post.postImage.alt}
              className={
                clsx(
                  "border-2 rounded-[3px]",
                  post.id != selectedPostId && "border-primary-1000",
                  post.id == selectedPostId && "border-success"
                )
              } />
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 w-[465px] mt-6 justify-between">
        <blockquote>
          {showedPosts.length > 0 && (
            showedPosts[showedPosts.length - 3].postImage.alt
          )}
        </blockquote>
        <span className="flex gap-2.5 items-center justify-end">
          <Arrow onClick={() => setLastShowedPostIndex(lastShowedPostIndex - 1)}>
            <Arrow.Left />
          </Arrow>
          <Arrow onClick={() => setLastShowedPostIndex(lastShowedPostIndex + 1)}>
            <Arrow.Right />
          </Arrow>
        </span>
      </div>
    </span>
  );
}