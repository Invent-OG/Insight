// "use client";

// import Image, { StaticImageData } from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "../ui/button";

// interface FlipCardProps {
//   id: string;
//   imageSrc: StaticImageData;
//   title: string;
//   backDescription: string;
// }

// const FlipCard: React.FC<FlipCardProps> = ({
//   id,
//   imageSrc,
//   title,
//   backDescription,
// }) => {
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [animateDesc, setAnimateDesc] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   const truncateLength = 150;

//   const displayDescription =
//     backDescription.length > truncateLength && !showFullDesc
//       ? backDescription.slice(0, truncateLength) + "..."
//       : backDescription;

//   useEffect(() => {
//     setAnimateDesc(true);
//     const timeout = setTimeout(() => setAnimateDesc(false), 700);
//     return () => clearTimeout(timeout);
//   }, [displayDescription]);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const router = useRouter();

//   // swipe detection
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const deltaX = touchEndX.current - touchStartX.current;
//     if (Math.abs(deltaX) > 50) {
//       setFlipped((prev) => !prev);
//     }
//   };

//   return (
//     <>
//       <div
//         className="flip-card w-72 h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
//         tabIndex={0}
//         aria-label={`Flip card for ${title}`}
//         onTouchStart={isMobile ? handleTouchStart : undefined}
//         onTouchEnd={isMobile ? handleTouchEnd : undefined}
//       >
//         <div
//           className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg
//             ${isMobile && flipped ? "rotate-y-180" : ""}
//             ${!isMobile ? "hover:rotate-y-180" : ""}
//           `}
//         >
//           {/* Front Side */}
//           <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
//             <Image
//               src={imageSrc}
//               alt={`Image of ${title}`}
//               className="w-full h-full object-cover filter brightness-80 transition-transform duration-500 hover:scale-110"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
//             <h1 className="absolute bottom-0 w-full bg-gradient-to-b from-black/5 h-10 to-black text-white text-lg font-semibold drop-shadow-md">
//               {title}
//             </h1>
//           </div>

//           {/* Back Side */}
//           <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-transparent backdrop-blur-sm border p-6 box-border rounded-lg shadow-md flex flex-col justify-center items-center text-center text-white overflow-hidden">
//             <p
//               className={`text-base leading-relaxed transition duration-700 ease-in-out transform hover:scale-105 text-justify ${
//                 animateDesc ? "animate-fadeSlideIn" : ""
//               }`}
//               style={{
//                 lineHeight: 1.8,
//                 overflowWrap: "break-word",
//                 wordBreak: "break-word",
//               }}
//             >
//               {displayDescription}
//             </p>
//             {backDescription.length > truncateLength && (
//               <Button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   if (!showFullDesc) {
//                     router.push("/countries");
//                   } else {
//                     setShowFullDesc(false);
//                   }
//                 }}
//                 className="mt-6 bg-transparent hover:bg-primary/20 text-white font-semibold px-5 py-2 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300 select-none"
//                 aria-label={showFullDesc ? "Show less" : "Read more"}
//                 style={{ wordSpacing: "0.15em" }}
//               >
//                 {showFullDesc ? "Show Less" : "Read More"}
//               </Button>
//             )}
//           </div>
//         </div>

//         <style jsx>{`
//           .perspective-1000 {
//             perspective: 1000px;
//           }
//           .transform-style-preserve-3d {
//             transform-style: preserve-3d;
//           }
//           .backface-hidden {
//             backface-visibility: hidden;
//           }
//           .rotate-y-180 {
//             transform: rotateY(180deg);
//           }
//           @keyframes fadeSlideIn {
//             0% {
//               opacity: 0;
//               transform: translateY(10px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fadeSlideIn {
//             animation: fadeSlideIn 0.7s ease forwards;
//           }

//           /* Hide scrollbars on flip-card-back */
//           .flip-card-back::-webkit-scrollbar {
//             display: none;
//           }
//           .flip-card-back {
//             -ms-overflow-style: none; /* IE and Edge */
//             scrollbar-width: none; /* Firefox */
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default FlipCard;

// "use client";

// import Image, { StaticImageData } from "next/image";
// import React, { useState, useEffect, useRef } from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "../ui/button";

