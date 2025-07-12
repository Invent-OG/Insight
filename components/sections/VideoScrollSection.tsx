"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section) return;

    video.pause();
    video.currentTime = 0;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=3000", // controls how long the section stays pinned
      scrub: true,
      pin: true,
      onUpdate: (self) => {
        const progress = self.progress;
        if (video.duration) {
          gsap.to(video, {
            currentTime: video.duration * progress,
            ease: "none",
            overwrite: true,
            duration: 0.1,
          });
        }
      },
    });

    // Optional: Animate opacity
    gsap.to(video, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
        // scrub: true,
      },
      opacity: 1,
      scale: 1,
      duration: 1,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div
      ref={sectionRef}
      className="flex items-center justify-center h-[110vh] bg-black"
    >
      <video
        ref={videoRef}
        src="/videos/banner.mp4"
        className="w-full transition-all opacity-0 will-change-transform"
        muted
        preload="auto"
      />
    </div>
  );
}
