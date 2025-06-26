// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import React, { useRef } from "react";
// import moon from "@/public/assets/heroimages/moon.webp"
// import plane from "@/public/assets/heroimages/Plane.webp"
// import cloud from "@/public/assets/heroimages/cloud.webp"
// import light from "@/public/assets/heroimages/light.webp"
// import globe from "@/public/assets/heroimages/underglobe.webp"

// export default function MultiLayerParallax() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });
//   const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

//   const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

//   return (
//     <div
//       ref={ref}
//       className="w-full h-screen overflow-hidden relative grid place-items-center"
//     >
//       <motion.h1
//         style={{ y: textY }}
//         className="font-bold flex flex-col justify-center items-center text-white text-7xl md:text-9xl relative z-10"
//       >
//         <Image
//           src={"/assets/logo.png"}
//           alt={""}
//           height={200}
//           width={200}
//           className="w-28 h-28  "
//         />
//         INSIGHT
//       </motion.h1>

//       <motion.div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url(/image-full.png)",
//           backgroundPosition: "bottom",
//           backgroundSize: "cover",
//           y: backgroundY,
//         }}
//       />

//       <div
//         className="absolute inset-0 z-20"
//         style={{
//           backgroundImage: "url(/image-bottom.png)",
//           backgroundPosition: "bottom",
//           backgroundSize: "cover",
//         }}
//       />
//       {/* <div
//         className="absolute inset-0  z-20"
//         style={{
//           backgroundImage: "url(/countries.png)",
//           backgroundPosition: "bottom",
//           backgroundSize: "cover",
//         }}
//       /> */}
//     </div>
//   );
// }
// "use client";
// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import React, { useRef } from "react";

// import moon from "@/public/assets/heroimages/moon.webp";
// import plane from "@/public/assets/heroimages/Plane.webp";
// import cloud from "@/public/assets/heroimages/cloud.webp";
// import light from "@/public/assets/heroimages/light.webp";
// import globe from "@/public/assets/heroimages/underglobe.webp";
// import logo from "@/public/assets/logo.png";

// export default function MultiLayerParallax() {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start start", "end start"],
//   });

//   // Parallax positions
//   const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
//   const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
//   const lightY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

//   return (
//     <div ref={ref} className="w-full h-screen overflow-hidden relative">
//       {/* 🌕 1. Moon as the full-screen background */}
//       <div className="absolute inset-0 z-10 h-[120vh]">
//         <Image
//           src={moon}
//           alt="Moon Background"
//           fill
//           priority
//           className="
//       object-cover
//       object-[63%_40%]      /* Mobile: shift focus to left side */
//       lg:object-center /* Desktop: keep centered */
//     "
//         />
//       </div>

//       {/* logo  */}
//       <Image
//         src={logo}
//         alt="Moon Background"
//         priority
//         className="
//     object-cover absolute opacity-15 z-10
//     /* 📱 Mobile size (default) */
//     h-[55vh] w-[100vw] -right-[48%] top-60

//     /* 💻 Desktop size */
//     lg:h-[150vh] lg:w-full lg:-right-[30%] lg:-top-20
//   "
//       />
//       {/* plane  */}
//       <motion.div
//         initial={{ x: "-100%", y: "100%" }}
//         animate={{ x: 0, y: -90 }}
//         transition={{
//           duration: 2.5,
//           ease: [0.25, 1, 0.5, 1], // Smooth "takeoff" feel
//         }}
//         className="absolute inset-0 z-20 flex justify-center items-center bottom-[-10vh] lg:bottom-0"
//       >
//         {/* Inner div handles the scroll-based parallax */}
//         <motion.div style={{ y: planeY }}>
//           <Image
//             src={plane}
//             alt="Plane"
//             className="w-[70vw] h-[70vh] object-contain"
//           />
//         </motion.div>
//       </motion.div>

//       {/* 📝 Center Text Overlay */}
//       <div className="absolute inset-0 flex uppercase flex-col justify-center items-center z-10 pointer-events-none">
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
//           className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-400 to-red-300 bg-clip-text text-transparent text-lg md:text-[2.5rem] text-center"
//         >
//           Beyond borders, better.
//         </motion.p>

//         <motion.h1
//           initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
//           animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
//           transition={{ duration: 1.2, ease: "easeOut" }}
//           className="
//     font-orbitron
//     text-7xl md:text-9xl font-extrabold text-center drop-shadow-lg
//     text-transparent
//     bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
//     from-white via-black to-red-600 bg-clip-text
//     light-sweep
//   "
//           style={{
//             WebkitTextStroke: "0.5px #f8f8f8",
//           }}
//         >
//           Insight
//         </motion.h1>
//       </div>

