"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import uk from "@/public/assets/UK.png";
import usa from "@/public/assets/country/Usa.jpg";
import ireland from "@/public/assets/country/Ireland.jpg";
import canada from "@/public/assets/country/Canada (1).png";
import australia from "@/public/assets/country/Australia.png";
import newzealand from "@/public/assets/country/New Zealand (1).png";
import france from "@/public/assets/country/France.jpg";
import germany from "@/public/assets/country/Germany (1).png";
import uae from "@/public/assets/country/UAE (1).png";
import singapore from "@/public/assets/country/Singapore.png";
import malaysia from "@/public/assets/country/Malaysia.png";
import poland from "@/public/assets/country/Poland.png";
import sweden from "@/public/assets/country/Sweden.png";
import latvia from "@/public/assets/country/Latvia.jpg";
import lithuania from "@/public/assets/country/Lithuania .jpg";
import malta from "@/public/assets/country/malta.jpg";
import netherland from "@/public/assets/country/Netherland.jpg";
import finland from "@/public/assets/country/Finland.jpg";

// Type for countries
type Country = {
  title: string;
  description: string;
  image: any;
};

// Countries data
const countries: Country[] = [
  {
    title: "Study in UK",
    description: `Home to renowned institutions like Oxford and Cambridge, the UK offers rigorous programs, short duration courses, and a strong academic tradition. Cities in the UK offers a student-friendly atmosphere, blending culture and connectivity. They offer a 1-year master’s degree with no compromise on academic standards, along with a 2-year stay-back option. With part-time work opportunities, the UK is ideal for career-focused learners.`,
    image: uk,
  },
  {
    title: "Study in the USA",
    description: `The U.S. is a top destination for international students, offering prestigious universities like Harvard and MIT, a flexible education system, research projects and internship opportunities. Its diverse lifestyle—from city campuses to quiet towns—enhances the student experience. Offering a 2-year master's program and a 3-year stay-back option, students can gain valuable work experience after graduation through Optional Practical Training (OPT) and STEM extensions.`,
    image: usa,
  },
  {
    title: "Study in Ireland",
    description: `Ireland is home to prestigious universities like Trinity College Dublin and University College Dublin, known for academic excellence. With vibrant cities, affordable tuition, and a welcoming atmosphere, it offers an exceptional student experience. Ireland also provides Post-Graduation Work Permits, making it a great choice for long-term career and settlement opportunities.`,
    image: ireland,
  },
  {
    title: "Study in Canada",
    description: `Canada stands out for its world-class universities like the University of Toronto and McGill, inclusive society, and high standard of living. Affordable tuition, multicultural cities, and a welcoming environment make it a top choice. Post-Graduation Work Permits (up to 3 years) and clear Permanent Residency pathways support long-term settlement.`,
    image: canada,
  },
  {
    title: "Study in Australia",
    description: `Australia offers globally ranked universities, practical learning, and vibrant student life in cities like Sydney and Melbourne. Students benefit from part-time work rights and can apply for post-study work visas of up to 4 years. Known for its beautiful landscapes and sunny climate, Australia blends quality education with a laid-back lifestyle.`,
    image: australia,
  },
  {
    title: "Study in New Zealand",
    description: `New Zealand provides a peaceful and research-driven education experience at institutions like the University of Auckland. With its stunning scenery and friendly, diverse communities, it offers a balanced lifestyle. Students can work during studies and stay up to 3 years post-graduation, making it a great option for academic and personal growth.`,
    image: newzealand,
  },
  {
    title: "Study in France",
    description: `With top-ranked universities, affordable tuition, and diverse English and French-taught programs, France welcomes international students from across the globe. Experience a rich cultural heritage, vibrant student life, and access to leading industries. Whether you're pursuing undergraduate, postgraduate, or research degrees, France offers academic excellence and career opportunities. Scholarships and visa support make studying here more accessible than ever. Begin your global journey with an education that sets you apart.`,
    image: france,
  },
  {
    title: "Study in Germany",
    description: `Germany is known for top public universities like TUM and Heidelberg that offer tuition-free or low-cost education in engineering, science, and more. With modern infrastructure, English programs, and strong job prospects, it attracts career-focused students. Learning German is an added advantage, as it opens doors to more job opportunities and integration into the local culture. Graduates can stay 18 months for job search and pursue EU Blue Card residency.`,
    image: germany,
  },
  {
    title: "Study in the UAE",
    description: `The UAE offers international-standard education in a safe, multicultural setting with campuses in Dubai and Abu Dhabi. With strong programs in business, AI, and engineering, students gain practical skills and global exposure. High living standards, tax-free income, and strong career prospects make it a dynamic choice.`,
    image: uae,
  },
  {
    title: "Study in Singapore",
    description: `Singapore is Asia’s leading education hub, home to world-class institutions like NUS and NTU. It offers cutting-edge programs in tech, business, and life sciences, alongside a clean, safe environment. With strong industry links and high employability, Singapore prepares students for success in the fast-growing Asia-Pacific region.`,
    image: singapore,
  },
  {
    title: "Study in Malaysia",
    description: `Malaysia offers globally recognized degrees at lower costs, with English widely spoken and vibrant multicultural campuses. Universities like the University of Malaya offer dual-degree programs and industry collaboration. Its central location and welcoming environment make it a great gateway to careers in Asia.`,
    image: malaysia,
  },
  {
    title: "Study in Poland",
    description: `Poland combines affordable living with top universities offering strong programs in various fields. Known for its vibrant student life and historic cities, Poland is an attractive destination for international students.`,
    image: poland,
  },
  {
    title: "Study in Sweden",
    description: `Sweden is renowned for its world-class education, innovation, and sustainability focus. With English widely spoken, numerous English-taught programs, and a high quality of life, Students enjoy modern cities, scholarship opportunities, and post-study work options, making Sweden ideal for future innovators and researchers.`,
    image: sweden,
  },
  {
    title: "Study in Latvia",
    description: `Latvia offers a range of quality, affordable education options, especially in fields like engineering, IT, and business. It’s an emerging destination with a unique cultural experience and a growing international student community.`,
    image: latvia,
  },
  {
    title: "Study in Lithuania",
    description: `Lithuania offers high-quality, low-cost education in a vibrant, historical setting. Known for strong academic programs in science, technology, and arts, Lithuania is a hidden gem for international students.`,
    image: lithuania,
  },
  {
    title: "Study in Malta",
    description: `Malta offers top-quality education in English, with a Mediterranean lifestyle that combines rich history, vibrant culture, and affordable living. It’s perfect for students seeking an English-speaking environment in a stunning location.`,
    image: malta,
  },
  {
    title: "Study in Netherlands",
    description: `The Netherlands is famous for its innovation and top-tier universities, many of which offer English-taught programs. With a highly international student population, it’s an ideal destination for career-focused students.`,
    image: netherland,
  },
  {
    title: "Study in Finland",
    description: `Finland is known for its innovative education system, offering excellent universities with a focus on research and creativity. With a high quality of life and diverse post-graduation opportunities, Finland is a top choice for international students.`,
    image: finland,
  },
];

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
};