// interface FlipCardProps {
//   imageSrc: string;
//   title: string;
//   backDescription: string;
//   id: string;
// }


// const FlipCard: React.FC<FlipCardProps> = ({
//   id,
//   imageSrc,
//   title,
//   backDescription,
// }) => {
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [animateDesc, setAnimateDesc] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);
//   const [flipped, setFlipped] = useState(false);

//   const truncateLength = 150;

//   const displayDescription =
//     backDescription.length > truncateLength && !showFullDesc
//       ? backDescription.slice(0, truncateLength) + "..."
//       : backDescription;

//   useEffect(() => {
//     setAnimateDesc(true);
//     const timeout = setTimeout(() => setAnimateDesc(false), 700);
//     return () => clearTimeout(timeout);
//   }, [displayDescription]);

//   useEffect(() => {
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     checkMobile();
//     window.addEventListener("resize", checkMobile);
//     return () => window.removeEventListener("resize", checkMobile);
//   }, []);

//   const router = useRouter();

//   // swipe detection
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);

//   const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchStartX.current = e.changedTouches[0].clientX;
//   };

//   const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
//     touchEndX.current = e.changedTouches[0].clientX;
//     handleSwipe();
//   };

//   const handleSwipe = () => {
//     const deltaX = touchEndX.current - touchStartX.current;
//     if (Math.abs(deltaX) > 50) {
//       setFlipped((prev) => !prev);
//     }
//   };

//   return (
//     <>
//       <div
//         className="flip-card w-72 h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
//         tabIndex={0}
//         aria-label={`Flip card for ${title}`}
//         onTouchStart={isMobile ? handleTouchStart : undefined}
//         onTouchEnd={isMobile ? handleTouchEnd : undefined}
//       >
//         <div
//           className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg
//             ${isMobile && flipped ? "rotate-y-180" : ""}
//             ${!isMobile ? "hover:rotate-y-180" : ""}
//           `}
//         >
//           {/* Front Side */}
//           <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg flex justify-center items-center ">
//             <Image
//               src={imageSrc}
//               alt={`Image of ${title}`}
//               className="w-full h-full object-cover filter brightness-80 transition-transform duration-500 hover:scale-110"
//               priority
//             />
//             <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
//             <h1 className="absolute bottom-0 w-full bg-gradient-to-b from-black/5 h-10 to-black text-white text-lg font-semibold drop-shadow-md">
//               {title}
//             </h1>
//           </div>

//           {/* Back Side */}
//           <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-transparent border border-primary/20 p-6  rounded-lg shadow-md flex flex-col justify-center items-center text-center text-black overflow-hidden">
//             {/* Background Texture Layer */}
//             {/* <div
//               className="absolute inset-0 z-0 rounded-lg"
//               style={{
//                 backgroundImage: "url('/assets/textures/countrycard.avif')",
//                 backgroundSize: "cover",
//                 backgroundRepeat: "repeat",
//                 opacity: 0.9, // control texture visibility
//                 pointerEvents: "none",
//               }}
//             /> */}

//             {/* Content Layer */}
//             <div className="relative z-10 w-full h-full flex flex-col justify-center">
//               <p
//                 className={`text-base leading-relaxed transition duration-700 ease-in-out transform hover:scale-105 text-justify ${
//                   animateDesc ? "animate-fadeSlideIn" : ""
//                 }`}
//                 style={{
//                   lineHeight: 1.8,
//                   overflowWrap: "break-word",
//                   wordBreak: "break-word",
//                 }}
//               >
//                 {displayDescription}
//               </p>

