// "use client";

// import React, { useRef, useState, useEffect } from "react";
// import FlipCard from "./FlipCard";
// import { countries } from "@/components/sections/Countries";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";
// import Image from "next/image";
// import france from "@/public/assets/country/Japan.png";

// const CountriesCarousel: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();
//   const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
//   const [parallaxOffset, setParallaxOffset] = useState(0);

//   // Listen to horizontal scroll to create parallax effect
//   useEffect(() => {
//     const handleScroll = () => {
//       if (carouselRef.current) {
//         const maxScroll =
//           carouselRef.current.scrollWidth - carouselRef.current.clientWidth;
//         const scrollLeft = carouselRef.current.scrollLeft;
//         const offset = (scrollLeft / maxScroll) * 50; // adjust the "50" for more/less parallax
//         setParallaxOffset(offset);
//       }
//     };

//     const ref = carouselRef.current;
//     if (ref) {
//       ref.addEventListener("scroll", handleScroll);
//     }

//     return () => {
//       if (ref) {
//         ref.removeEventListener("scroll", handleScroll);
//       }
//     };
//   }, []);

//   const scrollLeftFunc = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
//     }
//   };

//   const scrollRightFunc = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="relative overflow-hidden lg:min-h-screen">
//       {/* Parallax background container */}
//       <div className="absolute inset-0 -z-20 overflow-hidden">
//         <div
//           style={{
//             transform: `translateX(-${parallaxOffset}%)`,
//             transition: "transform 0.1s linear",
//             width: "110%",
//             height: "100%",
//             position: "relative",
//           }}
//         >
//           <Image
//             src={france}
//             alt="Background"
//             layout="fill"
//             objectFit="cover"
//             priority
//             quality={75}
//           />
//         </div>
//       </div>

//       {/* Overlay to darken background */}
//       <div className="absolute inset-0 bg-black/80"></div>

//       {/* Your content */}
//       <div className="relative z-10 bg-transparent text-white">
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:py-8">
//           Countries
//         </h1>

//         <div
//           ref={carouselRef}
//           className="w-full overflow-x-auto scroll-smooth scrollbar-hide flex justify-center"
//         >
//           <div className="flex gap-6 px-4 py-12 mb-6">
//             {countries.map((country, index) => (
//               <div key={index} className="flex-shrink-0">
//                 <FlipCard
//                   imageSrc={country.image}
//                   title={country.title}
//                   backDescription={country.description}
//                   id={country.id}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Center button */}
//         <div className="flex justify-center lg:py-4 mb-4">
//           <Button onClick={() => router.push("/countries")}>
//             Explore Countries
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CountriesCarousel;

"use client";

import React, { useRef } from "react";
import FlipCard from "./FlipCard";
import { countries } from "@/components/sections/Countries";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const CountriesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  return (
    <div className="relative overflow-hidden lg:min-h-screen">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1675695700399-d017e858209e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      ></div>

      {/* Overlay to darken background */}
      <div className="absolute inset-0 bg-black/80"></div>

      {/* Your content */}
      <div className="relative z-10 bg-transparent text-white">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center lg:py-8">
          Countries
        </h1>

        <div
          ref={carouselRef}
          className="w-full overflow-x-auto scroll-smooth scrollbar-hide flex justify-center"
        >
          <div className="flex gap-6 px-4 py-12 mb-6">
            {countries.map((country, index) => (
              <div key={index} className="flex-shrink-0">
                <FlipCard
                  imageSrc={country.image}
                  title={country.title}
                  backDescription={country.description}
                  id={country.id}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center button */}
        <div className="flex justify-center lg:py-4 mb-4">
          <Button onClick={() => router.push("/countries")}>
            Explore Countries
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CountriesCarousel;
