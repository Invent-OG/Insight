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
import AOS from "aos";
import "aos/dist/aos.css";

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
  const router = useRouter();
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden bg-gradient-to-br from-[#1f1c2c] via-[#3a2c56] to-[#928DAB] text-white">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat md:bg-fixed" // fixed only on md+
        style={{
          backgroundImage: "url('/assets/services/services page.webp')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundPositionX: "10%",
        }}
      ></motion.div>

      {/* 💬 Main Content */}
      <motion.div
        data-aos="fade-down"
        data-appear="true"
        data-aos-duration="1000"
        className="max-w-3xl mx-auto space-y-2 z-10"
      >
        {badge && (
          <div className="inline-block bg-red-600 text-white text-xs px-4 py-1 rounded-full font-semibold tracking-wide">
            {badge}
          </div>
        )}

        <h1 className="text-4xl sm:text-4xl lg:text-5xl mt-4 lg:mt-0 lg:font-extrabold font-bold text-white leading-tight drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
          Start Your <span className="text-primary">Global Journey</span> With
          Expert <span className="text-primary">Guidance</span>
        </h1>

        <p className="text-white  text-xl sm:text-base md:text-2xl max-w-2xl lg:py-10 py-6 mx-auto relative z-10 drop-shadow-[0_1px_1px_rgba(0,0,0,0.7)]">
          End-to-end services to make your study abroad dream smooth,
          stress-free, and successful. Explore top universities and scholarships
          across the globe.
        </p>

        <Button
          onClick={() => router.push("/contact")}
          className="text-white lg:text-base text-md px-6 py-3 transition mt-4 bg-primary hover:bg-red-600"
        >
          Get Personalized Assistance Now
        </Button>
      </motion.div>

      {/* 📊 Stats Section with scroll-triggered CountUp */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="lg:mt-16 backdrop-blur-sm mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 gap-4 lg:max-w-5xl w-full max-w-xs px-6 z-10"
      >
        {/* Card 1 */}
        <div className=" rounded-2xl  shadow-md p-6 text-center border border-blue-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-primary mb-2">
            {shouldAnimate && <CountUp end={1000} duration={2} suffix="+" />}
          </p>
          <p className="text-sm font-medium text-gray-200">Students Assisted</p>
        </div>

        {/* Card 2 */}
        <div className=" rounded-2xl  shadow-md p-6 text-center border border-blue-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-primary mb-2">
            {shouldAnimate && <CountUp end={25} duration={2} suffix="+" />}
          </p>
          <p className="text-sm font-medium text-gray-200">Countries Covered</p>
        </div>

        {/* Card 3 */}
        <div className=" rounded-2xl shadow-md p-6 text-center border border-blue-200 hover:scale-105 transition duration-300">
          <p className="text-4xl font-extrabold text-primary mb-2">
            {shouldAnimate && <CountUp end={98} duration={2} suffix="%" />}
          </p>
          <p className="text-sm font-medium text-gray-200">Visa Success Rate</p>
        </div>
      </motion.div>
    </section>
  );
}
