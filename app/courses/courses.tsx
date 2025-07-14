"use client";
import React, { useEffect, useState } from "react";
import WhyTheseCountries from "@/components/sections/WhyTheseCountries";
import firimg from "@/public/assets/course/Business management course.webp";
import secimg from "@/public/assets/course/engineeering & technology.webp";
import thiimg from "@/public/assets/course/data science and aritificial intelligence.webp";
import fouimg from "@/public/assets/course/health and medical science.webp";
import fivimg from "@/public/assets/course/social science & humanities.webp";
import siximg from "@/public/assets/course/creative arts and design.webp";
import sevimg from "@/public/assets/course/law_compressed.webp";
import eigimg from "@/public/assets/course/education.webp";
import ninimg from "@/public/assets/course/architecture and built environment.webp";
import tenimg from "@/public/assets/course/logistics & supply chain management.webp";
import eleimg from "@/public/assets/course/science and technology.webp";
import tweimg from "@/public/assets/course/hospitality & tourism.webp";
import thirimg from "@/public/assets/course/library & information science.webp";
import fourimg from "@/public/assets/course/media, journalism and communication.webp";
import fiftimg from "@/public/assets/course/philosophy, politics & economics.webp";
import sixtimg from "@/public/assets/course/mbbs.webp";
import {
  FaBriefcase,
  FaCog,
  FaRobot,
  FaHospital,
  FaGlobe,
  FaPaintBrush,
  FaBalanceScale,
  FaGraduationCap,
  FaBuilding,
  FaTruck,
  FaFlask,
  FaPlane,
  FaBook,
  FaNewspaper,
  FaGavel,
  FaHeartbeat,
} from "react-icons/fa";

const categoryIcons = {
  "Business Management Courses Abroad": (
    <FaBriefcase className="w-6 h-6 text-red-600" />
  ),
  "Engineering and Technology Programs": (
    <FaCog className="w-6 h-6 text-red-600" />
  ),
  "Data Science and Artificial Intelligence": (
    <FaRobot className="w-6 h-6 text-red-600" />
  ),
  "Health and Medical Sciences": (
    <FaHospital className="w-6 h-6 text-red-600" />
  ),
  "Social Sciences and Humanities": (
    <FaGlobe className="w-6 h-6 text-red-600" />
  ),
  "Creative Arts and Design": <FaPaintBrush className="w-6 h-6 text-red-600" />,
  Law: <FaBalanceScale className="w-6 h-6 text-red-600" />,
  Education: <FaGraduationCap className="w-6 h-6 text-red-600" />,
  "Architecture and Built Environment": (
    <FaBuilding className="w-6 h-6 text-red-600" />
  ),
  "Logistics and Supply Chain Management": (
    <FaTruck className="w-6 h-6 text-red-600" />
  ),
  "Science and Technology": <FaFlask className="w-6 h-6 text-red-600" />,
  "Hospitality and Tourism": <FaPlane className="w-6 h-6 text-red-600" />,
  "Library and Information Science": (
    <FaBook className="w-6 h-6 text-red-600" />
  ),
  "Media, Journalism, and Communication": (
    <FaNewspaper className="w-6 h-6 text-red-600" />
  ),
  "Philosophy, Politics, and Economics (PPE)": (
    <FaGavel className="w-6 h-6 text-red-600" />
  ),
  "MBBS Courses Abroad": <FaHeartbeat className="w-6 h-6 text-red-600" />,
};

import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import CoursesHero from "@/components/sections/CoursesHero";

