// "use client";

// import { cn } from "@/lib/utils";
// import { Sparkles, Heart, Shield, Globe } from "lucide-react";
// import { motion, Variants } from "framer-motion";

// interface DisplayCardProps {
//   className?: string;
//   icon?: React.ReactNode;
//   title?: string;
//   description?: string;
//   styleType?: "style1" | "style2" | "style3" | "style4" | "style5" | "style6";
// }

// const cardVariants: Variants = {
//   hidden: { opacity: 0, y: 30, scale: 0.95 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     scale: 1,
//     transition: {
//       delay: i * 0.15,
//       type: "spring",
//       stiffness: 100,
//       damping: 20,
//     },
//   }),
//   hover: { scale: 1.05, y: -5, boxShadow: "0 15px 25px rgba(0,0,0,0.15)" },
// };

// function DisplayCard({
//   className,
//   icon,
//   title = "Featured",
//   description = "Discover amazing content",
//   styleType = "style1",
// }: DisplayCardProps) {
//   const baseClasses =
//     " container relative rounded-2xl p-6 cursor-pointer select-none transition-shadow duration-300 flex flex-col justify-center text-center h-full";

//   const iconStyles: Record<string, string> = {
//     style1:
//       "bg-white bg-opacity-25 rounded-full p-5 text-5xl flex items-center justify-center shadow-lg",
//     style2:
//       "bg-yellow-400 rounded-xl p-5 text-white text-5xl flex items-center justify-center shadow-md",
//     style3:
//       "bg-white rounded-full p-5 text-green-700 text-5xl flex items-center justify-center shadow-sm",
//     style4:
//       "border border-gray-600 rounded-full p-5 text-5xl flex items-center justify-center",
//     style5:
//       "rounded-lg p-5 bg-pink-400 text-white text-5xl flex items-center justify-center shadow-md",
//     style6:
//       "relative rounded-full p-5 text-white text-5xl flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-purple-400 before:via-pink-500 before:to-red-500 before:animate-pulse before:blur-xl before:-z-10",
//   };

//   const titleStyles: Record<string, string> = {
//     style1: "text-2xl font-extrabold tracking-wide",
//     style2: "text-2xl font-extrabold tracking-tight",
//     style3: "text-2xl font-extrabold tracking-wide",
//     style4: "text-2xl font-extrabold uppercase tracking-widest",
//     style5: "text-2xl font-extrabold text-center",
//     style6:
//       "text-3xl font-extrabold tracking-wide text-white drop-shadow-[0_0_8px_rgba(255,0,255,0.7)]",
//   };

//   const styles: Record<string, string> = {
//     style1:
//       "bg-gradient-to-r from-purple-600 via-indigo-700 to-blue-700 text-white shadow-lg",
//     style2:
//       "bg-white border border-yellow-400 text-yellow-700 shadow-md hover:shadow-yellow-500",
//     style3: "bg-gradient-to-tr from-green-500 to-teal-600 text-white shadow-xl",
//     style4:
//       "bg-gray-900 text-gray-300 shadow-inner border border-gray-700 px-6 py-8",
//     style5: "bg-pink-100 text-pink-800 border-4 border-pink-300 shadow-lg",
//     style6:
//       "bg-black bg-opacity-40 backdrop-blur-md rounded-3xl p-8 cursor-pointer select-none text-center shadow-lg transition-shadow duration-300",
//   };

//   const descStyles: Record<string, string> = {
//     style1: "text-sm opacity-90 leading-relaxed  ",
//     style2: "text-sm leading-relaxed opacity-95",
//     style3: "text-sm opacity-85",
//     style4: "text-sm text-gray-400 leading-relaxed",
//     style5: "text-sm text-pink-700 opacity-90 text-center",
//     style6: "text-sm text-gray-300 opacity-90 leading-relaxed",
//   };

//   return (
//     <motion.div
//       className={cn(baseClasses, styles[styleType], className)}
//       variants={cardVariants}
//       initial="hidden"
//       animate="visible"
//       whileHover="hover"
//       tabIndex={0}
//       role="group"
//       aria-label={title}
//     >
//       <div
//         className={cn("flex flex-col items-center gap-4 flex-1 justify-center")}
//       >
//         <div className={iconStyles[styleType]}>{icon}</div>
//         <h3 className={titleStyles[styleType]}>{title}</h3>
//         <p className={descStyles[styleType]}>{description}</p>
//       </div>
//     </motion.div>
//   );
// }

// interface DisplayCardsProps {
//   cards?: DisplayCardProps[];
// }

// export default function DisplayCards({ cards }: DisplayCardsProps) {
//   const coreValuesCards: DisplayCardProps[] = [
//     {
//       icon: <Sparkles />,
//       title: "Kind Attitude",
//       description:
//         "We treat every student with a positive attitude, empathy and respect throughout their journey.",
//       styleType: "style1",
//     },
//     {
//       icon: <Shield />,
//       title: "Professionalism",
//       description:
//         "Our expert team ensures timely and reliable support at every step of your application process.",
//       styleType: "style2",
//     },
//     {
//       icon: <Globe />,
//       title: "Clarity",
//       description:
//         "We provide transparent guidance throughout so you always understand your options, requirements, and next steps.",
//       styleType: "style3",
//     },
//     {
//       icon: <Heart />,
//       title: "Trust",
//       description:
//         "We build lasting relationships through honest advice and dependable service you can count on.",
//       styleType: "style4",
//     },
//   ];

//   const displayCards = cards || coreValuesCards;

//   return (
//     <section className="w-full bg-black bg-opacity-20 py-16 px-6">
//       <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-white mb-12">
//         Our <span className="text-primary">Core Values</span>
//       </h2>
//       <div
//         className="
//           max-w-7xl
//           mx-auto
//           grid
//           grid-cols-1
//           sm:grid-cols-2
//           md:grid-cols-2
//           lg:grid-cols-4
//           gap-8
//         "
//       >
//         {displayCards.map((cardProps, index) => (
//           <motion.div
//             key={index}
//             custom={index}
//             variants={cardVariants}
//             initial="hidden"
//             animate="visible"
//             whileHover="hover"
//             className="w-full h-full bg-gray-900" // 👈 Add your desired bg color here
//           >
//             <DisplayCard {...cardProps} className="h-full" />
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }
