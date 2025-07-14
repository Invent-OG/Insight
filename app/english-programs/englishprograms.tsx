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
  Lightbulb,
  Target,
  Rocket,
  Users,
  ShieldCheck,
  Star,
} from "lucide-react";
import {
  Volume2,
  FileText,
  BookOpen,
  Presentation,
  Mic,
  Activity,
} from "lucide-react";
import { CalendarCheck, UserCheck, Eye } from "lucide-react";
import EnglishProgramHero from "@/components/sections/EnglishProgramHero";

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
  const icons = [Lightbulb, Target, Rocket, Users, ShieldCheck, Star];

  return (
    <div>
      {/* Hero Section */}

      <div>
        <EnglishProgramHero />
      </div>

      {/* English Proficiency Tests */}
      <section
        data-aos="zoom-in-down"
        data-aos-anchor-placement="top-start"
        data-aos-duration="2000"
        className="relative flex flex-col justify-center overflow-hidden py-10 px-4 bg-gray-50 mx-auto"
      >
        <h4 className="uppercase text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
          — test prep —
        </h4>
        <motion.h2
          className="lg:text-5xl text-3xl font-bold text-center mb-16 py-2 text-black relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          English <span className="text-primary">Proficiency</span> Test{" "}
          <span className="text-primary">Preparation</span>
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
              <Card className="bg-white rounded-xl border border-gray-300 shadow-xl h-full hover:shadow-rose-400/50 transition duration-300 p-5 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-800 to-primary rounded-t-xl"></div>
                <CardHeader className="mb-3">
                  <h3 className="text-xl font-extrabold text-black">{title}</h3>
                </CardHeader>
                <CardContent>
                  {index === 0 && (
                    <>
                      <p className="mb-4 text-gray-700">
                        Training for both paper-based and computer-delivered
                        tests. Covers Listening, Reading, Writing, and Speaking.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span>{" "}
                          Personalized one-on-one sessions
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Practice
                          materials for all modules
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Mock tests
                          with feedback
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Targeted
                          guidance to achieve your band score
                        </div>
                      </div>
                    </>
                  )}
                  {index === 1 && (
                    <>
                      <p className="mb-4 text-gray-700">
                        Computer-based test with AI scoring system, recognized
                        by institutions in Australia, New Zealand, and more.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Digital
                          test formats & simulations
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span>{" "}
                          Module-specific practice
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Time
                          management tips
                        </div>
                      </div>
                    </>
                  )}
                  {index === 2 && (
                    <>
                      <p className="mb-4 text-gray-700">
                        Convenient online test accepted by many US and Canadian
                        universities.
                      </p>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Adaptive
                          test techniques
                        </div>
                        <div className="flex items-center gap-2 text-gray-700">
                          <span className="text-yellow-500">⭐</span> Speed &
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
      </section>

      {/* What Makes Us Different */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-start"
        data-aos-duration="1000"
        className="relative bg-white py-10 overflow-hidden"
      >
        <h4 className="uppercase text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
          — Our training —
        </h4>
        <div className="relative z-10 py-2 max-w-6xl mx-auto px-4">
          {/* Centered Heading */}
          <h2 className="text-5xl font-bold text-center text-black mb-16">
            What <span className="text-primary">Makes</span> Our Training{" "}
            <span className="text-primary">Different?</span>
          </h2>

          <div className="flex flex-col lg:flex-row items-stretch gap-12 ">
            {/* Left Side - Large SVG Image */}
            <div className="w-full lg:w-1/2 flex justify-center items-center">
              <img
                src="https://www.vinsys.com/static/media/training/course/banner/vinsysBannerimage_ac1BtCc.svg"
                alt="Online Training Illustration"
                className="w-full max-w-[500px] h-auto object-contain"
              />
            </div>

            {/* Right Side - Grid Cards */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-14  ">
                {benefits.map((item, index) => {
                  const Icon = icons[index % icons.length]; // rotate icons if fewer than benefits
                  return (
                    <div
                      key={index}
                      ref={(el) => {
                        if (el) cardsRef.current[index] = el;
                      }}
                      className="relative p-6 lg:w-72 bg-white mx-auto rounded-2xl border border-white/90 shadow-lg bg-gradient-to-br from-white/10 to-white/5  transition-transform hover:scale-105 hover:rotate-[1deg] duration-300 flex items-center gap-4 min-h-[120px]"
                    >
                      <div className="bg-black/10 rounded-full p-2 shadow-inner">
                        <Icon className="text-primary w-6 h-6" />
                      </div>
                      <p className="text-black text-base leading-snug">
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* English Communication Classes */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat py-10 text-white"
        style={{
          backgroundImage:
            "url('/assets/englishprogram/communicationclass.webp')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85 z-0"></div>

        {/* Content */}

        <div className="relative max-w-6xl mx-auto px-4 z-10">
          <h4 className="uppercase text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
            — english classes —
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-16 py-2 text-white"
          >
            English <span className="text-primary">Communication</span> Classes
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
              <p className="text-lg text-white leading-relaxed">
                Our English communication training is ideal for students,
                professionals, and anyone looking to gain fluency and confidence
                in spoken English.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">
                  Our Method:
                </h3>
                <p className="text-white leading-relaxed mb-2">
                  We follow a{" "}
                  <span className="text-primary font-medium">
                    “speak first, learn rules later”
                  </span>{" "}
                  approach.
                </p>
                <p className="text-white leading-relaxed mb-2">
                  Students begin with spoken practice in everyday situations –
                  this builds natural fluency and confidence.
                </p>
                <p className="text-white leading-relaxed">
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
                  <Volume2 className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">Spoken English and pronunciation</p>
                </div>

                <div className="flex items-start space-x-2">
                  <FileText className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">Grammar and sentence framing</p>
                </div>

                <div className="flex items-start space-x-2">
                  <BookOpen className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">
                    Vocabulary development (basic to advanced)
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Presentation className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">
                    Presentation and interview preparation
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Mic className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">
                    Accent reduction and real-life speaking skills
                  </p>
                </div>

                <div className="flex items-start space-x-2">
                  <Activity className="w-5 h-5 text-primary mt-1" />
                  <p className="text-white">
                    Real-time feedback and progress tracking
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* who can join us? */}
      <section className="relative w-full  py-2 px-4 text-black overflow-hidden bg-white">
        {/* Full-Width Black Themed SVG Background */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          viewBox="0 0 1000 1000"
        >
          <defs>
            <radialGradient id="whiteFade" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
            </radialGradient>
          </defs>

          {/* Radial gradient background */}
          <rect width="100%" height="100%" fill="url(#whiteFade)" />

          {/* White circle (top right) */}
          <circle cx="800" cy="200" r="180" fill="#1a1a1a" opacity="0.12" />

          {/* Light black circle (bottom left) */}
          <circle cx="200" cy="750" r="130" fill="#1a1a1a" opacity="0.08" />
        </svg>

        {/* Centered Content */}
        <div className="relative z-10 max-w-6xl mx-auto bg-transparent rounded-2xl  p-6 sm:p-10">
          <h4 className="uppercase text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
            — join us —
          </h4>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl font-bold text-center mb-14 text-black"
          >
            Who Can <span className="text-primary">Join?</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-transparent border-l-4 border-r-4 border-primary p-10 rounded-2xl shadow-xl space-y-6"
          >
            <p className="text-lg text-gray-800 leading-relaxed">
              Everyone is welcome! Whether you're a{" "}
              <span className="text-primary font-semibold">school student</span>
              , <span className="text-primary font-semibold">graduate</span>,{" "}
              <span className="text-primary font-semibold">
                working professional
              </span>
              , <span className="text-primary font-semibold">homemaker</span>,
              or <span className="text-primary font-semibold">elder</span>, we
              tailor the sessions to suit your goals.
            </p>

            <p className="text-gray-800 leading-relaxed">
              No prior knowledge is needed – we start from{" "}
              <span className="text-primary font-semibold">your level</span> and
              build from there.
            </p>

            <div className="pt-6 border-t border-gray-300 grid md:grid-cols-3 gap-4 text-gray-800">
              <div className="flex items-start bg-white p-4 rounded-xl border border-gray-300 space-x-3 shadow-sm">
                <CalendarCheck className="text-primary w-6 h-6 mt-1" />
                <span>
                  <span className="text-primary font-medium">
                    Flexible scheduling
                  </span>{" "}
                  based on your convenience
                </span>
              </div>

              <div className="flex items-start bg-white p-4 rounded-xl border border-gray-300 space-x-3 shadow-sm">
                <UserCheck className="text-primary w-6 h-6 mt-1" />
                <span>
                  <span className="text-primary font-medium">
                    One-on-one attention
                  </span>{" "}
                  from trained experts
                </span>
              </div>

              <div className="flex items-start bg-white p-4 rounded-xl border border-gray-300 space-x-3 shadow-sm">
                <Eye className="text-primary w-6 h-6 mt-1" />
                <span>
                  <span className="text-primary font-medium">Demo session</span>{" "}
                  available before enrollment
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Insight */}
      <section
        data-aos="fade-up"
        data-aos-anchor-placement="top-start"
        className="lg:py-10 py-8 px-2 flex pb-14 items-center justify-center bg-white  text-center"
      >
        <motion.div
          className="max-w-2xl space-y-8"
          data-aos="flip-up"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl font-extrabold text-black mb-6">
            Why <span className="text-primary">Choose</span> Insight?
          </h2>
          <p className="text-black text-lg leading-relaxed py-2 mb-6">
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

          <p className="text-black text-lg leading-relaxed mb-6">
            Whether you're aiming for{" "}
            <span className="text-primary font-semibold">test success</span> or
            <span className="text-primary font-semibold">
              {" "}
              everyday fluency
            </span>
            ,{" "}
            <span className="text-primary font-extrabold glow-text">
              Insight
            </span>{" "}
            is here to guide you every step of the way.
          </p>

          <Button className="text-white">Get Started</Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
