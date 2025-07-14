"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function VideoScrollSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [src, setSrc] = useState("");

  useEffect(() => {
    const isMobile = window.innerWidth < 1024;
    setSrc(isMobile ? "/videos/banner M.mp4" : "/videos/bannerS.mp4");

    const video = videoRef.current;
    const section = sectionRef.current;

    if (!video || !section || !src) return;

    video.pause();
    video.currentTime = 0;

    ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "+=3000",
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

    gsap.to(video, {
      scrollTrigger: {
        trigger: section,
        start: "top center",
        end: "bottom center",
      },
      opacity: 1,
      scale: 1,
      duration: 1,
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [src]);

  return (
    <div ref={sectionRef} className="relative">
      {src && (
        <video
          ref={videoRef}
          className="object-cover w-full h-screen lg:transition-all will-change-transform"
          autoPlay
          muted
          playsInline
          preload="metadata"
          poster="/images/banner-poster.jpg"
          disableRemotePlayback
        >
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
