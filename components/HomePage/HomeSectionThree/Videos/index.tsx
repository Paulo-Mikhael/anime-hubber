"use client";

import IPostImage from "@/interfaces/IPostImage";
import clsx from "clsx";
import { RefObject, useRef, useState } from "react";

type VideoRef = {
  id: number,
  ref: RefObject<HTMLVideoElement | null>,
};

type PostVideo = IPostImage & {
  title: string,
  authorName: string,
};

export default function Videos({ videos }: { videos: PostVideo[] }) {
  // Guarantees that it has at least 5 videos
  if (videos.length < 5) return;

  // Refs array to control the video tags
  const videosRef: VideoRef[] = [
    {
      id: 1,
      ref: useRef<HTMLVideoElement>(null),
    },
    {
      id: 2,
      ref: useRef<HTMLVideoElement>(null),
    },
    {
      id: 3,
      ref: useRef<HTMLVideoElement>(null),
    },
    {
      id: 4,
      ref: useRef<HTMLVideoElement>(null),
    },
    {
      id: 5,
      ref: useRef<HTMLVideoElement>(null),
    },
  ];
  // State to store the currently hovered video
  const [actualSelectedVideo, setActualSelectedVideo] = useState<PostVideo | null>(null);

  return (
    <>
      <span className="grid grid-cols-3 gap-2">
        {
          videosRef.map((videoRef) => (
            <figure
              key={videoRef.id}
              onMouseEnter={() => {
                // Current video looping
                const video = videos[videoRef.id - 1];
                // Sets the current video since it's hovered
                setActualSelectedVideo(video);
                // Plays the video
                videoRef.ref.current?.play();
              }}
              onMouseLeave={() => videoRef.ref.current?.pause()}
              className={
                clsx(
                  "group relative flex items-center justify-center cursor-pointer",
                  {
                    "col-end-3": videoRef.id == 1,
                  }
                )
              }
            >
              <video ref={videoRef.ref} width={200} muted loop>
                <source src={videos[videoRef.id - 1].url} type="video/mp4" />
                Not supported
              </video>
              <span className={
                clsx(
                  "absolute inset-0 border-[3px] bg-black/60 group-hover:border-success group-hover:bg-transparent",
                  {
                    "border-success": actualSelectedVideo?.id == videos[videoRef.id - 1].id,
                    "border-primary-1000": !(actualSelectedVideo?.id == videos[videoRef.id - 1].id)
                  }
                )
              } />
              <img src="/play-button.png" className="absolute size-12 group-hover:hidden" />
            </figure>
          ))
        }
      </span>
      {
        actualSelectedVideo && (
          <figcaption className="flex flex-col items-end mt-6">
            {actualSelectedVideo.alt}
            <b className="text-success text-description">Video from <span className="text-info">{actualSelectedVideo.title}</span> post by <span className="text-info">{actualSelectedVideo.authorName}.</span></b>
          </figcaption>
        )
      }
    </>
  );
}