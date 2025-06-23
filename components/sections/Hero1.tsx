// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import Layout2 from "./Herocontent";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// export default function ParallaxScene() {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap
//         .timeline({
//           scrollTrigger: {
//             trigger: ".scrollDist",
//             start: "top top",
//             end: "bottom bottom",
//             scrub: 1,
//           },
//         })
//         .fromTo(".sky", { y: 0 }, { y: -200 }, 0)
//         .fromTo(".cloud1", { y: 100 }, { y: -800 }, 0)
//         .fromTo(".cloud2", { y: -150 }, { y: -500 }, 0)
//         .fromTo(".cloud3", { y: -50 }, { y: -650 }, 0)
//         .fromTo(".mountBg", { y: -10 }, { y: -100 }, 0)
//         .fromTo(".mountMg", { y: -30 }, { y: -250 }, 0)
//         .fromTo(".mountFg", { y: -50 }, { y: -600 }, 0);

//       const arrowBtn = document.querySelector("#arrow-btn");

//       if (arrowBtn) {
//         arrowBtn.addEventListener("mouseenter", () => {
//           gsap.to(".arrow", {
//             y: 10,
//             duration: 0.8,
//             ease: "back.inOut(3)",
//             overwrite: "auto",
//           });
//         });

//         arrowBtn.addEventListener("mouseleave", () => {
//           gsap.to(".arrow", {
//             y: 0,
//             duration: 0.5,
//             ease: "power3.out",
//             overwrite: "auto",
//           });
//         });

//         arrowBtn.addEventListener("click", () => {
//           gsap.to(window, {
//             scrollTo: window.innerHeight,
//             duration: 1.2,
//             ease: "power2.inOut",
//           });
//         });
//       }
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div ref={containerRef} className="relative min-h-screen w-full">
//       {/* This gives the section 200vh scroll length */}
//       <div className="scrollDist  h-[120vh] w-full" />

//       {/* The parallax scene sits here */}
//       <div className="absolute inset-0 w-full h-full z-10">
//         <svg
//           viewBox="0 150 1200 800"
//           xmlns="http://www.w3.org/2000/svg"
//           className="w-full h-full block md:h-full md:object-cover object-contain"
//           preserveAspectRatio="xMidYMid slice"
//         >
//           <mask id="m">
//             <g className="cloud1">
//               <rect fill="#fff" width="100%" height="801" y="799" />
//               <image
//                 xlinkHref="https://assets.codepen.io/721952/cloud1Mask.jpg"
//                 width="1200"
//                 height="800"
//               />
//             </g>
//           </mask>

//           {/* Background and layers */}
//           <image
//             className="sky"
//             xlinkHref="https://assets.codepen.io/721952/sky.jpg"
//             width="1200"
//             height="800"
//           />
//           <image
//             className="mountBg"
//             xlinkHref="https://assets.codepen.io/721952/mountBg.png"
//             width="1200"
//             height="1050"
//           />
//           <image
//             className="mountMg"
//             xlinkHref="https://assets.codepen.io/721952/mountMg.png"
//             width="1200"
//             height="900"
//           />
//           <image
//             className="cloud2"
//             xlinkHref="https://assets.codepen.io/721952/cloud2.png"
//             width="1200"
//             height="800"
//           />
//           <image
//             className="mountFg"
//             xlinkHref="https://assets.codepen.io/721952/mountFg.png"
//             width="1200"
//             height="1000"
//           />
//           <image
//             className="cloud1"
//             xlinkHref="https://assets.codepen.io/721952/cloud1.png"
//             width="1200"
//             height="1500"
//           />
//           <image
//             className="cloud3"
//             xlinkHref="https://assets.codepen.io/721952/cloud3.png"
//             width="1200"
//             height="1500"
//           />

//           {/* Heading */}
//           <text
//             x="50%"
//             y="40%"
//             textAnchor="middle"
//             fill="#fff"
//             style={{
//               fontSize: "clamp(24px, 6vw, 60px)",
//               fontFamily: "'Montserrat', sans-serif",
//               fontWeight: 900,
//             }}
//           >
//             INSIGHT
//           </text>

//           {/* Masked call-to-action */}
//           <g mask="url(#m)">
//             <rect fill="#FFF" width="100%" height="100%" />
//             <text
//               x="50%"
//               y="45%"
//               textAnchor="middle"
//               fill="#162a43"
//               style={{
//                 // fontSize: "52px",
//                 fontSize: "clamp(24px, 5vw, 50px)",
//                 fontFamily: "'Montserrat', sans-serif",
//                 fontWeight: 900,
//               }}
//             >
//               <tspan x="50%" dy="0.4em">
//                 Achieve your
//               </tspan>
//               <tspan x="50%" dy="1.3em">
//                 global study
//               </tspan>
//               <tspan x="50%" dy="1.3em">
//                 dreams with us
//               </tspan>
//             </text>
//           </g>

