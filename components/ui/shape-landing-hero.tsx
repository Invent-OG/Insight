// "use client";

// import { Button } from "./button";
// import { motion } from "framer-motion";
// import CountUp from "react-countup";

// export function HeroGeometric({ badge }: { badge?: string }) {
//   return (
//     <section className="relative bg-white min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden">
//       {/* 🖼️ Custom Background Blurred Decoration */}
//       <div className="absolute inset-0 -z-10">
//         <img
//           src="/assets/about/Our services (about page).webp"
//           alt="Background"
//           className="w-full h-full object-cover opacity-10 blur-sm"
//         />
//         <div className="absolute inset-0 bg-white/90" />
//       </div>

//       {/* 💬 Main Content */}
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="max-w-3xl mx-auto space-y-6"
//       >
//         {badge && (
//           <div className="inline-block bg-red-600 text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">
//             {badge}
//           </div>
//         )}

//         <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
//           Start Your <span className="text-red-600">Global Journey</span> With
//           Expert <span className="text-red-600">Guidance</span>
//         </h1>

//         <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto">
//           End-to-end services to make your study abroad dream smooth,
//           stress-free, and successful. Explore top universities and scholarships
//           across the globe.
//         </p>

//         <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full transition mt-4">
//           Get Personalized Assistance Now
//         </Button>
//       </motion.div>

//       {/* 🧊 Floating Stats Card with CountUp */}
//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ delay: 1.2, duration: 0.8 }}
//         className="mt-16 bg-white shadow-xl border border-gray-200 rounded-xl px-8 py-6 flex flex-wrap gap-8 justify-center max-w-4xl"
//       >
//         <div className="text-center">
//           <p className="text-2xl font-bold text-red-600">
//             <CountUp end={1000} duration={2} suffix="+" />
//           </p>
//           <p className="text-sm text-gray-600">Students Assisted</p>
//         </div>
//         <div className="text-center">
//           <p className="text-2xl font-bold text-red-600">
//             <CountUp end={25} duration={2} suffix="+" />
//           </p>
//           <p className="text-sm text-gray-600">Countries Covered</p>
//         </div>
//         <div className="text-center">
//           <p className="text-2xl font-bold text-red-600">
//             <CountUp end={98} duration={2} suffix="%" />
//           </p>
//           <p className="text-sm text-gray-600">Visa Success Rate</p>
//         </div>
//       </motion.div>
//     </section>
//   );
// }
"use client";

import { Button } from "./button";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export function HeroGeometric({ badge }: { badge?: string }) {
  const [ref, inView] = useInView({ triggerOnce: false });
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (inView) {
      setShouldAnimate(true);
    } else {
      setShouldAnimate(false);
    }
  }, [inView]);
  const router = useRouter()

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-gradient-to-br from-[#1f1c2c] via-[#3a2c56] to-[#928DAB] text-white">
      {/* 🌊 Decorative SVG Top Wave */}
      <svg
        className="absolute top-0 left-0 w-full h-32 sm:h-48 md:h-64 -z-0"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff0d"
          d="M0,160L60,160C120,160,240,160,360,144C480,128,600,96,720,117.3C840,139,960,213,1080,218.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* 🌊 Decorative SVG Bottom Wave */}
      <svg
        className="absolute bottom-0 left-0 w-full h-32 sm:h-48 md:h-64 -z-0 rotate-180"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff0d"
          d="M0,160L60,160C120,160,240,160,360,144C480,128,600,96,720,117.3C840,139,960,213,1080,218.7C1200,224,1320,160,1380,128L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>

      {/* 💬 Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-3xl mx-auto space-y-6 z-10"
      >
        {badge && (
          <div className="inline-block bg-red-600 text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">
            {badge}
          </div>
        )}

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          Start Your <span className="text-primary">Global Journey</span> With
          Expert <span className="text-primary">Guidance</span>
        </h1>

        <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
          End-to-end services to make your study abroad dream smooth,
          stress-free, and successful. Explore top universities and scholarships
          across the globe.
        </p>

        <Button onClick={() => router.push("/contact")} className="text-white px-6 py-3 rounded-full transition mt-4 bg-red-600 hover:bg-red-700">
          Get Personalized Assistance Now
        </Button>
      </motion.div>

      {/* 📊 Stats Section with scroll-triggered CountUp */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-6 z-10"
      >
        {/* Card 1 */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-red-600 mb-2">
            {shouldAnimate && <CountUp end={1000} duration={2} suffix="+" />}
          </p>
          <p className="text-sm font-medium text-gray-700">Students Assisted</p>
        </div>

        {/* Card 2 */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-red-600 mb-2">
            {shouldAnimate && <CountUp end={25} duration={2} suffix="+" />}
          </p>
          <p className="text-sm font-medium text-gray-700">Countries Covered</p>
        </div>

        {/* Card 3 */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6 text-center border border-gray-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-red-600 mb-2">
            {shouldAnimate && <CountUp end={98} duration={2} suffix="%" />}
          </p>
          <p className="text-sm font-medium text-gray-700">Visa Success Rate</p>
        </div>
      </motion.div>
    </section>
  );
}
