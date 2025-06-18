// "use client";

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { ScrollToPlugin } from "gsap/ScrollToPlugin";
// import Image from "next/image";

// import sky from "@/public/assets/sky.jpg";
// import cloud1 from "@/public/assets/cloud1.png";
// import cloud2 from "@/public/assets/cloud2.webp";
// import cloud3 from "@/public/assets/cloud3 (1).png";

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// export default function Hero() {
//   const containerRef = useRef(null);
//   const skyRef = useRef(null);
//   const cloud1Ref = useRef(null);
//   const cloud2Ref = useRef(null);
//   const cloud3Ref = useRef(null);
//   const textRef = useRef(null);
//   const overlayRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top top",
//           end: "bottom bottom",
//           scrub: 1,
//         },
//       });

//       // Animate parallax movement
//       tl.to(skyRef.current, { y: -100 }, 0)
//         .to(cloud1Ref.current, { y: -400 }, 0)
//         .to(cloud2Ref.current, { y: -300 }, 0)
//         .to(cloud3Ref.current, { y: -200 }, 0)
//         .to(textRef.current, { opacity: 0, y: -100 }, 1)
//         .to(overlayRef.current, { y: -300 }, 0) // Move the white overlay up like clouds
//         .to(overlayRef.current, { backgroundColor: "#ffffff" }, 1.2);
//     }, containerRef);

//     return () => ctx.revert();
//   }, []);

//   const scrollToNextSection = () => {
//     gsap.to(window, {
//       scrollTo: { y: window.innerHeight },
//       duration: 1,
//       ease: "power2.inOut",
//     });
//   };

//   return (
//     <div ref={containerRef} className="relative z-0 h-[200vh]">
//       {/* Sticky Hero Section */}
//       <section className="sticky top-0 h-screen w-full overflow-hidden">
//         {/* Sky background */}
//         <div ref={skyRef} className="absolute inset-0 z-0">
//           <Image
//             src={sky}
//             alt="Sky"
//             fill
//             priority
//             className="object-cover pointer-events-none"
//           />
//         </div>

//         {/* Cloud layers */}
//         <div
//           ref={cloud1Ref}
//           className="absolute top-[20%] left-0 right-0 z-20 pointer-events-none"
//         >
//           <Image
//             src={cloud1}
//             alt="Cloud 1"
//             width={1600}
//             height={800}
//             className="mx-auto w-full h-auto object-contain"
//           />
//         </div>
//         <div
//           ref={cloud2Ref}
//           className="absolute top-[40%] left-0 right-0 z-15 pointer-events-none"
//         >
//           <Image
//             src={cloud2}
//             alt="Cloud 2"
//             width={1600}
//             height={800}
//             className="mx-auto w-full h-auto object-contain"
//           />
//         </div>
//         <div
//           ref={cloud3Ref}
//           className="absolute top-[60%] left-0 right-0 z-10 pointer-events-none"
//         >
//           <Image
//             src={cloud3}
//             alt="Cloud 3"
//             width={1600}
//             height={800}
//             className="mx-auto w-full h-auto object-contain"
//           />
//         </div>

//         {/* Text content */}
//         <div
//           ref={textRef}
//           className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-4"
//         >
//           <h1 className="text-5xl md:text-7xl font-bold uppercase tracking-wide mb-4 drop-shadow-lg">
//             EXPLORE
//           </h1>
//           <p className="text-2xl md:text-3xl mb-6 drop-shadow">FURTHER</p>
//           <button
//             onClick={scrollToNextSection}
//             className="px-6 py-3 border border-white hover:bg-white hover:text-black transition"
//           >
//             Discover
//           </button>
//         </div>

//         {/* White parallax overlay */}
//         <div
//           ref={overlayRef}
//           className="absolute inset-0 z-25 bg-transparent transition-colors duration-1000"
//         />

//         {/* Bottom gradient fade to white */}
//         <div className="absolute bottom-0 h-48 w-full bg-gradient-to-b from-transparent to-white z-[35] pointer-events-none" />
//       </section>
//     </div>
//   );
// }
