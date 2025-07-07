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
// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export function LampDemo() {
//   return (
//     <SVGBackgroundContainer>
//       <motion.h1
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: "easeOut" }}
//         className="text-center text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-pink-500 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg"
//       >
//         Insight Educator <br /> Abroad Services
//       </motion.h1>

//       <motion.p
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 0.4, duration: 1 }}
//         className="mt-6 text-lg text-white/80 text-center max-w-2xl"
//       >
//         Helping students achieve their dreams by providing world-class education
//         consultation.
//       </motion.p>
//     </SVGBackgroundContainer>
//   );
// }

// export const SVGBackgroundContainer = ({
//   children,
//   className,
// }: {
//   children: React.ReactNode;
//   className?: string;
// }) => {
//   return (
//     <div
//       className={cn(
//         "relative min-h-screen w-full bg-black flex flex-col items-center justify-center px-6 overflow-hidden",
//         className
//       )}
//     >
//       {/* SVG Background Pattern */}
//       <svg
//         className="absolute inset-0 w-full h-full z-0 opacity-20"
//         xmlns="http://www.w3.org/2000/svg"
//         preserveAspectRatio="xMidYMid slice"
//         viewBox="0 0 100 100"
//       >
//         <defs>
//           <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
//             <stop
//               offset="0%"
//               style={{ stopColor: "#ec4899", stopOpacity: 1 }}
//             />
//             <stop
//               offset="100%"
//               style={{ stopColor: "#facc15", stopOpacity: 1 }}
//             />
//           </linearGradient>
//         </defs>
//         <circle cx="20" cy="20" r="10" fill="url(#grad1)" />
//         <circle cx="80" cy="80" r="10" fill="url(#grad1)" />
//         <circle cx="50" cy="50" r="8" fill="url(#grad1)" />
//         <circle cx="70" cy="30" r="5" fill="url(#grad1)" />
//         <circle cx="30" cy="70" r="5" fill="url(#grad1)" />
//       </svg>

//       {/* Subtle Background Blur Glow */}
//       <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-yellow-400 to-purple-500 opacity-10 blur-3xl z-0" />

//       {/* Content */}
//       <div className="relative z-10 text-white text-center">{children}</div>
//     </div>
//   );
// };
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";

const IMAGES = [
  "https://images.pexels.com/photos/30922300/pexels-photo-30922300.jpeg",
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
];

export function LampDemo() {
  const [current, setCurrent] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      anchorPlacement: "top-bottom",
    });
  }, []);

  return (
    <DiagonalHero>
      {/* Left Side Content */}
      <div className="z-10 w-full md:w-1/2 space-y-6 md:space-y-16 px-4 md:px-0">
        <h1
          data-aos="fade-right"
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight text-transparent bg-clip-text text-white drop-shadow-md flex items-center gap-3"
        >
          <span className="inline-block text-4xl sm:text-4xl md:text-5xl  mt-32 md:-mt-10 relative left-2 md:left-4 animate-spin-slow">
            🌍
          </span>

          <span className="mt-40 lg:mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-800  via-red-500 to-blue-600">
            Insight Educator <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800  via-red-500 to-blue-600">
              Abroad Services
            </span>
          </span>
        </h1>

        <div
          data-aos="flip-left"
          className="max-w-lg mx-auto lg:left-8 text-gray-800 text-base md:text-lg px-6 py-5 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden bg-white/70 backdrop-blur-md"
        >
          <span className="block text-xl mb-2 font-bold text-rose-600 relative z-10">
            🎓 Expert Guidance
          </span>

          <div className="absolute inset-0 bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-200 opacity-30 animate-pulse z-0 rounded-2xl" />
          <div className="relative z-10">
            We provide expert guidance to help students explore global education
            opportunities with clarity, confidence, and care.
          </div>
        </div>
      </div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="w-full md:w-1/2 relative overflow-hidden mt-10 md:mt-0"
      >
        <div className="relative w-full sm:w-[80%] md:w-[70%] max-w-[600px] h-[250px] sm:h-[300px] md:h-[400px] mx-auto rounded-xl overflow-hidden shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={`logo-${current}`}
              className="absolute inset-0 z-20 flex items-center justify-center bg-white/50"
              initial={{ opacity: 1 }}
              animate={{ opacity: 0 }}
              exit={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img
                src="/assets/logo.png"
                alt="Logo"
                className="lg:w-60 lg:h-60 w-24 h-24 opacity-40 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <motion.img
              key={IMAGES[current]}
              src={IMAGES[current]}
              alt="Study Abroad"
              className="w-full h-full object-cover absolute top-0 left-0 z-10"
              initial={{ opacity: 0, rotateX: 90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: -90 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      </motion.div>
    </DiagonalHero>
  );
}

export const DiagonalHero = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        `relative bg-gradient-to-tr from-yellow-100 via-pink-100 to-orange-50 min-h-screen text-black flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-20 py-20 overflow-hidden`,
        className
      )}
    >
      {/* Background Zoom */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 bg-fixed"
        style={{
          backgroundImage: "url('/assets/aboutpage.webp')",
          backgroundPositionY: "20%",
          backgroundPositionX: "50%",
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: [1.1, 1.15, 1.1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 backdrop-brightness-100" />
      </motion.div>

      {/* Floating Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-100px] right-[-60px] w-[250px] h-[250px] bg-yellow-300 rounded-full opacity-30 blur-3xl animate-float hidden md:block" />
        <div className="absolute bottom-[-80px] left-[-60px] w-[220px] h-[220px] bg-pink-400 rounded-full opacity-30 blur-2xl animate-float-slow hidden md:block" />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {children}
      </div>
    </section>
  );
};

