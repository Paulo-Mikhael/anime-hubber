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
  // Posts displayed in carousel
  const [showedPosts, setShowedPosts] = useState<IPost[]>([]);
  // Last showed post's index
  const [lastShowedPostIndex, setLastShowedPostIndex] = useState<number>(2);
  // First post in carousel's id
  const [selectedPostId, setSelectedPostId] = useState<number>(1);

  // Executes when the last showed post is changed
  useEffect(() => {
    // It doesn't let the last showed post's index be lower than two
    if (lastShowedPostIndex < 2) {
      setLastShowedPostIndex(2);
      return
    };
    // It doesn't let the last showed post's index be greater than `posts` array's lenght
    if (lastShowedPostIndex >= posts.length) {
      setLastShowedPostIndex(posts.length - 1);
      return;
    };

    // Takes the last showed post's index and adds the post with that index and the previous two posts to the `showedPosts` array
    setShowedPosts([
      posts[lastShowedPostIndex - 2],
      posts[lastShowedPostIndex - 1],
      posts[lastShowedPostIndex]
    ]);

    // Sets the first showed post's id as the select post's id
    setSelectedPostId(posts[lastShowedPostIndex - 2].id);
  }, [lastShowedPostIndex]);

  // Executes once
  useEffect(() => {
    // It only executes if the `showedPost` array is empty
    if (showedPosts.length > 0) return;

    // Sets the first posts to be shown as the three first items in `posts` array
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