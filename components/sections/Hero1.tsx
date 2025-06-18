"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import herobg from "@/public/assets/hero1.webp";
import logo from "@/public/assets/logo.png"; // Use the same one from the original demo

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const cloudRef = useRef(null);

  useEffect(() => {
    // Cloud scroll upward effect
    gsap.to(cloudRef.current, {
      y: -200, // move cloud up
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-space", // anything with height to trigger scroll
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return (
    <>
      {/* Scroll space to enable scroll-based animation */}
      <div className="scroll-space h-[200vh] bg-transparent relative z-0">
        <section className="sticky top-0 h-screen w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src={herobg}
            alt="Background"
            fill
            priority
            className="object-cover z-0"
          />

          {/* Cloud Image that moves */}
          <div
            ref={cloudRef}
            className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[300px] z-10 pointer-events-none"
          >
            <Image
              src={logo}
              alt="Cloud Parallax"
              width={300}
              height={150}
              className="object-contain opacity-90"
            />
          </div>

          {/* Content Layer */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
              INSIGHT
            </h1>
            <p className="text-xl font-medium md:text-2xl mb-8 max-w-2xl">
              Achieve Your Abroad study{" "}
              <span className="text-primary">Dreams with Us</span>
            </p>
            <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">
              Discover
            </button>
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </section>
      </div>
    </>
  );
}
