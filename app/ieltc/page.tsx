"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
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
            <span className="italic font-semibold text-primary bg-primary text-white px-1 rounded drop-shadow-sm">
              certified by Trinity College London
            </span>
            . Go beyond theory with meaningful, result-oriented English coaching
            that’s tailored to your needs.
          </p>
        </div>
      </section>

      {/* English Proficiency Tests */}
      <section className="relative overflow-hidden py-16 px-4 bg-gray-950">
        {/* Top wave */}
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-20 fill-current text-primary opacity-50"
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

        <div className="relative container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Repeat cards here with same content */}
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
              <Card className="bg-gray-950 rounded-xl border border-gray-700 shadow-xl hover:shadow-rose-400/50 transition duration-300 p-5 relative">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-t-xl"></div>
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
            className="w-full h-20 fill-current text-primary opacity-50"
          >
            <path d="M0,0V46.29c47.18,22.6,108.6,32.85,172.4,24,74.47-10.57,131.38-43.92,204.1-57,70.21-12.58,147.34-6.28,218.1,18,86.65,29.78,172.43,74.68,263.4,72,61.41-1.79,113.53-22.73,172.4-44.79V0Z"></path>
          </svg>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="relative bg-gradient-to-r from-indigo-800 to-purple-900 py-16 px-4 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-100 mb-10">
            What Makes Our Training Different?
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              "Not grammar-heavy – focus on test rules and smart strategies",
              "Customized practice sessions for individual needs",
              "Flexible timing and student comfort",
              "Regular feedback and progress tracking",
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-black/30 backdrop-blur-md p-6 w-full sm:w-72 rounded-lg border border-pink-500/30 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* English Communication Classes */}
      <section className="container mx-auto py-16 px-4">
        <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          English Communication Classes
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Our Method:</h3>
            <p className="mb-4">
              “Speak first, learn rules later” – start with real-life
              conversations, then build grammar and vocabulary progressively.
            </p>
            <ul className="list-disc ml-4 text-gray-300 space-y-1">
              <li>Spoken English and pronunciation</li>
              <li>Grammar and sentence framing</li>
              <li>Vocabulary development (basic to advanced)</li>
              <li>Presentation and interview preparation</li>
              <li>Accent reduction and real-life speaking skills</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-3">Who Can Join?</h3>
            <p className="mb-4">
              Everyone is welcome – from school students to professionals and
              homemakers. No prior knowledge is needed – we start at your level.
            </p>
            <ul className="list-disc ml-4 text-gray-300 space-y-1">
              <li>Flexible scheduling based on your convenience</li>
              <li>One-on-one attention from trained experts</li>
              <li>Demo session available before enrollment</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Insight */}
      <section className="bg-gradient-to-r from-purple-700 to-pink-800 py-16 px-4 text-center">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Insight?</h2>
          <p className="mb-4">
            We don’t just teach English – we help you build real-world
            communication skills, boost your confidence, and prepare for global
            opportunities.
          </p>
          <p className="mb-4">
            Whether you’re aiming for test success or everyday fluency, Insight
            is here to guide you every step of the way.
          </p>
          <Button
            variant="secondary"
            className="bg-white text-purple-800 font-semibold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition duration-300"
          >
            Get Started
          </Button>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
