"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CoursesHero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      className="relative flex items-center justify-center min-h-screen px-6 sm:px-12 bg-[#e3eefc] overflow-hidden text-center"
      style={{
        backgroundImage: isMobile
          ? "url('/assets/course/courses and countries page.webp')"
          : "url('/assets/course/courses and countries page.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: isMobile ? "scroll" : "fixed",
      }}
    >
      {/* Glass Background Overlay */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
        >
          Top Courses to <span className="text-primary">Study Abroad</span>
        </motion.h1>

        <div className="h-1 w-20 bg-red-600 mx-auto my-6 rounded-full animate-pulse" />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl sm:text-lg md:text-xl text-gray-900 font-medium italic px-2 sm:px-8"
        >
          Discover the best programs for business, law, technology, and design
          in 12+ countries — tailored to your dreams and goals.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-10 px-6 py-3 bg-primary hover:bg-transparent hover:border hover:text-black hover:border-black text-white font-semibold text-lg rounded-lg transition"
        >
          Explore Programs
        </motion.button>
      </div>
    </section>
  );
}
