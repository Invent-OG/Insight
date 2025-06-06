"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Head from "next/head";
import { BackgroundPaths } from "@/components/ui/background-paths"; // Import the correct component
import DisplayCards from "@/components/ui/display-cards";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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
        <section
          className="hero flex items-center min-h-screen bg-black bg-fixed bg-center bg-cover px-8 relative overflow-hidden
             bg-[url('https://images.unsplash.com/photo-1596865249308-2472dc5807d7?q=80&w=1506&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]"
          style={{
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
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
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80"
                alt="International education"
                className="rounded-full object-cover w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 shadow-lg"
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
              <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug text-left"
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
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
                className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg text-left"
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
          <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>
        </section>

        {/* Founder Section */}
        <section className="relative lg:py-20 lg:mt-16  max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10 bg-gray-900">
          {/* Overlay for light black tint */}
          <div className="absolute inset-0 bg-black bg-opacity-60 pointer-events-none"></div>

          {/* Content (Left Side) */}
          <motion.blockquote
            initial={{ x: -50, opacity: 0, rotate: -2 }}
            whileInView={{ x: 0, opacity: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative text-white italic text-lg border-l-4 border-primary pl-6 md:w-2/3 z-10"
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
            className="relative w-48 h-48 md:w-60 md:h-60 rounded-full overflow-hidden border-8 border-primary/70 shadow-xl flex-shrink-0 z-10"
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
        {/* Offerings Section */}
        <section className="relative lg:py-20 lg:mt-14 px-6 min-h-[620px] sm:min-h-[800px]">
          {/* Background image with blur */}
          <div
            className="absolute inset-0 bg-center bg-cover bg-fixed filter brightness-75"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1500&q=80')",
            }}
            aria-hidden="true"
          ></div>

          {/* Blue translucent overlay */}
          <div
            className="absolute inset-0 bg-black opacity-30 pointer-events-none"
            aria-hidden="true"
          ></div>

          {/* Content container */}
          <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-10">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="md:w-1/2 flex-1 p-6 sm:p-8 rounded-3xl border border-white shadow-lg flex flex-col relative bg-transparent"
              style={{ minHeight: "auto" }}
            >
              {/* Glowing Circles */}
              <div className="absolute -top-7 -left-7 w-36 h-36 sm:w-48 sm:h-48 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-7 -right-7 w-36 h-36 sm:w-48 sm:h-48 bg-red-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

              {/* Heading */}
              <motion.h2
                initial={{ x: -40, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                viewport={{ once: true }}
                className="text-3xl sm:text-4xl font-extrabold text-red-400 mb-8 sm:mb-10 relative z-10 flex items-center gap-3 sm:gap-4"
              >
                <span className="bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
                  Our Services
                </span>
                <span className="w-12 sm:w-16 h-1 bg-gradient-to-r from-red-500 to-red-700 rounded-full animate-pulse"></span>
              </motion.h2>

              {/* Paragraphs with hover effect */}
              <motion.div className="relative z-10 space-y-6 sm:space-y-8 flex-1">
                {[
                  {
                    delay: 0,
                    text: `Whether you're aspiring to study in the UK, USA, Canada, Australia,
New Zealand, Ireland, Europe, UAE, Singapore, or Malaysia, we
provide end-to-end support to make your journey smooth and
stress-free.`,
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500"
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
                    text: `We work with top-ranked universities and a wide range of academic
programs, ensuring that your choices align with your career goals
and personal preferences. We never limit your options—instead, we
empower you with choices that truly fit your ambitions.`,
                    icon: null,
                    extraClass: "border-l-4 border-red-500 pl-5",
                  },
                  {
                    delay: 0.4,
                    text: `At Insight, we pride ourselves on our professional, kind, and
transparent approach. We’re always available to answer your
questions—big or small—and we actively involve parents in the
process to build trust and clarity. Our goal is to provide not just a
service, but a life-changing experience.`,
                    icon: null,
                    extraClass: "bg-gray-800 bg-opacity-30 p-4 rounded-lg",
                  },
                  {
                    delay: 0.6,
                    text: `Whether you're just beginning to explore your study abroad options
or ready to start your application, we’re here to guide you from start
to finish. Discover your path to international education with Insight
—Coimbatore’s trusted study abroad consultants.`,
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 text-red-500 flex-shrink-0 inline-block mr-2"
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
                    extraClass: "flex items-center gap-3",
                  },
                  {
                    delay: 0.8,
                    text: `Let us be your guide to a world of educational possibilities and unforgettable experiences abroad.`,
                    icon: null,
                    extraClass: "italic border-t border-gray-700 pt-4",
                  },
                ].map(({ delay, text, icon, extraClass }, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay }}
                    viewport={{ once: true }}
                    className={`text-base sm:text-lg text-gray-300 leading-relaxed transition-transform duration-300 hover:-translate-y-1 cursor-default ${extraClass}`}
                  >
                    {icon && (
                      <span className="inline-block mr-2 p-1.5 bg-red-600 rounded-full">
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
              className="md:w-1/2 flex-1 overflow-y-auto space-y-4 rounded-3xl p-6 sm:p-8 border border-white shadow-lg flex flex-col justify-evenly items-center max-h-[320px] sm:max-h-[400px] md:max-h-full bg-transparent"
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
                  className="bg-transparent border border-white rounded-lg shadow hover:bg-red-600 hover:text-white transition cursor-pointer flex items-center min-h-[36px] sm:min-h-[50px] p-3 sm:p-4 text-sm sm:text-base"
                >
                  {service}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Core Values Section */}

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl px-6">
          <DisplayCards />
        </div>
      </main>
    </>
  );
}
