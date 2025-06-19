// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// import herobg from "@/public/assets/hero1.webp";
// import logo from "@/public/assets/logo.png"; // Use the same one from the original demo

// gsap.registerPlugin(ScrollTrigger);

// export default function Hero() {
//   const cloudRef = useRef(null);

//   useEffect(() => {
//     // Cloud scroll upward effect
//     gsap.to(cloudRef.current, {
//       y: -200, // move cloud up
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".scroll-space", // anything with height to trigger scroll
//         start: "top top",
//         end: "bottom bottom",
//         scrub: true,
//       },
//     });
//   }, []);

//   return (
//     <>
//       {/* Scroll space to enable scroll-based animation */}
//       <div className="scroll-space h-[200vh] bg-transparent relative z-0">
//         <section className="sticky top-0 h-screen w-full overflow-hidden">
//           {/* Background Image */}
//           <Image
//             src={herobg}
//             alt="Background"
//             fill
//             priority
//             className="object-cover z-0"
//           />

//           {/* Cloud Image that moves */}
//           <div
//             ref={cloudRef}
//             className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[300px] z-10 pointer-events-none"
//           >
//             <Image
//               src={logo}
//               alt="Cloud Parallax"
//               width={300}
//               height={150}
//               className="object-contain opacity-90"
//             />
//           </div>

//           {/* Content Layer */}
//           <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white text-center px-4">
//             <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-wide mb-4">
//               INSIGHT
//             </h1>
//             <p className="text-xl font-medium md:text-2xl mb-8 max-w-2xl">
//               Achieve Your Abroad study{" "}
//               <span className="text-primary">Dreams with Us</span>
//             </p>
//             <button className="px-6 py-3 border border-white hover:bg-white hover:text-black transition">
//               Discover
//             </button>
//           </div>

//           {/* Overlay */}
//           <div className="absolute inset-0 bg-black/40 z-10" />
//         </section>
//       </div>
//     </>
//   );
// }

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function ParallaxScene() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: ".scrollDist",
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        })
        .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
        .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
        .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
        .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
        .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
        .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
        .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

      const arrowBtn = document.querySelector("#arrow-btn");

      if (arrowBtn) {
        arrowBtn.addEventListener("mouseenter", () => {
          gsap.to(".arrow", {
            y: 10,
            duration: 0.8,
            ease: "back.inOut(3)",
            overwrite: "auto",
          });
        });

        arrowBtn.addEventListener("mouseleave", () => {
          gsap.to(".arrow", {
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            overwrite: "auto",
          });
        });

        arrowBtn.addEventListener("click", () => {
          gsap.to(window, {
            scrollTo: window.innerHeight,
            duration: 1.2,
            ease: "power2.inOut",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen w-full">
      {/* This gives the section 200vh scroll length */}
      <div className="scrollDist h-[200vh]" />

      {/* The parallax scene sits here */}
      <div className="absolute inset-0 w-full h-full z-10">
        <svg
          viewBox="0 0 1200 800"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <mask id="m">
            <g className="cloud1">
              <rect fill="#fff" width="100%" height="801" y="799" />
              <image
                xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
                width="1200"
                height="800"
              />
            </g>
          </mask>

          {/* Background and layers */}
          <image
            className="sky"
            xlinkHref="https://assets.codepen.io/721952/sky.jpg"
            width="1200"
            height="590"
          />
          <image
            className="mountBg"
            xlinkHref="https://assets.codepen.io/721952/mountBg.png"
            width="1200"
            height="800"
          />
          <image
            className="mountMg"
            xlinkHref="https://assets.codepen.io/721952/mountMg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud2"
            xlinkHref="https://assets.codepen.io/721952/cloud2.png"
            width="1200"
            height="800"
          />
          <image
            className="mountFg"
            xlinkHref="https://assets.codepen.io/721952/mountFg.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud1"
            xlinkHref="https://assets.codepen.io/721952/cloud1.png"
            width="1200"
            height="800"
          />
          <image
            className="cloud3"
            xlinkHref="https://assets.codepen.io/721952/cloud3.png"
            width="1200"
            height="800"
          />

          {/* Heading */}
          <text
            x="50%"
            y="35%"
            textAnchor="middle"
            fill="#fff"
            style={{
              fontSize: "70px",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 900,
            }}
          >
            INSIGHT
          </text>

          {/* Arrow */}
          <polyline
            className="arrow"
            fill="#fff"
            points="599,250 599,289 590,279 590,282 600,292 610,282 610,279 601,289 601,250"
          />

          {/* Masked call-to-action */}
          <g mask="url(#m)">
            <rect fill="#fff" width="100%" height="100%" />
            <text
              x="50%"
              y="40%"
              textAnchor="middle"
              fill="#162a43"
              style={{
                fontSize: "52px",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 900,
              }}
            >
              <tspan x="50%" dy="0">
                Achieve your
              </tspan>
              <tspan x="50%" dy="1.2em">
                global study
              </tspan>
              <tspan x="50%" dy="1.2em">
                dreams with us
              </tspan>
            </text>
          </g>

          {/* Invisible click area for scroll button */}
          <rect
            id="arrow-btn"
            width="100"
            height="100"
            opacity="0"
            x="550"
            y="220"
            style={{ cursor: "pointer" }}
          />
        </svg>
      </div>
    </div>
  );
}