// Animation variants for framer-motion
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const CoursesPage = () => {
  const [showContent, setShowContent] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function onScroll() {
      // Show content after user scrolls down 100px (adjust as needed)
      if (window.scrollY > 100) {
        setShowContent(true);
      } else {
        setShowContent(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => setIsMobile(window.innerWidth < 640);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 300,
      offset: 100,
      once: true,
    });
  }, []);
  return (
    <main className=" mx-auto  ">
      {/* Meta Title and Description */}
      <div>
        <CoursesHero />
      </div>

      {/* Combined Courses Section */}
      <div>
        <section
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          data-aos-delay="100"
          className="mb-16  py-10 px-4 sm:px-6 md:px-12 rounded-lg  max-w-4xl mx-auto"
        >
          <h4 className="uppercase text-sm lg:text-base tracking-[0.20em] text-primary text-center font-bold text-shadow-sm">
            — courses —
          </h4>
          <h2 className="text-3xl sm:text-4xl md:text-5xl py-4 font-bold text-black lg:mb-14 mb-4 text-center tracking-wide">
            Explore <span className="text-primary">Top Courses Abroad</span>
          </h2>

          <div className=" rounded-xl shadow-lg overflow-hidden   divide-gray-700">
            {/* Now add the rest of the categories dynamically */}
            {[
              {
                category: "Business Management Courses Abroad",
                image: firimg,
                description:
                  "Unlock global business opportunities with world-class business education. Business management courses abroad offer cutting-edge curriculum, internship programs, and international exposure.",
                undergraduate: [
                  "Business Administration",
                  "Management Studies",
                  "International Business",
                  "Marketing",
                  "Finance",
                  "Accounting",
                ],
                postgraduate: [
                  "Master of Business Administration (MBA)",
                  "Management Studies",
                  "International Business",
                  "Marketing and Digital Strategy",
                  "Business Analytics",
                  "Strategic Management",
                  "Human Resources Management",
                  "Supply Chain Management",
                ],
              },

              {
                category: "Engineering and Technology Programs",
                image: secimg,
                description:
                  "Shape the future with innovative engineering and tech degrees. These programs combine theoretical foundations with hands-on training and research opportunities.",
                undergraduate: [
                  "Mechanical Engineering",
                  "Civil Engineering",
                  "Electrical Engineering",
                  "Computer Science Engineering",
                  "Electronics and Communication Engineering",
                  "Aerospace Engineering",
                ],
                postgraduate: [
                  "Artificial Intelligence and Machine Learning",
                  "Data Science and Big Data",
                  "Robotics",
                  "Software Engineering",
                  "Computer Engineering",
                  "Structural Engineering",
                  "Electrical Power Engineering",
                  "Environmental Engineering",
                ],
              },
              {
                category: "Data Science and Artificial Intelligence",
                image: thiimg,
                description:
                  "Harness the power of data and intelligent systems with future-ready degrees. Learn to analyze, model, and innovate using AI tools across real-world scenarios.",
                undergraduate: [
                  "Data Science",
                  "Artificial Intelligence",
                  "Computer Science",
                  "Software Engineering",
                ],
                postgraduate: [
                  "Master of Data Science",
                  "Artificial Intelligence and Machine Learning",
                  "Data Analytics",
                  "Business Analytics",
                  "Computational Intelligence",
                  "Big Data Engineering",
                  "Cybersecurity and Data Protection",
                ],
              },
              {
                category: "Health and Medical Sciences",
                image: fouimg,
                description:
                  "Build a career in healthcare through programs that blend academic knowledge with clinical practice. Study with experts and contribute to advancing medical care.",
                undergraduate: [
                  "Nursing",
                  "Physiotherapy",
                  "Biomedical Sciences",
                  "Health Sciences",
                  "Public Health",
                  "Pharmacy",
                ],
                postgraduate: [
                  "Public Health",
                  "Advanced Clinical Practice",
                  "Health Informatics",
                  "Pharmacy",
                  "Bioinformatics",
                  "Medical Laboratory Technology",
                  "Health Administration",
                  "Global Health",
                ],
              },
              {
                category: "Social Sciences and Humanities",
                image: fivimg,
                description:
                  "Examine society, culture, and behavior through interdisciplinary learning. These degrees foster critical insight and prepare you for diverse global roles.",
                undergraduate: [
                  "Sociology",
                  "Psychology",
                  "History",
                  "Political Science",
                  "Philosophy",
                  "English Literature",
                  "Geography",
                  "Economics",
                ],
                postgraduate: [
                  "Psychology",
                  "Sociology",
                  "Criminology",
                  "Political Science",
                  "Philosophy",
                  "International Relations",
                  "Development Studies",
                  "Anthropology",
                ],
              },
              {
                category: "Creative Arts and Design",
                image: siximg,
                description:
                  "Turn your creativity into a profession with immersive training in art, design, and digital production. Develop your portfolio and collaborate on real projects.",
                undergraduate: [
                  "Fine Arts",
                  "Graphic Design",
                  "Fashion Design",
                  "Animation",
                  "Interior Design",
                  "Photography",
                ],
                postgraduate: [
                  "Masters in Fine Arts",
                  "Graphic Design and Digital Media",
                  "Animation and Visual Effects",
                  "Fashion Management",
                  "Interior Architecture",
                  "Film Production",
                  "Art History",
                ],
              },
              {
                category: "Law",
                image: sevimg,
                description:
                  "Develop a strong legal foundation through theory, casework, and practice. Study how laws shape society and gain skills for a global legal career.",
                undergraduate: ["LLB (Bachelor of Law)"],
                postgraduate: [
                  "LLM (Master of Law)",
                  "International Business Law",
                  "Criminal Law",
                  "Corporate Law",
                  "Human Rights Law",
                  "Environmental Law",
                  "Taxation Law",
                ],
              },
              {
                category: "Education",
                image: eigimg,
                description:
                  "Prepare to lead and inspire in the classroom with a focus on pedagogy, child development, and hands-on teaching experience.",
                undergraduate: [
                  "Primary Education",
                  "Secondary Education",
                  "Special Education",
                  "Early Childhood Education",
                ],
                postgraduate: [
                  "Masters in Education (M.Ed)",
                  "Educational Leadership and Management",
                  "Special Education",
                  "Educational Psychology",
                  "TESOL (Teaching English to Speakers of Other Languages)",
                  "International Education",
                ],
              },
              {
                category: "Architecture and Built Environment",
                image: ninimg,
                description:
                  "Learn to create sustainable, functional spaces through architecture and design. These programs blend creativity, environmental awareness, and structural skills.",
                undergraduate: [
                  "Architecture",
                  "Construction Management",
                  "Urban Planning",
                  "Interior Architecture",
                ],
                postgraduate: [
                  "Architecture (M.Arch)",
                  "Urban Design",
                  "Construction Project Management",
                  "Landscape Architecture",
                  "Building Information Modeling (BIM)",
                ],
              },
              {
                category: "Logistics and Supply Chain Management",
                image: tenimg,
                description:
                  "Gain expertise in managing global supply systems and operations. Study logistics, procurement, and strategic planning for thriving business environments.",
                undergraduate: [
                  "Logistics and Supply Chain Management",
                  "International Business with Logistics",
                  "Business Operations Management",
                ],
                postgraduate: [
                  "MSc in Logistics and Supply Chain Management",
                  "Supply Chain Analytics",
                  "International Logistics and Transport",
                  "Strategic Supply Chain Management",
                  "Procurement and Logistics",
                ],
              },
              {
                category: "Science and Technology",
                image: eleimg,
                description:
                  "Delve into innovation through science and tech-based learning. Engage with lab work, experimentation, and modern challenges in a tech-driven world.",
                undergraduate: [
                  "Biotechnology",
                  "Environmental Science",
                  "Physics",
                  "Chemistry",
                  "Mathematics",
                  "Biochemistry",
                ],
                postgraduate: [
                  "Environmental Science and Management",
                  "Biotechnology and Molecular Biology",
                  "Physics and Astronomy",
                  "Chemistry (Inorganic, Organic, Analytical)",
                  "Mathematics (Applied/Computational)",
                  "Biochemical Engineering",
                ],
              },
              {
                category: "Hospitality and Tourism",
                image: tweimg,
                description:
                  "Get ready for a career in global service industries with practical training in hospitality, tourism, and management, built on real-world applications.",
                undergraduate: [
                  "Hospitality Management",
                  "Travel and Tourism Management",
                  "Event Management",
                ],
                postgraduate: [
                  "MSc in International Hospitality Management",
                  "Tourism Management",
                  "Events and Conference Management",
                  "Hospitality and Tourism Business Management",
                ],
              },
              {
                category: "Library and Information Science",
                image: thirimg,
                description:
                  "Explore how knowledge is collected, organized, and shared in digital and physical formats. Develop skills to manage libraries, databases, and archives.",
                undergraduate: [],
                postgraduate: [
                  "Library and Information Science",
                  "Information Management",
                  "Digital Libraries",
                  "Archival Studies",
                  "Data Science for Libraries",
                ],
              },
              {
                category: "Media, Journalism, and Communication",
                image: fourimg,
                description:
                  "Learn to craft compelling stories and navigate the modern media landscape. Develop communication skills for careers in journalism, PR, and digital content.",
                undergraduate: [
                  "Media Studies",
                  "Journalism",
                  "Public Relations",
                  "Advertising",
                  "Film Studies",
                ],
                postgraduate: [
                  "Masters in Journalism",
                  "Public Relations and Corporate Communications",
                  "Media and Communication Studies",
                  "Broadcast Journalism",
                  "Digital Media Production",
                ],
              },
              {
                category: "Philosophy, Politics, and Economics (PPE)",
                image: fiftimg,
                description:
                  "Study the intersection of ideas, governance, and economics. This interdisciplinary program equips you with tools to understand and influence complex systems.",
                undergraduate: ["Philosophy", "Politics", "Economics"],
                postgraduate: [
                  "Masters in Philosophy",
                  "Masters in Politics",
                  "Masters in Economics",
                  "Public Policy",
                ],
              },
              {
                category: "MBBS Courses Abroad",
                image: sixtimg,
                description: `"Pursue a globally recognized medical degree and unlock a world of healthcare
opportunities. MBBS courses abroad offer high-quality education, state-of-the-art
facilities, clinical exposure, and international recognition."`,
                undergraduate: [
                  "General Medicine (MBBS)",
                  "Clinical Medicine",
                  "Surgery",
                  "Pediatrics",
                  "Dentistry (BDS)",
                  "Nursing",
                ],
                postgraduate: [
                  "Internal Medicine",
                  "General Surgery",
                  "Pediatrics",
                  "Orthopedics",
                  "Gynecology & Obstetrics",
                  "Cardiology",
                  "Radiology",
                  "Anesthesiology",
                  "Dermatology",
                  "Psychiatry",
                ],
              },
            ].map(
              ({
                image,
                category,
                description,
                undergraduate,
                postgraduate,
              }: any) => (
                <details
                  key={category}
                  className="group border-b border-gray-700"
                  open={false}
                >
                  <summary
                    className="cursor-pointer px-6 py-4 flex items-center justify-between text-black text-xl font-semibold tracking-wide
  hover:bg-red-900/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 select-none bg"
                  >
                    <div className="flex items-center space-x-2">
                      {categoryIcons[category as keyof typeof categoryIcons]}
                      <span className="font-sans">{category}</span>
                    </div>

                    {/* Toggle indicator icon for opening/closing */}
                    <svg
                      className="w-6 h-6 text-primary group-open:hidden transition-transform duration-300"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                    <svg
                      className="w-6 h-6 text-primary hidden group-open:block rotate-180 transition-transform duration-300"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </summary>

                  {/* 🔥 Image first */}
                  <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden shadow-md h-[400px]">
                    <Image
                      src={image}
                      alt={category}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>

                  <div className="px-10 pb-10 pt-6 rounded-b-xl shadow-lg text-primary space-y-6 max-w-5xl mx-auto font-sans transition-all duration-300">
                    {/* 🔥 Description second */}
                    <p className="italic text-base text-center md:text-lg leading-relaxed max-w-prose text-gray-700 font-semibold">
                      {description}
                    </p>

                    {/* 🔥 UG & PG Third */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      {/* Undergraduate */}
                      {undergraduate.length > 0 && (
                        <div className="rounded-lg p-5 shadow-md">
                          <h4 className="text-primary font-semibold mb-4 text-xl border-b border-red-600 pb-2">
                            Undergraduate
                          </h4>
                          <ul className="list-none space-y-3 text-black text-base">
                            {undergraduate.map((item: string) => (
                              <li
                                key={item}
                                className="flex items-center space-x-3 hover:text-red-400 transition-colors duration-200"
                              >
                                <svg
                                  className="w-5 h-5 text-red-500 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Postgraduate */}
                      {postgraduate.length > 0 && (
                        <div className="rounded-lg p-5 shadow-md">
                          <h4 className="text-primary font-semibold mb-4 text-xl border-b border-red-600 pb-2">
                            Postgraduate
                          </h4>
                          <ul className="list-none space-y-3 text-black text-base">
                            {postgraduate.map((item: string) => (
                              <li
                                key={item}
                                className="flex items-center space-x-3 hover:text-red-400 transition-colors duration-200"
                              >
                                <svg
                                  className="w-5 h-5 text-red-500 flex-shrink-0"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </details>
              )
            )}
          </div>
        </section>
      </div>
      {/* countries table are here  */}
      <CountriesCarousel />
      {/* why these countries */}
      <div data-aos="zoom-in-up" data-aos-duration="1000" data-aos-delay="100">
        <WhyTheseCountries />
      </div>
    </main>
  );
};

export default CoursesPage;
