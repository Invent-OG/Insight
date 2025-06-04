"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full text-slate-950 dark:text-white"
        viewBox="0 0 696 316"
        fill="none"
      >
        <title>Background Paths</title>

        {/* Define gradients for each path with solid black start/end */}
        <defs>
          {paths.map((path) => (
            <linearGradient
              key={"grad-" + path.id}
              id={`stroke-gradient-${path.id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#000000" />
              <stop offset="50%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#000000" />
            </linearGradient>
          ))}
        </defs>

        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`url(#stroke-gradient-${path.id})`}
            strokeWidth={path.width}
            strokeOpacity={1}
            initial={{ pathLength: 0.3, opacity: 0.6 }}
            animate={{
              pathLength: 1,
              opacity: [0.3, 0.6, 0.3],
              pathOffset: position === 1 ? [0, 1, 0] : [1, 0, 1],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export function BackgroundPaths({
  title = "INSIGHT EDUCATOR & ABROAD SERVICES",
  description = "",
}: {
  title?: string;
  description?: string;
}) {
  const words = title.split(" ");
  const highlightWords = ["EDUCATOR", "ABROAD"];

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black dark:bg-black">
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold leading-relaxed  text-white p-2 mb-8 tracking-tighter">
            {words.map((word, wordIndex) => {
              // Check if the word should be highlighted
              const isHighlighted = highlightWords.includes(word.toUpperCase());
              const textClass = isHighlighted
                ? "text-primary" // custom color
                : "text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80";

              return (
                <span key={wordIndex} className="inline-block mr-4 last:mr-0">
                  {word.split("").map((letter, letterIndex) => (
                    <motion.span
                      key={`${wordIndex}-${letterIndex}`}
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: wordIndex * 0.1 + letterIndex * 0.03,
                        type: "spring",
                        stiffness: 150,
                        damping: 25,
                      }}
                      className={`inline-block ${textClass}`}
                    >
                      {letter}
                    </motion.span>
                  ))}
                </span>
              );
            })}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8">
            {description}
          </p>

          <div
            className="inline-block group relative bg-gradient-to-b from-white/10 to-white/5 
                        dark:from-white/10 dark:to-white/5 p-px rounded-2xl backdrop-blur-lg 
                        overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          ></div>
        </motion.div>
      </div>
    </div>
  );
}
