"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import herocontentimage from "@/public/assets/herocontentimage.png";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Layout2 = () => (
  <section className="bg-black text-white py-10 ">
    <div className="container flex flex-col md:flex-row md:space-y-6 items-center px-6 md:px-20 md:py-20 lg:py-16 ">
      {/* Image on left with scroll-triggered animation */}
      <motion.div
        className="w-full md:w-1/2  md:mb-0 md:pr-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        variants={imageVariants}
      >
        <Image
          src={herocontentimage}
          alt="Study Abroad Illustration"
          className="rounded-lg shadow-lg w-full h-auto object-cover "
          priority
        />
      </motion.div>

      {/* Text on right with scroll-triggered staggered animation */}
      <div className="w-full md:w-1/2 space-y-6">
        {/* Heading */}
        <motion.h1
          className="text-3xl md:text-5xl font-bold leading-snug text-center md:text-left  "
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={textVariants}
          transition={{ delay: 0 * 0.3 }}
        >
          Your Global Education Starts Here –{" "}
          <span className="text-primary">We Make It Happen</span>
        </motion.h1>

        {/* Paragraphs */}
        {[
          "Feeling overwhelmed by the idea of studying abroad? You’re not alone — and we get it.",
          "At Insight Educator & Abroad Services, we are more than just study abroad consultants — we're your partners in shaping a brighter future overseas.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-lg text-center md:text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            variants={textVariants}
            transition={{ delay: (index + 1) * 0.3 }}
          >
            {text}
          </motion.p>
        ))}
      </div>
    </div>
  </section>
);

export default Layout2;
