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
import contentimg from "@/public/assets/country/Germany (1).png";


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
        {/* Hero component sub content */}
        <section className="bg-black py-24 px-6 flex justify-center">
          <div className="max-w-3xl p-10 rounded-xl bg-black shadow-neon-red">
            <h2 className="text-4xl font-bold mb-6 text-primary drop-shadow-lg">
              Insight Educator & Abroad Services
            </h2>
            <p className="text-red-200 text-lg leading-relaxed">
              At Insight Educator & Abroad Services, we believe in “Insight”—the
              ability to see beyond the obvious, understand deeply, and make
              informed decisions which is the foundation of success. Guided by
              this principle, we offer comprehensive study abroad consultancy
              services to students in Coimbatore and beyond, empowering them to
              achieve their global education dreams.
            </p>
          </div>

          <style jsx>{`
            .shadow-neon-red {
              box-shadow: 0 0 10px #f87171, 0 0 30px #ef4444, 0 0 60px #b91c1c;
            }
          `}</style>
        </section>

        {/* Founder Section */}
        <section className="relative bg-black overflow-hidden">
          {/* Diagonal Shape */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/80 to-black transform -skew-y-6 z-0"></div>

          {/* Content */}
          <div className="relative max-w-6xl mx-auto py-20 px-6 flex flex-col md:flex-row items-center z-10">
            {/* Text */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="md:w-1/2 text-white"
            >
              <h2 className="text-4xl font-bold mb-4 cursor-pointer hover:text-blue-400 transition">
                Meet Our Founder
              </h2>
              <p className="text-gray-300 text-lg mb-2">
                Our founder, <span className="text-blue-400">Neshika</span>,
                brings years of UK education and IELTS expertise to guide you.
              </p>
              <p className="text-gray-400 text-lg">
                Personalized coaching and global study support tailored just for
                you.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
              data-aos="flip-left"
            >
              <div className="w-72 h-72 rounded-2xl overflow-hidden border-8 border-blue-500 shadow-lg">
                <Image
                  src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
                  alt="Founder Neshika"
                  width={288}
                  height={288}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
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
