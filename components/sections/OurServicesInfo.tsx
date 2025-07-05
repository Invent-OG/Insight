"use client";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useState, useRef } from "react";
import {
  CheckCircle,
  BookOpenCheck,
  Globe,
  School,
  BadgeCheck,
  PlaneTakeoff,
  Home,
  Clock,
  Users,
  Target,
} from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const bulletItems = [
  {
    icon: BookOpenCheck,
    text: "IELTS coaching in Coimbatore by certified professionals",
  },
  { icon: School, text: "Personalized study abroad counselling" },
  {
    icon: Globe,
    text: "Assistance with university applications and admissions",
  },
  {
    icon: BadgeCheck,
    text: "Help with securing scholarships and financial aid",
  },
  { icon: CheckCircle, text: "Complete student visa support and guidance" },
  {
    icon: PlaneTakeoff,
    text: "Flight booking, accommodation, and airport pickup services",
  },
  { icon: Home, text: "Pre-departure and post-arrival support" },
  { icon: Clock, text: "Part- Time Guidance" },
];

const icons = [Globe, School, Users, Target];

const paragraphs = [
  `Whether you're aspiring to study in the UK, USA, Canada, Australia, New Zealand, Ireland, Europe, UAE, Singapore, or Malaysia, we provide end-to-end support to make your journey smooth and stress-free.`,
  `We work with top-ranked universities and a wide range of academic programs, ensuring that your choices align with your career goals and personal preferences. 
    <span class='text-red-600 font-semibold'>We never limit your options—instead, we empower you with choices that truly fit your ambitions.</span>`,
  `At Insight, we pride ourselves on our professional, kind, and transparent approach. We’re always available to answer your questions—big or small—and we actively involve parents in the process to build trust and clarity. Our goal is to provide not just a service, but a life-changing experience.`,
  `Whether you're just beginning to explore your study abroad options or ready to start your application, we’re here to guide you from start to finish. Discover your path to international education with <span class='font-bold text-red-600'>Insight</span> — Coimbatore’s trusted study abroad consultants.`,
];

export default function OurServicesInfo() {
  const [tab, setTab] = useState("about");
  return (
    <section className="relative bg-gradient-to-br from-white via-red-50 to-white py-24 px-6 sm:px-10 lg:px-24 overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] z-0 opacity-10 pointer-events-none">
        <svg
          viewBox="0 0 200 200"
          width="500"
          height="500"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#f87171"
            d="M43.6,-69.4C57.5,-63.9,71.5,-53.6,76.4,-40.3C81.2,-27,76.9,-10.7,70.9,3.3C64.9,17.2,57.2,28.8,47.6,40.5C38,52.3,26.5,64.1,13.1,70.4C-0.3,76.7,-15.6,77.5,-30.6,72.8C-45.7,68.2,-60.6,57.9,-65.3,44.1C-70,30.3,-64.6,13.2,-63.3,-4.6C-61.9,-22.5,-64.7,-41.2,-57.1,-52.2C-49.5,-63.2,-31.5,-66.5,-15.2,-70.3C1.1,-74.2,22.2,-78.9,43.6,-69.4Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto mb-12 text-center">
        <h2 className="text-4xl font-extrabold text-red-600 mb-4">
          Our Services
        </h2>
        <div className="inline-flex bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
          <button
            onClick={() => setTab("about")}
            className={`px-6 py-2 text-sm font-medium transition duration-300 ${
              tab === "about"
                ? "bg-red-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            About Insight
          </button>
          <button
            onClick={() => setTab("services")}
            className={`px-6 py-2 text-sm font-medium transition duration-300 ${
              tab === "services"
                ? "bg-red-600 text-white"
                : "text-gray-700 hover:bg-gray-100"
            }`}
          >
            Our Services
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {tab === "about" ? (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-6xl mx-auto space-y-20"
          >
            {/* Hero Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: false }}
              className="rounded-3xl overflow-hidden shadow-lg mx-auto lg:w-3/5"
            >
              <img
                src="/assets/about/Our services (about page).webp"
                alt="Study Abroad"
                className="w-full h-auto object-cover"
              />
            </motion.div>

            {/* Timeline Layout */}
            <section className="relative max-w-6xl mx-auto px-6 sm:px-10 py-16">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-red-200 z-0" />

              <div className="relative z-10 flex flex-col gap-16">
                {paragraphs.map((text, i) => {
                  const Icon = icons[i];

                  return (
                    <motion.div
                      key={i}
                      className="relative flex items-start gap-6"
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2, duration: 0.6 }}
                      viewport={{ once: false }}
                    >
                      {/* Aligned Dot + Icon */}
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{
                          delay: i * 0.2,
                          duration: 0.5,
                          ease: "easeOut",
                        }}
                        viewport={{ once: false }}
                        className="flex flex-col items-center relative z-10"
                      >
                        <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-md ring-4 ring-white mt-2">
                          <Icon className="w-6 h-6" />
                        </div>
                      </motion.div>

                      {/* Text Card */}
                      <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: i * 0.2 + 0.1,
                          duration: 0.6,
                          ease: "easeOut",
                        }}
                        viewport={{ once: false }}
                        className="bg-white border border-gray-200 shadow-md rounded-2xl p-6 text-[17px] leading-relaxed text-gray-800 w-full"
                        dangerouslySetInnerHTML={{ __html: text }}
                      />
                    </motion.div>
                  );
                })}
              </div>
            </section>
          </motion.div>
        ) : (
          <motion.div
            key="services"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10 px-4"
          >
            {bulletItems.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                custom={i + 1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                whileHover={{ scale: 1.03 }}
                transition={{
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  delay: i * 0.1,
                }}
                className="relative group bg-white/60 backdrop-blur-lg border border-gray-200 rounded-2xl shadow-lg p-6 overflow-hidden transition-all"
              >
                {/* Animated Icon Ring */}
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-red-100 to-white scale-110 blur-md opacity-50" />
                  <div className="relative z-10 w-12 h-12 flex items-center justify-center rounded-full border-2 border-red-500 bg-white text-red-600 shadow-md transition duration-300 group-hover:bg-red-600 group-hover:text-white">
                    <item.icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Text */}
                <p className="relative z-10 text-gray-800 text-[16.5px] leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
