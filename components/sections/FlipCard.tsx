"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";

interface FlipCardProps {
  imageSrc: StaticImageData;
  title: string;
  backDescription: string;
}

const FlipCard: React.FC<FlipCardProps> = ({
  imageSrc,
  title,
  backDescription,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [showFullDesc, setShowFullDesc] = useState(false);
  const [animateDesc, setAnimateDesc] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
    setShowFullDesc(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setFlipped(!flipped);
      setShowFullDesc(false);
    }
  };

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

  return (
    <>
      <div
        className="flip-card w-72 h-96 perspective-1000 rounded-lg shadow-lg overflow-hidden cursor-pointer"
        onClick={handleClick}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        role="button"
        aria-pressed={flipped}
        aria-label={`Flip card for ${title}`}
      >
        <div
          className={`flip-card-inner relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d rounded-lg ${
            flipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front Side */}
          <div className="flip-card-front absolute w-full h-full backface-hidden rounded-lg overflow-hidden shadow-md flex justify-center items-center">
            <Image
              src={imageSrc}
              alt={`Image of ${title}`}
              className="w-full h-full object-cover filter brightness-90"
              priority
            />
            <h1 className="absolute underline bottom-1 text-black text-1xl font-semibold drop-shadow-md">
              {title}
            </h1>
          </div>

          {/* Back Side */}
          <div className="flip-card-back absolute w-full  h-full backface-hidden rotate-y-180 bg-gradient-to-tl from-black via-red-700 to-red-500 p-6 box-border rounded-lg shadow-md flex flex-col justify-center items-center text-center text-white overflow-hidden">
            <p
              className={`text-base leading-relaxed  transition duration-700 ease-in-out transform hover:scale-105 text-justify ${
                animateDesc ? "animate-fadeSlideIn" : ""
              }`}
              style={{
                lineHeight: 1.8,
                overflowWrap: "break-word",
                wordBreak: "break-word",
                // wordSpacing: "0.1em" // optional, uncomment if you want a bit spacing
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
                className=" mt-20 text-white font-semibold px-5 py-2 rounded-md bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition-colors duration-300 select-none"
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
