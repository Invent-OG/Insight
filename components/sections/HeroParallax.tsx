"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";

export default function MultiLayerParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="font-bold flex flex-col justify-center items-center text-white text-7xl md:text-9xl relative z-10"
      >
        <Image
          src={"/assets/logo.png"}
          alt={""}
          height={200}
          width={200}
          className="w-28 h-28  "
        />
        INSIGHT
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url(/image-full.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />

      <div
        className="absolute inset-0 z-20"
        style={{
          backgroundImage: "url(/image-bottom.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      />
      {/* <div
        className="absolute inset-0  z-20"
        style={{
          backgroundImage: "url(/countries.png)",
          backgroundPosition: "bottom",
          backgroundSize: "cover",
        }}
      /> */}
    </div>
  );
}
