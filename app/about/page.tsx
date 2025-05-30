"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Globe,
  GraduationCap,
  UserCheck,
  Star,
  Calendar,
} from "lucide-react";
import Image from "next/image";
import Head from "next/head";
import { BackgroundPaths } from "@/components/ui/background-paths"; // Import the correct component

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { width: 0, opacity: 0 },
  visible: {
    width: "auto",
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

export default function About() {
  return (
    <>
      <Head>
        <title>About Insight | Trusted Overseas Education Consultants</title>
        <meta
          name="description"
          content="Learn how Insight helps students study abroad with expert advice, global partnerships, and student-first support."
        />
        <meta
          name="keywords"
          content="study abroad, overseas education consultants, IELTS coaching Coimbatore, international education, student visa support"
        />
      </Head>

      <main className="bg-black text-white min-h-screen relative">
        {/* BackgroundPaths component */}
        <BackgroundPaths title="Insight Educator & Abroad Services" />

        {/* Founder Section */}
        <section className="py-20 px-6 bg-black relative z-10 overflow-hidden max-w-3xl mx-auto">
          {/* Removed parallax bg div for pure black background */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black p-10 rounded-2xl shadow-2xl relative border border-gray-700 hover:border-blue-500 hover:shadow-blue-500/50 transition-all duration-500"
          >
            {/* Profile Image */}
            <div className="absolute -top-20 left-1/2 transform -translate-x-1/2">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="rounded-full overflow-hidden border-4 border-blue-500 w-40 h-40 shadow-lg cursor-pointer transition-transform"
              >
                <Image
                  src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
                  alt="Founder Neshika"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </motion.div>
            </div>

            {/* Content */}
            <div className="mt-24 text-center space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, color: "#3B82F6" }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl font-bold text-white cursor-pointer transition-colors"
              >
                Meet Our Founder
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-gray-300 text-lg"
              >
                At Insight, we’re driven by clarity and informed decisions. Our
                founder,
                <strong className="text-blue-400"> Neshika</strong>, is a UK
                graduate and a certified IELTS trainer from Trinity University.
              </motion.p>

              <motion.blockquote
                initial={{ opacity: 0, rotate: -2 }}
                whileInView={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02, rotate: 2 }}
                className="text-blue-400 italic text-lg transition-transform"
              >
                "Her personal journey inspires our mission to guide every
                student with personalized, student-first support."
              </motion.blockquote>
            </div>
          </motion.div>
        </section>

        {/* Offerings Section */}
        <section className="py-24 bg-black relative overflow-hidden">
          <div className="relative z-10 overflow-hidden max-w-6xl mx-auto">
            <motion.div
              className="flex space-x-10"
              initial={{ x: 0 }}
              animate={{ x: "-50%" }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "linear",
              }}
            >
              {[...Array(2)].flatMap((_, duplicateIndex) =>
                [
                  {
                    icon: GraduationCap,
                    title: "IELTS Coaching",
                    desc: "Expert guidance.",
                  },
                  {
                    icon: Globe,
                    title: "Study Abroad",
                    desc: "Expand horizons.",
                  },
                  {
                    icon: BookOpen,
                    title: "University Apps",
                    desc: "Get accepted.",
                  },
                  {
                    icon: Star,
                    title: "Scholarships",
                    desc: "Fund your dream.",
                  },
                  {
                    icon: UserCheck,
                    title: "Visa & Job Support",
                    desc: "Smooth transitions.",
                  },
                ].map(({ icon: Icon, title, desc }, i) => (
                  <div
                    key={`${duplicateIndex}-${i}`}
                    className="bg-black min-w-[300px] rounded-xl p-6 mx-2 flex-shrink-0 hover:shadow-[0_0_20px_#4f46e5] transition"
                  >
                    <div className="bg-indigo-700 p-4 rounded-full mb-4 inline-block ">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {title}
                    </h3>
                    <p className="text-gray-400">{desc}</p>
                  </div>
                ))
              )}
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="container py-20 px-6 bg-black relative z-10 max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            className="text-center"
          >
            <motion.h2
              variants={titleVariants}
              className="text-4xl font-bold text-white mb-16"
            >
              Our Core Values
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {[
                {
                  label: "🎯 Kind Attitude",
                  value: "“We treat every student with empathy and respect.”",
                  icon: "🎯",
                },
                {
                  label: "🔍 Clarity",
                  value: "“Students understand every step in their journey.”",
                  icon: "🔍",
                },
                {
                  label: "📅 Professionalism",
                  value: "“We operate with timely, reliable support.”",
                  icon: "📅",
                },
                {
                  label: "🤝 Trust",
                  value: "“We build honest, lasting relationships.”",
                  icon: "🤝",
                },
              ].map(({ label, value, icon }, i) => (
                <motion.div
                  key={i}
                  variants={containerVariants}
                  className="relative bg-gray-900 rounded-lg p-10 cursor-default hover:bg-gray-800 transition shadow-lg"
                  whileHover={{ scale: 1.04 }}
                >
                  <span
                    aria-hidden="true"
                    className="absolute top-6 right-6 text-7xl opacity-10 select-none pointer-events-none"
                  >
                    {icon}
                  </span>
                  <motion.p
                    variants={descriptionVariants}
                    className="text-gray-300 italic text-lg mb-6"
                  >
                    {value}
                  </motion.p>
                  <motion.strong
                    variants={titleVariants}
                    className="block text-white text-2xl"
                  >
                    {label}
                  </motion.strong>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="relative py-24 px-6 flex justify-center bg-gradient-to-b from-transparent to-black text-white max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center"
          >
            <motion.h3
              variants={titleVariants}
              className="text-4xl font-extrabold mb-6"
            >
              Ready to Start Your Journey?
            </motion.h3>
            <motion.p
              variants={descriptionVariants}
              custom={0.3}
              className="mb-8 text-lg text-gray-300 max-w-xl mx-auto"
            >
              Join hundreds of students who have already taken the leap. Book
              your free consultation and let's get started!
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05, textDecoration: "underline" }}
              onClick={() => alert("Booking functionality coming soon!")}
              className="text-white font-semibold text-lg underline-offset-4 transition"
              style={{ background: "transparent", border: "none" }}
            >
              Book a Free Consultation
            </motion.button>
          </motion.div>
        </section>
      </main>
    </>
  );
}
