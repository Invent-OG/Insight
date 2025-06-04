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
        <BackgroundPaths />
        {/* Hero  sub content */}
        <section className="hero flex items-center min-h-screen bg-black px-8">
          <motion.div
            className="max-w-6xl flex gap-12 items-center relative"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2, when: "beforeChildren" },
              },
            }}
          >
            {/* Image slides up */}
            <motion.div
              className="flex-shrink-0 w-1/2 flex justify-center"
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 1 }}
            >
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="International education"
                className="rounded-full object-cover w-96 h-96 shadow-lg"
              />
            </motion.div>

            {/* Text wave effect */}
            <motion.div
              className="w-1/2 text-white flex flex-col items-end"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 },
              }}
            >
              <motion.h1
                className="text-5xl font-bold mb-6 leading-snug text-right"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {"Your pathway to international education"
                  .split(" ")
                  .map((word, i) => (
                    <motion.span
                      key={i}
                      className={word === "international" ? "text-primary" : ""}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        delay: i * 0.12,
                      }}
                    >
                      {word}{" "}
                    </motion.span>
                  ))}
              </motion.h1>
              <motion.p
                className="text-lg text-gray-300 leading-relaxed max-w-lg text-left"
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
        </section>
        {/* Founder Section */}
        <section className="bg-black py-20 max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
          {/* Content (Left Side) */}
          <motion.blockquote
            initial={{ x: -50, opacity: 0, rotate: -2 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-white italic text-lg border-l-4 border-primary pl-6 md:w-2/3"
          >
            “Our founder, Neshika, brings a wealth of personal and professional
            experience to the table. Having pursued her education in the UK and
            being an IELTS-certified trainer from Trinity University, she
            understands firsthand the challenges and opportunities international
            students face. Her passion for education and commitment to student
            success drives our team to deliver expert, personalized guidance
            every step of the way.”
            <br />
            <br />
            <span className="text-primary font-semibold not-italic">
              — Founder Neshika
            </span>
          </motion.blockquote>

          {/* Image (Right Side) */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0, rotateY: 180 }}
            whileInView={{ scale: 1, opacity: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-primary/70 shadow-xl flex-shrink-0"
          >
            <Image
              src="https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg"
              alt="Founder Neshika"
              width={240}
              height={240}
              className="object-cover"
            />
          </motion.div>
        </section>

        {/* Offerings Section */}
        <section className="bg-black py-20 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex-1 relative bg-gradient-to-br from-gray-900 via-black to-gray-900 p-10 rounded-3xl border border-pink-600 shadow-lg overflow-hidden h-full"
            >
              {/* Glowing Circles */}
              <div className="absolute -top-7 -left-7 w-48 h-48 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-7 -right-7 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Heading */}
              <motion.h2
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-pink-400 mb-10 relative z-10 flex items-center gap-4"
              >
                <span className="bg-gradient-to-r from-pink-500 to-blue-500 text-transparent bg-clip-text">
                  Our Services
                </span>
                <span className="w-16 h-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-pulse"></span>
              </motion.h2>

              {/* Paragraphs with hover effect */}
              <motion.div className="relative z-10 space-y-8">
                {[
                  {
                    delay: 0,
                    text: "Insight is your dedicated partner for studying abroad, offering tailored solutions that fit your unique goals and dreams.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                    ),
                    extraClass: "",
                  },
                  {
                    delay: 0.2,
                    text: "We collaborate with top universities across the globe, ensuring your academic journey aligns with your career aspirations.",
                    icon: null,
                    extraClass: "border-l-4 border-pink-500 pl-5",
                  },
                  {
                    delay: 0.4,
                    text: "Our transparent and student-first approach means you get unbiased advice and support at every step, from selecting universities to handling paperwork.",
                    icon: null,
                    extraClass: "bg-gray-800 bg-opacity-30 p-5 rounded-lg",
                  },
                  {
                    delay: 0.6,
                    text: "With Insight, you’re not just choosing a service; you’re choosing a team that’s committed to your success and is always ready to answer your questions.",
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-pink-500 flex-shrink-0 inline-block mr-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 8v4l3 3"
                        />
                      </svg>
                    ),
                    extraClass: "flex items-center gap-4",
                  },
                  {
                    delay: 0.8,
                    text: "“Let us be your guide to a world of educational possibilities and unforgettable experiences abroad.”",
                    icon: null,
                    extraClass: "italic border-t border-gray-700 pt-6",
                  },
                ].map(({ delay, text, icon, extraClass }, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay }}
                    viewport={{ once: true }}
                    className={`text-lg text-gray-300 leading-relaxed transition-transform duration-300 hover:translate-y-[-8px] cursor-default ${extraClass}`}
                  >
                    {icon && (
                      <span className="inline-block mr-3 p-2 bg-pink-600 rounded-full">
                        {icon}
                      </span>
                    )}
                    {text}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Accordion */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex-1 h-[620px] overflow-y-auto space-y-5 bg-gray-900 rounded-3xl p-8 border border-pink-600 shadow-lg"
            >
              {[
                "IELTS coaching in Coimbatore by certified professionals",
                "Personalized study abroad counselling",
                "Assistance with university applications and admissions",
                "Help with securing scholarships and financial aid",
                "Complete student visa support and guidance",
                "Flight booking, accommodation, and airport pickup services",
                "Pre-departure and post-arrival support",
                "Part-Time Guidance",
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gray-800 p-4 rounded-lg shadow hover:bg-pink-600 hover:text-white transition cursor-pointer"
                >
                  {service}
                </motion.div>
              ))}
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
