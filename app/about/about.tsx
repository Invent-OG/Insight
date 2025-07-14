"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Roadmap, { RoadmapSection } from "@/components/sections/OurCoreValues";
import OurServicesInfo from "@/components/sections/OurServicesInfo";
import OurTeam from "@/components/sections/OurTeam";
import AboutHero from "@/components/sections/AboutHero";
import LogoExp from "@/components/sections/LogoExp";

export default function AboutPage() {
  useEffect(() => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    if (isMobile) {
      // Disable fixed background on mobile/iPhone
      document.documentElement.style.setProperty("--bg-attachment", "scroll");
      return;
    }

    // On desktop, enable parallax effect by updating background position on scroll
    const handleScroll = () => {
      const scrolled = window.pageYOffset;
      const bg = document.querySelector(".hero");
      if (bg instanceof HTMLElement) {
        bg.style.backgroundPosition = `center ${scrolled * 0.5}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <main className=" text-white min-h-screen relative">
        <div className="relative h-screen w-screen ">
          {/* <LampDemo /> */}
          <AboutHero />
        </div>

        {/* Hero  sub content */}
        <section
          className="hero flex items-center min-h-screen filter brightness-95 bg-center bg-cover px-8 relative overflow-hidden"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/925743/pexels-photo-925743.jpeg')`, // Replace with your preferred texture
            backgroundAttachment: "fixed", // Key for parallax
            backgroundSize: "contain",
            backgroundPosition: "top center",
          }}
        >
          <style jsx>{`
            @media (min-width: 1024px) {
              .hero {
                min-height: 100vh; /* taller parallax for desktop */
              }
            }
          `}</style>

          <motion.div
            className="max-w-6xl flex flex-col md:flex-row gap-12 items-center relative z-10"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.25, when: "beforeChildren" },
              },
            }}
          >
            {/* Left: Image fades + scales */}
            <motion.div
              className="flex-shrink-0 w-full md:w-1/2 flex justify-center"
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 1, ease: "easeOut" },
                },
              }}
            >
              <img
                src="/assets/about/Pathway to international education (about page).webp"
                alt="International education"
                className="object-cover rounded-lg w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 shadow-lg"
              />
            </motion.div>

            {/* Right: Text slides in from left */}
            <motion.div
              className="w-full md:w-1/2 text-white flex flex-col items-start"
              variants={{
                hidden: { opacity: 0, x: 60 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { type: "spring", stiffness: 120, damping: 20 },
                },
              }}
            >
              <div className="lg:text-4xl md:text-4xl text-3xl font-bold mb-6 leading-snug text-left">
                Your pathway to{" "}
                <span className="text-primary text-nowrap">
                  international education
                </span>
              </div>

              <motion.p
                className="text-xl sm:text-lg lg:text-xl text-white leading-relaxed max-w-lg text-left"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                At Insight Educator & Abroad Services, we believe in “Insight” -
                The ability to see beyond the obvious, understand deeply, and
                make informed decisions which is the foundation of success.
                Guided by this principle, we offer comprehensive study abroad
                consultancy services to students in Coimbatore and beyond,
                empowering them to achieve their global education dreams.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Semi-transparent overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-0"></div>
        </section>

        {/* Founder Section */}
        <div className="lg:py-10 py-8">
          <h4 className="uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
            — founder —
          </h4>
          <section className="relative lg:py-20 lg:mt-10 max-w-5xl mx-auto px-6 py-8 flex flex-col-reverse md:flex-row items-center gap-10 bg-white overflow-hidden">
            {/* Background SVG Wave - Light Red (text-red-100) */}

            <div className="absolute lg:bottom-20 bottom-0  left-0 w-full z-0 pointer-events-none">
              <svg
                viewBox="0 0 1440 320"
                className="fill-current text-red-100"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0,288L144,256L288,160L432,192L576,224L720,160L864,96L1008,160L1152,96L1296,160L1440,128L1440,320L1296,320L1152,320L1008,320L864,320L720,320L576,320L432,320L288,320L144,320L0,320Z" />
              </svg>
            </div>

            {/* Content (Left Side) */}
            <motion.blockquote
              initial={{ x: -50, opacity: 0, rotate: -2 }}
              whileInView={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative text-black italic text-lg border-l-4 border-red-600 pl-6 md:w-2/3 z-10"
            >
              “Our founder,{" "}
              <span className="text-red-600 font-semibold not-italic">
                Neshika
              </span>
              , brings a wealth of personal and professional experience to the
              table. Having pursued her education in the UK and being an
              IELTS-certified trainer from Trinity University, she understands
              firsthand the challenges and opportunities international students
              face. Her passion for education and commitment to student success
              drives our team to deliver expert, personalized guidance every
              step of the way.”
              <br />
              <br />
              <span className="hidden md:inline text-red-600 font-semibold not-italic">
                — Founder Neshika
              </span>
            </motion.blockquote>

            {/* Image (Right Side) */}
            <div className="flex flex-col items-center md:items-start md:w-auto z-10">
              <motion.div
                initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
                whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                viewport={{ once: true }}
                className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-red-600/70 shadow-xl flex-shrink-0"
              >
                <Image
                  src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
                  alt="Founder Neshika"
                  width={240}
                  height={240}
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Founder name on mobile */}
              <span className="mt-4 text-red-600 font-semibold not-italic md:hidden">
                — Founder Neshika
              </span>
            </div>
          </section>
        </div>
        {/* Founder Team section  */}
        <>
          <OurTeam />
        </>

        {/* Offerings Section */}
        <section className="relative lg:py-20 lg:mt-14 w-full overflow-x-hidden">
          <OurServicesInfo />
        </section>
        {/* our core values  */}
        <>
          <RoadmapSection />
        </>
        {/* logo explain section   */}
        <>
          <LogoExp />
        </>
      </main>
    </>
  );
}
