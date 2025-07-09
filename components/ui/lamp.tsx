// "use client";

// import { useRouter } from "next/navigation";
// import React from "react";

// export function LampDemo() {
//   const router = useRouter();

//   return (
//     <section className="min-h-[90vh] grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] px-6 sm:px-12 lg:px-20 py-16 bg-white text-gray-800 font-sans relative overflow-hidden">

//       {/* Left Text Section */}
//       <div className="flex flex-col justify-center gap-10 z-10">
//         <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold max-w-[13ch] leading-tight">
//           <span className="text-primary">Insight Educator</span> Abroad Services
//         </h1>

//         <p className="text-lg sm:text-xl font-light max-w-[40ch] text-gray-600">
//           We provide expert guidance to help students explore global education
//           opportunities with clarity, confidence, and care.
//         </p>

//         <div className="flex flex-col sm:flex-row gap-6">
//           <button
//             onClick={() => router.push("/contact")}
//             className="w-64 h-16 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition"
//           >
//             Get Free Consultation
//           </button>
//         </div>
//       </div>

//       {/* Right Image */}
//       <div className="mt-12 lg:mt-0 z-10">
//         <img
//           src="/assets/about/aboutpage.webp"
//           alt="Study Abroad"
//           className="w-full h-full object-cover rounded-md shadow-xl"
//         />
//       </div>

//       {/* Bottom Wave */}
//       <div className="absolute bottom-0 right-0 w-full z-0">
//         <svg viewBox="0 0 1440 320">
//           <path
//             fill="#ffffff10"
//             d="M0,160L80,160C160,160,320,160,480,154.7C640,149,800,139,960,149.3C1120,160,1280,192,1360,208L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
