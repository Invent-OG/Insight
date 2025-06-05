// "use client";

// import Image, { StaticImageData } from "next/image";
// import React, { useState, useEffect } from "react";

// interface FlipCardProps {
//   imageSrc: StaticImageData;
//   title: string;
//   backDescription: string;
// }

// const FlipCard: React.FC<FlipCardProps> = ({
//   imageSrc,
//   title,
//   backDescription,
// }) => {
//   const [flipped, setFlipped] = useState(false);
//   const [showFullDesc, setShowFullDesc] = useState(false);
//   const [animateDesc, setAnimateDesc] = useState(false);

//   const handleClick = () => {
//     setFlipped(!flipped);
//     setShowFullDesc(false);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
//     if (e.key === "Enter" || e.key === " ") {
//       e.preventDefault();
//       setFlipped(!flipped);
//       setShowFullDesc(false);
//     }
//   };

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

//   return (
//     <>
//       <div
//         className=" flip-card w-72  h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
//         onClick={handleClick}
//         tabIndex={0}
//         onKeyDown={handleKeyDown}
//         role="button"
//         aria-pressed={flipped}
//         aria-label={`Flip card for ${title}`}
//       >
//         <div
//           className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg ${
//             flipped ? "rotate-y-180" : ""
//           }`}
//         >
//           {/* Front Side */}
//           <div className="flip-card-front absolute  w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg flex justify-center items-center ">
//             {/* Image */}
//             <Image
//               src={imageSrc}
//               alt={`Image of ${title}`}
//               className="w-full h-full object-cover  filter brightness-80 transition-transform duration-500 hover:scale-110"
//               priority
//             />

//             {/* Diagonal Shadow */}
//             <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>

//             {/* Title */}
//             <h1 className="absolute bottom-0 w-full bg-gradient-to-b from-black/5 h-10  to-black text-white text-lg font-semibold drop-shadow-md">
//               {title}
//             </h1>
//           </div>

//           {/* Back Side */}
//           <div
//             className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-transparent backdrop-blur-sm border p-6 box-border rounded-lg shadow-md flex flex-col justify-center items-center text-center text-white overflow-auto scrollbar-hide"
//             onClick={(e) => e.stopPropagation()} // prevent closing when clicking inside
//             onMouseLeave={() => setFlipped(false)} // add this line to flip back on hover out
//           >
//             <p
//               className={`text-base leading-relaxed  transition duration-700 ease-in-out transform hover:scale-105 text-justify ${
//                 animateDesc ? "animate-fadeSlideIn" : ""
//               }`}
//               style={{
//                 lineHeight: 1.8,
//                 overflowWrap: "break-word",
//                 wordBreak: "break-word",
//                 // wordSpacing: "0.1em" // optional, uncomment if you want a bit spacing
//               }}
//             >
//               {displayDescription}
//             </p>
//             {backDescription.length > truncateLength && (
//               <button
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   setShowFullDesc(!showFullDesc);
//                 }}
//                 className=" mt-20 text-white font-semibold px-5 py-2 rounded-md border focus:outline-none focus:ring-2  transition-colors duration-300 select-none"
//                 aria-label={showFullDesc ? "Show less" : "Read more"}
//                 style={{ wordSpacing: "0.15em" }}
//               >
//                 {showFullDesc ? "Show Less" : "Read More"}
//               </button>
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
//         `}</style>
//       </div>
//     </>
//   );
// };

// export default FlipCard;

"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

interface FlipCardProps {
  id: string; // unique id for the card
  imageSrc: StaticImageData;
  title: string;
  backDescription: string;
  flipped: boolean; // controlled from parent
  setFlippedCardId: (id: string | null) => void;
}

const FlipCard: React.FC<FlipCardProps> = ({
  id,
  imageSrc,
  title,
  backDescription,
  flipped,
  setFlippedCardId,
}) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);

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

  // Handle click or keyboard to flip card
  const toggleFlip = () => {
    if (flipped) {
      setFlippedCardId(null);
      setShowFullDesc(false);
    } else {
      setFlippedCardId(id);
      setShowFullDesc(false);
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleFlip();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip();
    }
  };

  // On hover, open card; on mouse leave, close it if it's flipped
  const handleMouseEnter = () => {
    setFlippedCardId(id);
  };

  const handleMouseLeave = () => {
    // Close card only if it's flipped and mouse leaves
    if (flipped) {
      setFlippedCardId(null);
      setShowFullDesc(false);
    }
  };

  return (
    <>
      <div
        className="flip-card w-72 h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
        tabIndex={0}
        role="button"
        aria-pressed={flipped}
        aria-label={`Flip card for ${title}`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-lg flex justify-center items-center">
            {/* Image */}
            <Image
              src={imageSrc}
              alt={`Image of ${title}`}
              className="w-full h-full object-cover filter brightness-80 transition-transform duration-500 hover:scale-110"
              priority
            />

            {/* Diagonal Shadow */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/40"></div>

            {/* Title */}
            <h1 className="absolute bottom-0 w-full bg-gradient-to-b from-black/5 h-10 to-black text-white text-lg font-semibold drop-shadow-md">
              {title}
            </h1>
          </div>

          {/* Back Side */}
          <div
            className="flip-card-back absolute w-full h-full backface-hidden rotate-y-180 bg-transparent backdrop-blur-sm border p-6 box-border rounded-lg shadow-md flex flex-col justify-center items-center text-center text-white overflow-auto scrollbar-hide"
            onClick={(e) => e.stopPropagation()} // prevent flipping when clicking inside back
          >
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
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowFullDesc(!showFullDesc);
                }}
                className="mt-6 text-white font-semibold px-5 py-2 rounded-md border focus:outline-none focus:ring-2 transition-colors duration-300 select-none"
                aria-label={showFullDesc ? "Show less" : "Read more"}
                style={{ wordSpacing: "0.15em" }}
              >
                {showFullDesc ? "Show Less" : "Read More"}
              </button>
            )}
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
        `}</style>
      </div>
    </>
  );
};

export default FlipCard;
