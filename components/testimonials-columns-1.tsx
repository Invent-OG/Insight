// "use client";
// import React from "react";
// import { motion } from "motion/react";

// export const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: {
//     text: string;
//     image: string;
//     name: string;
//     role: string;
//   }[];
//   duration?: number;
// }) => {
//   return (
//     <div className={props.className}>
//       <motion.div
//         animate={{
//           y: "-50%",
//         }}
//         transition={{
//           duration: props.duration || 10,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "loop",
//         }}
//         className="flex flex-col gap-6 pb-6"
//       >
//         {[...new Array(2)].map((_, index) => (
//           <React.Fragment key={index}>
//             {props.testimonials.map(({ text, image, name, role }, i) => (
//               <div
//                 key={i}
//                 className="p-10 rounded-3xl border border-gray-300 shadow-lg shadow-primary/10 max-w-xs w-full bg-white text-black"
//               >
//                 <div>{text}</div>
//                 <div className="flex items-center gap-2 mt-5">
//                   <img
//                     width={40}
//                     height={40}
//                     src={image}
//                     alt={name}
//                     className="h-10 w-10 rounded-full"
//                   />
//                   <div className="flex flex-col">
//                     <div className="font-medium tracking-tight leading-5">
//                       {name}
//                     </div>
//                     <div className="leading-5 opacity-60 tracking-tight">
//                       {role}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
// "use client";
// import React from "react";
// import { motion } from "motion/react";
// import { PlayCircle } from "lucide-react";

// export const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: {
//     text: string;
//     image: string;
//     name: string;
//     role: string;
//     youtubeUrl?: string | null;
//     wrapper?: ({ children }: { children: React.ReactNode }) => React.ReactElement;
//   }[];
//   duration?: number;
// }) => {
//   return (
//     <div className={props.className}>
//       <motion.div
//         animate={{
//           y: "-50%",
//         }}
//         transition={{
//           duration: props.duration || 10,
//           repeat: Infinity,
//           ease: "linear",
//           repeatType: "loop",
//         }}
//         className="flex flex-col gap-6 pb-6"
//       >
//         {[...new Array(2)].map((_, index) => (
//           <React.Fragment key={index}>
//             {props.testimonials.map(
//               ({ text, image, name, role, youtubeUrl, wrapper }, i) => {
//                 const CardContent = (
//                   <div className="relative p-10 rounded-3xl border border-gray-300 shadow-lg shadow-primary/10 max-w-xs w-full bg-white text-black">
//                     <div>{text}</div>
//                     <div className="flex items-center gap-2 mt-5">
//                       <img
//                         width={40}
//                         height={40}
//                         src={image}
//                         alt={name}
//                         className="h-10 w-10 rounded-full"
//                       />
//                       <div className="flex flex-col">
//                         <div className="font-medium tracking-tight leading-5">
//                           {name}
//                         </div>
//                         <div className="leading-5 opacity-60 tracking-tight">
//                           {role}
//                         </div>
//                       </div>
//                     </div>
//                     {youtubeUrl && (
//                       <div className="absolute bottom-3 right-3 bg-black/70 p-2 rounded-full text-white">
//                         <PlayCircle className="w-5 h-5" />
//                       </div>
//                     )}
//                   </div>
//                 );

//                 return (
//                   <div key={i}>
//                     {wrapper ? wrapper({ children: CardContent }) : CardContent}
//                   </div>
//                 );
//               }
//             )}
//           </React.Fragment>
//         ))}
//       </motion.div>
//     </div>
//   );
// };
"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
    youtubeUrl?: string | null;
  }[];
  duration?: number;
}) => {
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
    );
    return videoIdMatch
      ? `https://www.youtube.com/embed/${videoIdMatch[1]}`
      : null;
  };

  const y = useMotionValue(0);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const pauseScroll = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    setIsPaused(true);
  };

  const resumeScroll = (delay = 10000) => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      setIsPaused(false);
      setExpandedIndex(null);
    }, delay);
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
      pauseScroll();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
      resumeScroll(1000); // resume after 1s
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      if (expandedIndex === index) {
        setExpandedIndex(null);
        resumeScroll(1000);
      } else {
        setExpandedIndex(index);
        pauseScroll();
        resumeScroll(10000); // resume after 10s
      }
    }
  };

  useEffect(() => {
    return () => {
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, []);

  return (
    <div className={props.className}>
      <motion.div
        style={{ y }}
        animate={isPaused ? { y: y.get() } : { y: "-50%" }}
        transition={
          isPaused
            ? { duration: 0 }
            : {
                duration: props.duration || 10,
                repeat: Infinity,
                ease: "linear",
                repeatType: "loop",
              }
        }
        className="flex flex-col gap-6 pb-6"
      >
        {[...new Array(2)].map((_, loopIndex) => (
          <React.Fragment key={loopIndex}>
            {props.testimonials.map(
              ({ text, image, name, role, youtubeUrl }, i) => {
                const embedUrl = youtubeUrl
                  ? getYouTubeEmbedUrl(youtubeUrl)
                  : null;

                const actualIndex = `${i}-${loopIndex}`;
                const isHovered = hoveredIndex === i;
                const isExpanded = expandedIndex === i;
                const shouldClamp = text.length > 160;
                const showFullText = isHovered || isExpanded;

                return (
                  <div
                    key={actualIndex}
                    onMouseEnter={() => handleMouseEnter(i)}
                    onMouseLeave={() => handleMouseLeave()}
                    onClick={() => handleClick(i)}
                    className="cursor-pointer p-6 rounded-3xl border border-gray-200 shadow-md shadow-primary/5 max-w-xs w-full bg-white text-black relative flex flex-col hover:shadow-lg transition duration-300"
                  >
                    {/* YouTube Embed */}
                    {embedUrl && (
                      <div className="w-full aspect-video mb-4">
                        <iframe
                          src={embedUrl}
                          title={name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full rounded-xl border border-black/10"
                        />
                      </div>
                    )}

                    {/* Name & Role */}
                    <div className="flex items-center gap-3 mb-3">
                      <img
                        width={40}
                        height={40}
                        src={image}
                        alt={name}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div>
                        <div className="font-semibold text-sm">{name}</div>
                        <div className="text-gray-500 text-xs">{role}</div>
                      </div>
                    </div>

                    {/* Description */}
                    <div
                      className={`text-sm text-gray-700 ${
                        !showFullText && shouldClamp
                          ? "line-clamp-2 overflow-hidden"
                          : ""
                      }`}
                    >
                      {text}
                    </div>
                  </div>
                );
              }
            )}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};





