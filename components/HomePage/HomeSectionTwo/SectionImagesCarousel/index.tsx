"use client";

import Arrow from "@/components/ui/Arrow";
import Button from "@/components/ui/Button";
import Images from "./Images";
import IPost from "@/interfaces/IPost";
import { useEffect, useState } from "react";

// Type for a post shown in each position on carousel
type CarouselPosts = {
  mostLeftPost: IPost | undefined,
  leftPost: IPost | undefined,
  centerPost: IPost,
  rightPost: IPost | undefined,
  mostRightPost: IPost | undefined,
};

export default function SectionImagesCarousel({ posts }: { posts: IPost[] }) {
  // Post to be diplayed on carousel's center
  const [centerPostIndex, setCenterPostIndex] = useState(0);
  // Posts to be displayed on carousel
  const [carouselPosts, setCarouselPosts] = useState<CarouselPosts>({
    mostLeftPost: posts[0],
    leftPost: posts[1],
    centerPost: posts[2],
    rightPost: posts[3],
    mostRightPost: posts[4],
  });

  // Displays the posts on the carousel when the center post index changes
  useEffect(() => {
    const carouselFivePosts: CarouselPosts = {
      mostLeftPost: posts[centerPostIndex - 2],
      leftPost: posts[centerPostIndex - 1],
      centerPost: posts[centerPostIndex],
      rightPost: posts[centerPostIndex + 1],
      mostRightPost: posts[centerPostIndex + 2],
    };

    setCarouselPosts(carouselFivePosts);
  }, [centerPostIndex]);

  return (
    <span className="flex flex-col items-center justify-center gap-10">
      <Images>
        <Images.MostLeftImage imageUrl={carouselPosts.mostLeftPost?.postImage.url} />
        <Images.LeftImage imageUrl={carouselPosts.leftPost?.postImage.url} />
        <Images.CenterImage centerPostImage={carouselPosts.centerPost} />
        <Images.RightImage imageUrl={carouselPosts.rightPost?.postImage.url} />
        <Images.MostRightImage imageUrl={carouselPosts.mostRightPost?.postImage.url} />
      </Images>
      <div className="flex gap-3">
        <Arrow onClick={() => {
          if (centerPostIndex <= 0) {
            setCenterPostIndex(0);
            return;
          };

          setCenterPostIndex(centerPostIndex - 1);
        }}>
          <Arrow.Left />
        </Arrow>
        <Button variant="ghost">
          Veja Mais
        </Button>
        <Arrow onClick={() => {
          if (centerPostIndex >= posts.length - 1) return;

          setCenterPostIndex(centerPostIndex + 1)
        }}>
          <Arrow.Right />
        </Arrow>
      </div>
    </span>
  );
}