//       {/* ☁️ 3. Cloud */}
//       <motion.div
//         style={{ y: cloudY }}
//         initial={{
//           x: "-100%",
//           y: "100%",
//           scale: 1.5,
//           opacity: 0,
//         }}
//         animate={{
//           x: ["-100%", "100%"], // Left ➔ Center ➔ Right
//           y: ["100%", "0%", "0%"], // Bottom ➔ Center ➔ Stay Center
//           scale: [1.5, 1, 1], // Zoom in ➔ Normal
//           opacity: [0, 2, 1], // Fade in and stay
//         }}
//         transition={{
//           times: [0, 0.6, 1], // 30% of the animation goes from bottom-left to center
//           duration: 24, // Total animation time
//           ease: "easeInOut",
//           repeat: Infinity, // Endless looping
//         }}
//         className="absolute inset-0 z-30 flex justify-center items-center"
//       >
//         <Image
//           src={cloud}
//           alt="Cloud"
//           className="w-full h-auto object-contain"
//         />
//       </motion.div>

//       {/* 💡 4. Light */}
//       <motion.div
//         style={{ y: lightY }}
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 2.5, ease: "easeOut" }}
//         className="absolute inset-0 lg:mt-0 mt-20 w-full z-20 flex justify-center items-center"
//       >
//         <Image src={light} alt="Light" className="w-full object-cover" />
//       </motion.div>

//       {/* 🌍 5. Under Globe (at the bottom) */}
//       <motion.div
//         initial={{ y: 100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 2.5, ease: "easeOut" }}
//         className="absolute inset-0 flex justify-center items-end z-30"
//       >
//         <Image
//           src={globe}
//           alt="Globe"
//           className="w-full absolute bottom-0 h-full object-cover"
//         />
//       </motion.div>

//       {/* </div> */}
//     </div>
//   );
// }
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import moon from "@/public/assets/heroimages/moon.webp";
import plane from "@/public/assets/heroimages/Plane.webp";
import cloud from "@/public/assets/heroimages/cloud.webp";
import light from "@/public/assets/heroimages/light.webp";
import globe from "@/public/assets/heroimages/underglobe.webp";
import logo from "@/public/assets/logo.png";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Parallax positions
  const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);
  const cloudY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const lightY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative">
      {/* 🌕 1. Moon as the full-screen background */}
      <div className="absolute inset-0 z-10 h-[120vh]">
        <Image
          src={moon}
          alt="Moon Background"
          fill
          priority
          className="
            object-cover
            object-[63%_40%]      /* Mobile: shift focus to left side */
            lg:object-center      /* Desktop: keep centered */
          "
        />
      </div>

      {/* 🌟 Logo */}
      <Image
        src={logo}
        alt="Moon Background"
        priority
        className="
            object-cover absolute opacity-15 z-10
            /* 📱 Mobile size (default) */
            h-[55vh] w-[100vw] -right-[48%] top-60
            /* 💻 Desktop size */
            lg:h-[150vh] lg:w-full lg:-right-[30%] lg:-top-20
          "
      />

      {/* ✈️ Plane (Highest Z-Index) */}
      <motion.div
        initial={{ x: "-100%", y: "60%" }}
        animate={{ x: 0, y: -80 }}
        transition={{
          duration: 2.5,
          ease: [0.25, 1, 0.5, 1], // Smooth "takeoff" feel
        }}
        className="absolute inset-0 z-10 flex justify-center items-center bottom-[-10vh] lg:bottom-0"
      >
        <motion.div style={{ y: planeY }}>
          <Image
            src={plane}
            alt="Plane"
            className="w-[70vw] h-[70vh] object-contain"
          />
        </motion.div>
      </motion.div>

      {/* 📝 Center Text Overlay (Second Highest) */}
      <motion.div
        style={{ y: textY }}
        className="absolute inset-0 flex uppercase flex-col justify-center items-center z-30 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-400 to-red-300 bg-clip-text text-transparent text-lg md:text-[2.5rem] text-center"
        >
          Beyond borders, better.
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            font-orbitron
            text-7xl md:text-9xl font-extrabold text-center drop-shadow-lg
            text-transparent 
            bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))]
            from-white via-black to-red-600 bg-clip-text
            light-sweep
          "
          style={{
            WebkitTextStroke: "0.5px #f8f8f8",
          }}
        >
          Insight
        </motion.h1>
      </motion.div>

      {/* ☁️ 3. Cloud */}
      <motion.div
        style={{ y: cloudY }}
        initial={{
          x: "-100%",
          y: "100%",
          scale: 1.5,
          opacity: 0,
        }}
        animate={{
          x: ["-100%", "100%"],
          y: ["100%", "0%", "0%"],
          scale: [1.5, 1, 1],
          opacity: [0, 2, 1],
        }}
        transition={{
          times: [0, 0.6, 1], // 30% of the animation goes from bottom-left to center
          duration: 24, // Total animation time
          ease: "easeInOut",
          repeat: Infinity, // Endless looping
        }}
        className="absolute inset-0 z-30 flex justify-center items-center"
      >
        <Image
          src={cloud}
          alt="Cloud"
          className="w-full h-auto object-contain"
        />
      </motion.div>

      {/* 💡 4. Light */}
      <motion.div
        style={{ y: lightY }}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 lg:mt-0 mt-20 w-full z-20 flex justify-center items-center"
      >
        <Image src={light} alt="Light" className="w-full object-cover" />
      </motion.div>

      {/* 🌍 5. Under Globe (at the bottom) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0 flex justify-center items-end z-30"
      >
        <Image
          src={globe}
          alt="Globe"
          className="w-full absolute bottom-0 h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
