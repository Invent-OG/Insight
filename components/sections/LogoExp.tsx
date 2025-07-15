"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function LogoExp() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const blackRef = useRef(null);
  const whiteRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Logo zoom-in and pin
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: true,
          },
        }
      );

      // Background transition to dark
      gsap.to(sectionRef.current, {
        backgroundColor: "#1a1a1a",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Slide white section over black section
      gsap.fromTo(
        whiteRef.current,
        { yPercent: 100 },
        {
          yPercent: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: blackRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      {/* Logo Zoom Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden"
      >
        <div ref={imageRef} className="z-10">
          <Image
            alt="logoexplaining"
            src="/assets/whitelogo.png"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </section>

      {/* Black + White Scroll Section */}
      <section
        ref={blackRef}
        className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Black Content */}
        <div className="max-w-3xl text-lg leading-8 z-10 px-6">
          <h2 className="text-3xl font-semibold mb-6 text-center">
            More About the Logo
          </h2>
          <p className="text-center">
            Our logo symbolizes strength, unity, and forward-thinking
            innovation. The curved elements represent a global presence and
            movement, while the sharp points denote direction and growth.
          </p>
        </div>

        {/* White Section slides over */}
        <div
          ref={whiteRef}
          className="absolute top-0 left-0 w-full h-full bg-white text-black flex items-center justify-center z-20"
        >
          <div className="max-w-3xl text-lg leading-8 px-6">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              Our Mission
            </h2>
            <p className="text-center">
              We empower students and professionals with the knowledge, tools,
              and guidance they need to succeed on the global stage. From
              education consulting to international partnerships, our team
              drives success through innovation and integrity.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogoExp;
