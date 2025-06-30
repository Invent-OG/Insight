// "use client";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// const teamMembers = [
//   {
//     name: "Emily Kim",
//     role: "Founder",
//     image:
//       "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=3687&auto=format&fit=crop",
//   },
//   {
//     name: "Michael Steward",
//     role: "Creative Director",
//     image:
//       "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=3870&auto=format&fit=crop",
//   },
//   {
//     name: "Emma Rodriguez",
//     role: "Lead Developer",
//     image:
//       "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Julia Gimmel",
//     role: "UX Designer",
//     image:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "Lisa Anderson",
//     role: "Marketing Manager",
//     image:
//       "https://images.unsplash.com/photo-1655249481446-25d575f1c054?w=900&auto=format&fit=crop&q=60",
//   },
//   {
//     name: "James Wilson",
//     role: "Product Manager",
//     image:
//       "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3687&auto=format&fit=crop",
//   },
// ];

// export default function TeamCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const updateCarousel = (newIndex: number) => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     const index = (newIndex + teamMembers.length) % teamMembers.length;
//     setCurrentIndex(index);
//     setTimeout(() => setIsAnimating(false), 800);
//   };

//   useEffect(() => {
//     const handleKey = (e: KeyboardEvent) => {
//       if (e.key === "ArrowLeft") updateCarousel(currentIndex - 1);
//       if (e.key === "ArrowRight") updateCarousel(currentIndex + 1);
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [currentIndex]);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
//       <h1 className="text-[7.5rem] font-black uppercase tracking-tight absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap pointer-events-none select-none bg-gradient-to-b from-[rgb(8,42,123,0.35)] to-transparent bg-clip-text text-transparent">
//         OUR TEAM
//       </h1>

//       <div className="relative w-full max-w-5xl h-[450px] perspective-[1000px] mt-32">
//         <button
//           className="absolute top-1/2 -translate-y-1/2 left-5 w-10 h-10 rounded-full bg-[rgba(8,42,123,0.6)] text-white flex items-center justify-center hover:bg-black hover:scale-110 transition"
//           onClick={() => updateCarousel(currentIndex - 1)}
//         >
//           ‹
//         </button>

//         <div className="relative w-full h-full flex justify-center items-center transform-style-preserve-3d">
//           {teamMembers.map((member, i) => {
//             const offset =
//               (i - currentIndex + teamMembers.length) % teamMembers.length;
//             let className =
//               "absolute w-[280px] h-[380px] bg-white rounded-[20px] overflow-hidden shadow-xl transition-all duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] cursor-pointer";

//             if (offset === 0) className += " z-10 scale-110";
//             else if (offset === 1)
//               className +=
//                 " z-5 translate-x-[200px] scale-90 opacity-90 grayscale";
//             else if (offset === 2)
//               className +=
//                 " z-1 translate-x-[400px] scale-80 opacity-70 grayscale";
//             else if (offset === teamMembers.length - 1)
//               className +=
//                 " z-5 -translate-x-[200px] scale-90 opacity-90 grayscale";
//             else if (offset === teamMembers.length - 2)
//               className +=
//                 " z-1 -translate-x-[400px] scale-80 opacity-70 grayscale";
//             else className += " opacity-0 pointer-events-none";

//             return (
//               <div
//                 key={i}
//                 className={className}
//                 onClick={() => updateCarousel(i)}
//               >
//                 <Image
//                   src={member.image}
//                   alt={member.name}
//                   width={280}
//                   height={380}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             );
//           })}
//         </div>

//         <button
//           className="absolute top-1/2 -translate-y-1/2 right-5 w-10 h-10 rounded-full bg-[rgba(8,42,123,0.6)] text-white flex items-center justify-center hover:bg-black hover:scale-110 transition"
//           onClick={() => updateCarousel(currentIndex + 1)}
//         >
//           ›
//         </button>
//       </div>

//       <div className="text-center mt-10 transition-opacity duration-500">
//         <h2 className="text-[2.5rem] font-bold text-[rgb(8,42,123)] relative inline-block before:content-[''] before:absolute before:top-full before:left-[-120px] before:w-[100px] before:h-[2px] before:bg-[rgb(8,42,123)] after:content-[''] after:absolute after:top-full after:right-[-120px] after:w-[100px] after:h-[2px] after:bg-[rgb(8,42,123)]">
//           {teamMembers[currentIndex].name}
//         </h2>
//         <p className="text-[#848696] text-[1.5rem] font-medium uppercase tracking-widest -mt-4">
//           {teamMembers[currentIndex].role}
//         </p>
//       </div>

//       <div className="flex justify-center gap-2 mt-14">
//         {teamMembers.map((_, i) => (
//           <div
//             key={i}
//             className={cn(
//               "w-3 h-3 rounded-full bg-[rgba(8,42,123,0.2)] cursor-pointer transition",
//               i === currentIndex && "bg-[rgb(8,42,123)] scale-110"
//             )}
//             onClick={() => updateCarousel(i)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }
