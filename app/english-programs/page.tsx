"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Volume2,
  FileText,
  BookOpen,
  Presentation,
  Mic,
  Activity,
} from "lucide-react";
import { CalendarCheck, UserCheck, Eye } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        { opacity: 0, filter: "blur(10px)", y: 20 },
        {
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 1.8,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
          },
        }
      );
    });
  }, []);
  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 90%",
          },
        }
      );
    }

    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: leftRef.current,
            start: "top 85%",
          },
        }
      );
    }

    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1.4,
          delay: 0.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: rightRef.current,
            start: "top 85%",
          },
        }
      );
    }
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 100,
      once: true,
    });
  }, []);
  const benefits = [
    "Not grammar-heavy – focus on test rules and smart strategies",
    "Customized practice sessions for individual needs",
    "Flexible timing and student comfort",
    "Regular feedback and progress tracking",
    "Personal mentorship & doubt-clearing sessions",
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}

      <section className="flex flex-col text-center justify-center py-20 min-h-screen px-6  bg-gradient-to-r from-black to-primary/40 text-white relative overflow-hidden">
        {/* Parallax Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: "url('/assets/country/malta.jpg')",
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 space-y-10 max-w-5xl mx-auto">
          <h1 className="text-5xl font-bold mb-4">
            Achieve <span className="text-primary">English Excellence</span> –
            Personalized and <span className="text-primary">Practical</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg leading-7">
            We offer one-on-one training led by experts{" "}
            <span className="italic font-semibold  bg-primary text-white px-1 rounded drop-shadow-sm">
              certified by Trinity College London
            </span>
            . Go beyond theory with meaningful, result-oriented English coaching
            that’s tailored to your needs.
          </p>
        </div>
      </section>

      {/* English Proficiency Tests */}
      <section
        data-aos="zoom-in-down"
        data-aos-anchor-placement="top-start"
        data-aos-duration="2000"
        className="relative flex flex-col justify-center  overflow-hidden py-16 px-4 bg-gray-950 mx-auto"
      >
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 fill-current text-primary opacity-20"
          >
            <path d="M0,0V46.29c47.18,22.6,108.6,32.85,172.4,24,74.47-10.57,131.38-43.92,204.1-57,70.21-12.58,147.34-6.28,218.1,18,86.65,29.78,172.43,74.68,263.4,72,61.41-1.79,113.53-22.73,172.4-44.79V0Z"></path>
          </svg>
        </div>

        <motion.h2
          className="text-5xl font-bold text-center mb-12 text-white relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          English Proficiency Test Preparation
        </motion.h2>

        <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
          {[
            "IELTS – Academic & General",
            "PTE – Pearson Test of English",
            "Duolingo English Test",
          ].map((title, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="bg-gray-950 rounded-xl border border-gray-700 shadow-xl h-full hover:shadow-rose-400/50 transition duration-300 p-5 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-black to-primary rounded-t-xl"></div>
                <CardHeader className="mb-3">
                  <h3 className="text-xl font-extrabold text-white">{title}</h3>
                </CardHeader>
                <CardContent>
                  {index === 0 && (
                    <>
                      <p className="mb-4 text-gray-300">
                        Training for both paper-based and computer-delivered
                        tests. Covers Listening, Reading, Writing, and Speaking.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span>{" "}
                          Personalized one-on-one sessions
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Practice
                          materials for all modules
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Mock tests
                          with feedback
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Targeted
                          guidance to achieve your band score
                        </div>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className="mb-4 text-gray-300">
                        Computer-based test with AI scoring system, recognized
                        by institutions in Australia, New Zealand, and more.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Digital
                          test formats & simulations
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span>{" "}
                          Module-specific practice
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Time
                          management tips
                        </div>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className="mb-4 text-gray-300">
                        Convenient online test accepted by many US and Canadian
                        universities.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Adaptive
                          test techniques
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <span className="text-yellow-400">⭐</span> Speed &
                          accuracy training
                        </div>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 fill-current text-primary opacity-20"
          >
            <path d="M0,0V46.29c47.18,22.6,108.6,32.85,172.4,24,74.47-10.57,131.38-43.92,204.1-57,70.21-12.58,147.34-6.28,218.1,18,86.65,29.78,172.43,74.68,263.4,72,61.41-1.79,113.53-22.73,172.4-44.79V0Z"></path>
          </svg>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-start"
        data-aos-duration="1000"
        className="relative bg-black py-16 overflow-hidden"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center text-white mb-10">
            What Makes Our Training Different?
          </h2>
          <div className="flex flex-wrap justify-center gap-6 perspective-1000">
            {benefits.map((item, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) cardsRef.current[index] = el;
                }}
                className="bg-black/30 backdrop-blur-md p-6 w-full sm:w-72 rounded-xl border border-primary shadow-[0_10px_30px_rgba(255,0,0,0.4)] hover:rotate-[1deg] hover:scale-105 transition-transform duration-300 flex items-center justify-center text-center min-h-[120px] sm:min-h-[160px]"
              >
                <p className="text-white text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* English Communication Classes */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-16 text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/5212333/pexels-photo-5212333.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 text-white"
          >
            English Communication Classes
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-300 leading-relaxed">
                Our English communication training is ideal for students,
                professionals, and anyone looking to gain fluency and confidence
                in spoken English.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Our Method:
                </h3>
                <p className="text-gray-300 leading-relaxed mb-2">
                  We follow a{" "}
                  <span className="text-white font-medium">
                    “speak first, learn rules later”
                  </span>{" "}
                  approach.
                </p>
                <p className="text-gray-300 leading-relaxed mb-2">
                  Students begin with spoken practice in everyday situations –
                  this builds natural fluency and confidence.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  As they grow more comfortable, we introduce grammar,
                  vocabulary, and sentence patterns with clear usage-based
                  explanations.
                </p>
              </div>
            </motion.div>

            {/* Right Content - Key Areas */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6 border border-gray-600 bg-[#111111]/80 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-xl font-semibold text-primary">
                Key Areas We Cover:
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start space-x-2">
                  <Volume2 className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">
                    Spoken English and pronunciation
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <FileText className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">Grammar and sentence framing</p>
                </div>

                <div className="flex items-start space-x-2">
                  <BookOpen className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">
                    Vocabulary development (basic to advanced)
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Presentation className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">
                    Presentation and interview preparation
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Mic className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">
                    Accent reduction and real-life speaking skills
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Activity className="w-5 h-5 text-red-500 mt-1" />
                  <p className="text-gray-300">
                    Real-time feedback and progress tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* who can join us? */}
      <section className="max-w-6xl mx-auto py-20 px-4 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-12 text-white"
        >
          Who Can Join?
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#1a1a1a] to-[#111] border-l-4 border-r-4 border-primary p-10 rounded-2xl shadow-xl space-y-6"
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Everyone is welcome! Whether you're a school student, graduate,
            working professional, homemaker, or elder, we tailor the sessions to
            suit your goals.
          </p>

          <p className="text-gray-300 leading-relaxed">
            No prior knowledge is needed – we start from your level and build
            from there.
          </p>

          <div className="pt-6 border-t border-gray-700 grid md:grid-cols-3 gap-4 text-gray-300">
            <div className="flex items-start bg-gray-900/60 p-4 rounded-xl border border-gray-700 space-x-3">
              <CalendarCheck className="text-red-500 w-6 h-6 mt-1" />
              <span>Flexible scheduling based on your convenience</span>
            </div>

            <div className="flex items-start bg-gray-900/60 p-4 rounded-xl border border-gray-700 space-x-3">
              <UserCheck className="text-red-500 w-6 h-6 mt-1" />
              <span>One-on-one attention from trained experts</span>
            </div>

            <div className="flex items-start bg-gray-900/60 p-4 rounded-xl border border-gray-700 space-x-3">
              <Eye className="text-red-500 w-6 h-6 mt-1" />
              <span>Demo session available before enrollment</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Insight */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-start"
        className="lg:py-15 py-20 flex pb-14 items-center justify-center bg-gradient-to-br from-black   px-4  text-center"
      >
        <motion.div
          className="max-w-2xl"
          data-aos="flip-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-white mb-6">
            Why Choose Insight?
          </h2>
          <style jsx>{`
            @keyframes glow {
              0%,
              100% {
                text-shadow: 0 0 5px #facc15, 0 0 10px #facc15, 0 0 20px #facc15;
              }
              50% {
                text-shadow: 0 0 10px #facc15, 0 0 20px #facc15,
                  0 0 30px #facc15;
              }
            }

            .glow-text {
              animation: glow 2s ease-in-out infinite;
            }
          `}</style>

          <p className="text-white text-lg leading-relaxed py-2 mb-6">
            We don’t just{" "}
            <span className="text-primary font-semibold">teach English</span> –
            we help you build
            <span className="text-primary font-semibold">
              {" "}
              real-world communication skills
            </span>
            , boost your{" "}
            <span className="text-primary font-semibold">confidence</span>, and
            prepare for
            <span className="text-primary font-semibold">
              {" "}
              global opportunities
            </span>
            .
          </p>

          <p className="text-white text-lg leading-relaxed mb-6">
            Whether you're aiming for{" "}
            <span className="text-primary font-semibold">test success</span> or
            <span className="text-primary font-semibold">
              {" "}
              everyday fluency
            </span>
            ,{" "}
            <span className="text-yellow-400 font-bold glow-text">
              Insight
            </span>{" "}
            is here to guide you every step of the way.
          </p>

          <Button>Get Started</Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