const Page = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 100) setShowContent(true);
      else setShowContent(false);
    }
    handleScroll(); // initial check
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <>
        {/* Hero Section - Full Width */}
        <section
          className="w-full min-h-screen sm:h-80 md:h-96 flex justify-center items-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden bg-fixed"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1594734415578-00fc9540929b?q=80&w=1470&auto=format&fit=crop')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-sans select-none text-white drop-shadow-lg"
            style={{ willChange: "opacity, transform" }}
          >
            Study <span className="text-primary">Abroad</span> Destinations
          </motion.h1>

          {/* Scroll down indicator */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14M19 12l-7 7-7-7" />
            </svg>
          </div>
        </section>

        {/* Cards Section - Container with Grid */}
        <section
          className="w-full mx-auto min-h-screen py-16 lg:py-20 flex justify-center gap-10 bg-black bg-cover bg-center px-4 sm:px-6 md:px-12"
          style={
            {
              // backgroundImage: `url("https://www.transparenttextures.com/patterns/stardust.png")`, // You can replace this with any texture you like
            }
          }
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-gray-200">
            {countries.map((country, index) => {
              return (
                <motion.div
                  key={country.title}
                  className="relative w-full max-w-xs sm:max-w-sm md:max-w-xs h-80 cursor-pointer mx-auto"
                  onClick={() => toggleExpand(index)}
                >
                  {/* Bottom Card */}
                  <div className="absolute top-4 left-4 w-full h-full bg-[#181818] rounded-xl shadow-lg"></div>
                  {/* Middle Card */}
                  <div className="absolute top-2 left-2 w-full h-full bg-[#292929] rounded-xl shadow-lg"></div>
                  {/* Top Card */}
                  <motion.div
                    className="relative w-full h-full rounded-xl shadow-xl flex flex-col items-center justify-center p-4 bg-cover bg-center border border-gray-800 hover:border-primary/50 hover:shadow-primary/80 transition-all duration-300"
                    style={{
                      backgroundImage: `url("https://images.unsplash.com/photo-1690983320828-c01b88baacb0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0")`,
                    }}
                    whileHover={{ y: -10 }}
                  >
                    {/* Overlay to dim the background and add contrast */}
                    <div className="absolute inset-0 bg-black/50 rounded-xl"></div>

                    {/* Image with Glow Effect */}
                    <div className="relative w-24 h-24 mb-4 z-10">
                      <div className="absolute inset-0 rounded-full bg-white/90 opacity-20 blur-lg animate-pulse"></div>
                      <Image
                        src={country.image}
                        alt={country.title}
                        width={96}
                        height={96}
                        className="relative rounded-lg shadow-md object-cover"
                      />
                    </div>

                    <h2 className="text-xl font-bold text-gray-300 text-center z-10">
                      {country.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-200 text-center z-10">
                      {expandedIndex === index
                        ? country.description
                        : truncateText(country.description, 100)}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>
      </>
    </>
  );
};

export default Page;
