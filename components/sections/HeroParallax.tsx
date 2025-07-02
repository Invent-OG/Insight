
"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

import plane from "@/public/assets/heroimages/Plane.webp";
import cloud from "@/public/assets/heroimages/cloud.webp";
import sky from "@/public/assets/heroimages/moon.webp";
import globe1 from "@/public/assets/heroimages/night earth.webp";
import logo from "@/public/assets/logo.png";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Keep same transforms
  const skyY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const logoY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const planeY = useTransform(scrollYProgress, [0, 1], ["0%", "1%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  // Add 'will-change: transform' to motion divs for GPU acceleration hint
  // This helps smooth animation on scroll

  return (
    <div ref={ref} className="w-full h-screen overflow-hidden relative">
      {/* 🌌 Sky Background */}
      <motion.div
        style={{ willChange: "transform", y: skyY }}
        className="absolute inset-0 z-0 h-[120vh]"
        // hint for smoothness
      >
        <Image
          src={sky}
          alt="Sky"
          fill
          priority
          className="object-cover scale-100 object-[63%_40%] lg:object-center transition-transform duration-300"
        />
      </motion.div>
      {/* 🌍 Globe (bottom-focused) */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1, rotate: 360 }}
        transition={{
          y: { duration: 1, ease: "easeOut" },
          opacity: { duration: 0, ease: "easeOut" },
          rotate: { repeat: Infinity, duration: 100, ease: "linear" },
        }}
        className="absolute lg:top-[100%] top-[80%] w-full z-50 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <Image
          src={globe1}
          alt="Bottom Globe"
          priority
          className="w-full scale-[2.30] h-auto"
        />
      </motion.div>

      {/* 🎯 Center Text */}
      <motion.div
        style={{ willChange: "transform", y: textY }}
        className="absolute inset-0 flex uppercase flex-col justify-center items-center z-30 pointer-events-none"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3, ease: "easeOut" }}
          className="bg-gradient-to-r from-red-400 via-white to-red-600 bg-clip-text text-transparent text-lg md:text-[1.8rem] text-center"
        >
          Beyond borders, better.
        </motion.p>

        <motion.h1
          initial={{ y: 30, opacity: 0, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="
            font-orbitron
            text-7xl md:text-8xl font-extrabold text-center drop-shadow-lg
            text-transparent
            bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-black via-red-500 to-white
            bg-clip-text
            light-sweep
          "
        >
          Insight
        </motion.h1>
      </motion.div>
      {/* 🔆 Logo Parallax */}
      <motion.div
        initial={{ y: -300, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <motion.div style={{ y: logoY, willChange: "transform" }}>
          <Image
            src={logo}
            alt="Logo"
            priority
            className="object-cover absolute opacity-20 h-[55vh] w-[100vw] -right-[50%] top-72 lg:h-[150vh] lg:w-full lg:-right-[30.7%] lg:-top-20"
          />
        </motion.div>
      </motion.div>

      {/* ✈️ Plane - Desktop (unchanged) */}
      <motion.div
        initial={{ x: "-100%", y: "60%" }}
        animate={{ x: 0, y: -80 }}
        transition={{ duration: 2.5, ease: [0.25, 1, 0.5, 1] }}
        className="absolute inset-0 z-20 justify-center items-center bottom-[-10vh] lg:bottom-0 hidden lg:flex"
        style={{ willChange: "transform" }}
      >
        <motion.div style={{ y: planeY, willChange: "transform" }}>
          <Image
            src={plane}
            alt="Plane"
            className="w-[70vw] h-[70vh] object-contain"
          />
        </motion.div>
      </motion.div>
      {/* ✈️ Plane - Mobile Only */}
      <motion.div
        initial={{ x: "-250%", y: "60%" }}
        animate={{ x: 0, y: -90 }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
        className="absolute inset-0 z-20 justify-center items-center bottom-[-8vh] flex lg:hidden"
        style={{ willChange: "transform" }}
      >
        <motion.div style={{ y: planeY, willChange: "transform" }}>
          <Image
            src={plane}
            alt="Plane"
            className="w-[85vw] h-[60vh] object-contain"
          />
        </motion.div>
      </motion.div>
      {/* ☁️ Cloud 1 */}
      <motion.div
        initial={{ x: "-100%", y: "50%", scale: 1.5, opacity: 50 }}
        animate={{
          x: ["-20%", "100%"],
          y: ["50%", "50%"],
          scale: [1.5, 1],
          opacity: [0, 1],
        }}
        transition={{
          times: [0, 0.6, 1],
          duration: 18,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-10 flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <Image
          src={cloud}
          alt="Cloud"
          className="w-full h-auto object-contain"
        />
      </motion.div>
      {/* ☁️ Cloud 2 */}
      <motion.div
        initial={{ x: "100%", y: "-40%", scale: 1.5, opacity: 40 }}
        animate={{
          x: ["50%", "-100%"],
          y: ["-40%", "50%"],
          scale: [1.5, 1],
          opacity: [0, 1],
        }}
        transition={{
          times: [0, 0.6, 1],
          duration: 24,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-10 flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <Image
          src={cloud}
          alt="Cloud"
          className="w-full h-auto object-contain"
        />
      </motion.div>
      {/* ☁️ Cloud 3 */}
      <motion.div
        initial={{ x: "-120%", y: "-30%", scale: 1.3, opacity: 30 }}
        animate={{
          x: ["-50%", "100%"],
          y: ["-30%", "0%"],
          scale: [1.3, 1],
          opacity: [0, 1],
        }}
        transition={{
          times: [0, 0.5, 1],
          duration: 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-10 flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <Image
          src={cloud}
          alt="Cloud"
          className="w-full h-auto object-contain"
        />
      </motion.div>
      {/* ☁️ Cloud 4 */}
      <motion.div
        initial={{ x: "100%", y: "50%", scale: 1.2, opacity: 20 }}
        animate={{
          x: ["60%", "-120%"],
          y: ["50%", "-20%"],
          scale: [1.2, 1],
          opacity: [0, 1],
        }}
        transition={{
          times: [0, 0.4, 1],
          duration: 14,
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="absolute inset-0 z-10 flex justify-center items-center"
        style={{ willChange: "transform" }}
      >
        <Image
          src={cloud}
          alt="Cloud"
          className="w-full h-auto object-contain"
        />
      </motion.div>
    </div>
  );
}