//               {backDescription.length > truncateLength && (
//                 <Button
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     if (!showFullDesc) {
//                       router.push("/countries");
//                     } else {
//                       setShowFullDesc(false);
//                     }
//                   }}
//                   className="mt-6 bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-2 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300 select-none"
//                   aria-label={showFullDesc ? "Show less" : "Read more"}
//                   style={{ wordSpacing: "0.15em" }}
//                 >
//                   {showFullDesc ? "Show Less" : "Read More"}
//                 </Button>
//               )}
//             </div>
//           </div>
//         </div>

//         <style jsx>{`
//           .perspective-1000 {
//             perspective: 1000px;
//           }
//           .transform-style-preserve-3d {
//             transform-style: preserve-3d;
//           }
//           .backface-hidden {
//             backface-visibility: hidden;
//           }
//           .rotate-y-180 {
//             transform: rotateY(180deg);
//           }
//           @keyframes fadeSlideIn {
//             0% {
//               opacity: 0;
//               transform: translateY(10px);
//             }
//             100% {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }
//           .animate-fadeSlideIn {
//             animation: fadeSlideIn 0.7s ease forwards;
//           }

//           /* Hide scrollbars on flip-card-back */
//           .flip-card-back::-webkit-scrollbar {
//             display: none;
//           }
//           .flip-card-back {
//             -ms-overflow-style: none; /* IE and Edge */
//             scrollbar-width: none; /* Firefox */
//           }
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default FlipCard;
"use client";

import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

interface FlipCardProps {
  imageSrc: string;
  title: string;
  backDescription: string;
  id: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  id,
  imageSrc,
  title,
  backDescription,
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [flipped, setFlipped] = useState(false);

  const truncateLength = 150;

  const displayDescription =
    backDescription.length > truncateLength && !showFullDesc
      ? backDescription.slice(0, truncateLength) + "..."
      : backDescription;

  useEffect(() => {
    setAnimateDesc(true);
    const timeout = setTimeout(() => setAnimateDesc(false), 700);
    return () => clearTimeout(timeout);
  }, [displayDescription]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const router = useRouter();

  // swipe detection
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };
  const handleSwipe = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      setFlipped((prev) => !prev);
    }
  };

  return (
    <>
      <div
        className="flip-card w-72 h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
        tabIndex={0}
        aria-label={`Flip card for ${title}`}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        <div
          className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg
            ${isMobile && flipped ? "rotate-y-180" : ""}
            ${!isMobile ? "hover:rotate-y-180" : ""}
          `}
        >
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
            <Image
              src={imageSrc}
              alt={`Image of ${title}`}
              width={500}
              height={300}
              className="w-full h-full object-cover filter brightness-80 transition-transform duration-500 hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>
            <h1 className="absolute bottom-0 w-full bg-gradient-to-b from-black/5 h-10 to-black text-white text-lg font-semibold drop-shadow-md">
              {title}
            </h1>
          </div>

          {/* Back Side */}
          <div className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-transparent border border-primary/20 p-6 rounded-lg shadow-md flex flex-col justify-center items-center text-center text-black overflow-hidden">
            <div className="relative z-10 w-full h-full flex flex-col justify-center">
              <p
                className={`text-base leading-relaxed transition duration-700 ease-in-out transform hover:scale-105 text-justify ${
                  animateDesc ? "animate-fadeSlideIn" : ""
                }`}
                style={{
                  lineHeight: 1.8,
                  overflowWrap: "break-word",
                  wordBreak: "break-word",
                }}
              >
                {displayDescription}
              </p>

              {backDescription.length > truncateLength && (
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!showFullDesc) {
                      router.push("/countries");
                    } else {
                      setShowFullDesc(false);
                    }
                  }}
                  className="mt-6 bg-primary hover:bg-primary/80 text-white font-semibold px-5 py-2 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300 select-none"
                  aria-label={showFullDesc ? "Show less" : "Read more"}
                  style={{ wordSpacing: "0.15em" }}
                >
                  {showFullDesc ? "Show Less" : "Read More"}
                </Button>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-preserve-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          .rotate-y-180 {
            transform: rotateY(180deg);
          }
          @keyframes fadeSlideIn {
            0% {
              opacity: 0;
              transform: translateY(10px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeSlideIn {
            animation: fadeSlideIn 0.7s ease forwards;
          }

          /* Hide scrollbars on flip-card-back */
          .flip-card-back::-webkit-scrollbar {
            display: none;
          }
          .flip-card-back {
            -ms-overflow-style: none; /* IE and Edge */
            scrollbar-width: none; /* Firefox */
          }
        `}</style>
      </div>
    </>
  );
};

export default FlipCard;
