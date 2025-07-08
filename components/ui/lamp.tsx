// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export function LampDemo() {
//   return (
//     <LampContainer>
//       <motion.h1
//         initial={{ opacity: 0.5, y: 100 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{
//           delay: 0.3,
//           duration: 0.8,
//           ease: "easeInOut",
//         }}
//         className="mt-8 bg-gradient-to-br from-red-100 to-red-500 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
//       >
//         Insight Educator <br /> Abroad Services
//       </motion.h1>
//     </LampContainer>
//   );
// }

// export const LampContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0",
//         className
//       )}
//     >
//       <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0 ">
//         {/* LEFT CONIC */}
//         <motion.div
//           initial={{ opacity: 0.5, width: "12rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto right-1/2 h-56 overflow-visible w-[12rem] sm:w-[30rem] bg-gradient-conic from-red-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
//         >
//           <div className="absolute  w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//           <div className="absolute  w-40 h-[100%] left-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
//         </motion.div>

//         {/* RIGHT CONIC */}
//         <motion.div
//           initial={{ opacity: 0.5, width: "12rem" }}
//           whileInView={{ opacity: 1, width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           style={{
//             backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
//           }}
//           className="absolute inset-auto left-1/2 h-56 w-[12rem] sm:w-[30rem] bg-gradient-conic from-transparent via-transparent to-red-500 text-white [--conic-position:from_290deg_at_center_top]"
//         >
//           <div className="absolute  w-40 h-[100%] right-0 bg-black  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
//           <div className="absolute  w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
//         </motion.div>

//         {/* CENTER EFFECTS */}
//         <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
//         <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>

//         {/* RED GLOW CENTER */}
//         <div className="absolute inset-auto z-50 h-36 w-[20rem] sm:w-[28rem] -translate-y-1/2 rounded-full bg-red-500 opacity-50 blur-3xl"></div>

//         <motion.div
//           initial={{ width: "8rem" }}
//           whileInView={{ width: "16rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-red-400 blur-2xl"
//         ></motion.div>

//         <motion.div
//           initial={{ width: "12rem" }}
//           whileInView={{ width: "30rem" }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="absolute inset-auto z-50 h-0.5 w-[12rem] sm:w-[30rem] -translate-y-[7rem] bg-red-400"
//         ></motion.div>

//         <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black "></div>
//       </div>

//       <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
//         {children}
//       </div>
//     </div>
//   );
// };
"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export function LampDemo() {
  const router = useRouter();
  const sectionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Scroll animations
      gsap.from(".lamp-text", {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lamp-text",
          start: "top 80%",
        },
      });

      gsap.from(".lamp-image", {
        opacity: 0,
        y: 60,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".lamp-image",
          start: "top 80%",
        },
      });

      // Floating shapes animation
      gsap.to(".float1", {
        y: 20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float2", {
        x: 15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".float3", {
        y: -20,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen bg-[hsl(210,47%,23%)] flex items-center px-4 py-12 overflow-hidden"
    >
      {/* === Floating SVGs === */}
      <div className="absolute top-24 -left-4 md:top-6 md:left-6 lg:top-4 lg:-left-10 lg:bg-[hsl(210,47%,23%)] p-2 rounded-md float1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)]"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>
      <div className="absolute top-24 -left-4 md:top-6 md:left-6 lg:top-20 lg:-left-10 lg:bg-[hsl(210,47%,23%)] p-2 rounded-md float2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)]"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>
      <div className="absolute top-1/2 left-56 md:top-6 md:left-6 lg:top-10 lg:right-10 lg:left-auto lg:bg-[hsl(210,47%,23%)] p-2 rounded-md float3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          className="w-40 h-40 sm:w-32 sm:h-32 md:w-48 md:h-48 lg:w-60 lg:h-60 fill-[hsl(210,46%,27%)] rotate-180 opacity-40"
        >
          <polygon points="0,0 100,50 0,100" />
        </svg>
      </div>

      {/* === Content === */}
      <div className="relative z-10 max-w-7xl w-full mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center text-center md:text-left">
        {/* === Text === */}
        <div className="text-white space-y-6 lamp-text">
          <h1 className="text-4xl md:text-5xl font-bold md:font-extrabold leading-tight">
            <span className=" px-2 py-1 rounded text-primary inline-block">
              Insight Educator
            </span>{" "}
            Abroad Services
          </h1>
          <p className="text-base text-white/90">
            We provide expert guidance to help students explore global education
            opportunities with clarity, confidence, and care.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={() => router.push("/services")}
              className="px-6 py-3 bg-white text-primary font-semibold rounded hover:bg-gray-300 transition"
            >
              Explore Our Services
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="px-6 py-3 bg-primary text-white font-semibold rounded hover:bg-red-700 transition"
            >
              Get Free Consultation
            </button>
          </div>
        </div>

        {/* === Image === */}
        <div className="w-full h-64 sm:h-80 md:h-96 lamp-image">
          <img
            src="/assets/about/aboutpage.webp"
            alt="Study Abroad"
            className="w-full h-full object-cover shadow-lg"
          />
        </div>
      </div>

      {/* === Wave Background === */}
      <div className="absolute bottom-0 right-0 w-full z-0">
        <svg viewBox="0 0 1440 320">
          <path
            fill="#ffffff10"
            d="M0,160L80,160C160,160,320,160,480,154.7C640,149,800,139,960,149.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
}