//           {/* Invisible click area for scroll button */}
//           {/* <rect
//             id="arrow-btn"
//             width="100"
//             height="100"
//             opacity="0"
//             x="550"
//             y="100"
//             style={{ cursor: "pointer" }}
//           /> */}
//         </svg>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";

export default function VideoHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const videoSrc = isMobile ? "/videos/heromobile.mp4" : "/videos/heropc.mp4";

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={videoSrc}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}

// import React, { useEffect } from "react";

// const ParallaxEffect = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const parent = document.getElementById("parallax-container");
//       if (!parent) return;
//       const children = parent.getElementsByClassName("parallax-layer");
//       for (let i = 0; i < children.length; i++) {
//         children[i].style.transform = `translateY(-${
//           (window.pageYOffset * i) / children.length
//         }px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const layers = ["SkyBG", "Clouds1", "Clouds2", "Clouds3", "Moon", "Hill"].map(
//     (img, index) => (
//       <div
//         key={index}
//         className="parallax-layer absolute top-0 left-0 h-full w-full bg-center bg-cover"
//         style={{
//           zIndex: index,
//           backgroundImage: `url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/${img}.png)`,
//         }}
//       ></div>
//     )
//   );

//   return (
//     <section className="relative h-[750px] overflow-hidden">
//       <div
//         id="parallax-container"
//         className="absolute inset-0 pointer-events-none"
//       >
//         {layers}
//       </div>

//       {/* Foreground content */}
//       <div className="relative  z-50 h-full flex flex-col items-center justify-center bg-opacity-80 text-white text-center px-4">
//         <h1 className="text-[64px] md:text-[100px] font-serif">
//           Parallax Effect
//         </h1>
//         <div className="mt-6 max-w-2xl text-[18px] font-sans">
//           <p>
//             The parallax code is from Collin Delphia's CodePen{" "}
//             <a
//               className="text-blue-400 underline"
//               href="https://codepen.io/Kikoku/pen/PWyyVg"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               here
//             </a>
//             .
//           </p>
//           <p className="mt-4">
//             I created the artwork in Adobe Illustrator based on the Animal
//             Silhouette Moonlight Vector Illustration by tutvid{" "}
//             <a
//               className="text-blue-400 underline"
//               href="https://www.youtube.com/watch?v=RtnCn65MdN0"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               here
//             </a>
//             .
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ParallaxEffect;

// import React, { useEffect } from "react";

// const ParallaxEffect = () => {
//   useEffect(() => {
//     const handleScroll = () => {
//       const parent = document.getElementById("parallax-container");
//       if (!parent) return;
//       const children = parent.getElementsByClassName("parallax-layer");
//       for (let i = 0; i < children.length; i++) {
//         children[i].style.transform = `translateY(-${
//           (window.pageYOffset * i) / children.length
//         }px)`;
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const layers = ["SkyBG", "Clouds1", "Clouds2", "Clouds3", "Moon", "Hill"].map(
//     (img, index) => (
//       <div
//         key={index}
//         className="parallax-layer absolute w-full h-full left-0 top-0 bg-no-repeat bg-cover bg-center"
//         style={{
//           zIndex: index,
//           backgroundImage: `url(https://cdn2.hubspot.net/hubfs/1951013/Parallax/${img}.png)`,
//           backgroundSize: img === "Hill" ? "cover" : "100% auto",
//           backgroundPosition: img === "Hill" ? "bottom" : "center",
//         }}
//       ></div>
//     )
//   );

//   return (
//     <>
//       {/* Parallax section */}
//       <section className="relative h-[750px] overflow-hidden">
//         <div
//           id="parallax-container"
//           className="absolute inset-0 pointer-events-none"
//         >
//           {layers}
//         </div>

//         {/* Foreground content */}
//         <div className="relative z-50 h-full flex flex-col items-center justify-center bg-opacity-80 text-white text-center px-4">
//           <h1 className="text-[64px] md:text-[100px] font-serif">
//             Parallax Effect
//           </h1>
//           <div className="mt-6 max-w-2xl text-[18px] font-sans">
//             <p>
//               The parallax code is from Collin Delphia's CodePen{" "}
//               <a
//                 className="text-blue-400 underline"
//                 href="https://codepen.io/Kikoku/pen/PWyyVg"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 here
//               </a>
//               .
//             </p>
//             <p className="mt-4">
//               I created the artwork in Adobe Illustrator based on the Animal
//               Silhouette Moonlight Vector Illustration by tutvid{" "}
//               <a
//                 className="text-blue-400 underline"
//                 href="https://www.youtube.com/watch?v=RtnCn65MdN0"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 here
//               </a>
//               .
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Section below the SVG/plain */}
//       {/* <section className="relative z-10 bg-[#1a1a1a] text-white text-center py-20">
//         <h2 className="text-4xl font-bold mb-4">Welcome to the Plain</h2>
//         <p className="text-lg max-w-xl mx-auto">
//           This is a sample section below the hill. You can add more content
//           here.
//         </p>
//       </section> */}
//     </>
//   );
// };

// export default ParallaxEffect;
