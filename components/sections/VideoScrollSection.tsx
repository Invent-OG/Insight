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

  const isMobile =
    typeof window !== "undefined" &&
    !window.matchMedia("(min-width: 1024px)").matches;
  const src = isMobile ? "/videos/banner M.mp4" : "/videos/bannerS.mp4";

  return (
    <div ref={sectionRef}>
      {/* <video
        ref={videoRef}
        src={src}
        className="object-cover w-full h-screen opacity-0 lg:transition-all will-change-transform"
        muted
        playsInline
        preload="auto"
      /> */}
      <video
        ref={videoRef}
        className="object-cover w-full h-screen opacity-0 lg:transition-all will-change-transform"
        autoPlay
        muted
        preload="auto"
        playsInline
        disableRemotePlayback
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
