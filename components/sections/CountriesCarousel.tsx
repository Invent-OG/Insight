// "use client";

// import React, { useEffect, useRef } from "react";
// import FlipCard from "./FlipCard";
// import { Button } from "../ui/button";
// import { useRouter } from "next/navigation";
// import { StaticImageData } from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// // Import images
// import uk from "@/public/assets/UK.png";
// import usa from "@/public/assets/country/Usa.jpg";
// import ireland from "@/public/assets/country/Ireland.jpg";
// import canada from "@/public/assets/country/Canada (1).png";

// interface Country {
//   id: string;
//   title: string;
//   description: string;
//   image: StaticImageData;
// }

// export const countries: Country[] = [
//   {
//     id: "card1",
//     title: "Study in UK",
//     description: `Home to renowned institutions like Oxford and Cambridge, the UK offers rigorous programs, short duration courses, and a strong academic tradition. Cities in the UK offer a student-friendly atmosphere, blending culture and connectivity. They offer a 1-year master’s degree with no compromise on academic standards, along with a 2-year stay-back option. With part-time work opportunities, the UK is ideal for career-focused learners.`,
//     image: uk,
//   },
//   {
//     id: "card2",
//     title: "Study in the USA",
//     description: `The U.S. is a top destination for international students, offering prestigious universities like Harvard and MIT, a flexible education system, research projects, and internship opportunities. Its diverse lifestyle—from city campuses to quiet towns—enhances the student experience. Offering a 2-year master's program and a 3-year stay-back option, students can gain valuable work experience after graduation through Optional Practical Training (OPT) and STEM extensions.`,
//     image: usa,
//   },
//   {
//     id: "card3",
//     title: "Study in Ireland",
//     description: `Ireland is home to prestigious universities like Trinity College Dublin and University College Dublin, known for academic excellence. With vibrant cities, affordable tuition, and a welcoming atmosphere, it offers an exceptional student experience. Ireland also provides Post-Graduation Work Permits, making it a great choice for long-term career and settlement opportunities.`,
//     image: ireland,
//   },
//   {
//     id: "card4",
//     title: "Study in Canada",
//     description: `Canada stands out for its world-class universities like the University of Toronto and McGill, inclusive society, and high standard of living. Affordable tuition, multicultural cities, and a welcoming environment make it a top choice. Post-Graduation Work Permits (up to 3 years) and clear Permanent Residency pathways support long-term settlement.`,
//     image: canada,
//   },
// ];

// const CountriesCarousel: React.FC = () => {
//   const carouselRef = useRef<HTMLDivElement>(null);
//   const router = useRouter();

//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       offset: 100,
//       once: true,
//     });
//   }, []);

//   return (
//     <div className="relative overflow-hidden py-16 lg:min-h-screen ">
//       {/* Parallax Background */}
//       <div
//         className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat"
//         style={{
//           backgroundImage: `url('assets/country/Usa.jpg')`,
//         }}
//       ></div>

//       {/* Overlay to darken background */}
//       <div className="absolute inset-0 bg-black/80"></div>

//       {/* Your content */}
//       <div
//         data-aos="fade-up"
//         data-aos-duration="1000"
//         data-aos-delay="100"
//         data-aos-anchor-placement="top-bottom"
//         className="relative z-10 bg-transparent flex flex-col gap-10 justify-center items-center text-white"
//       >
//         <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight text-center lg:py-8">
//           Countries
//         </h1>

//         <div
//           ref={carouselRef}
//           className="flex w-full items-center gap-5 px-10 lg:p-0 scroll-smooth no-scrollbar py-2 justify-start lg:justify-center overflow-auto "
//         >
//           {countries.map((country) => (
//             <div key={country.id} className=" ">
//               <FlipCard
//                 imageSrc={country.image}
//                 title={country.title}
//                 backDescription={country.description}
//                 id={country.id}
//               />
//             </div>
//           ))}
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

import React, { useEffect, useRef } from "react";
import FlipCard from "./FlipCard";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
// Import images
// import uk from "@/public/assets/UK.webp";
// import usa from "@/public/assets/country/Usa.jpg";
// import ireland from "@/public/assets/country/Ireland.jpg";
// import canada from "@/public/assets/country/Canada (1).png";

interface Country {
  id: string;
  title: string;
  description: string;
  image: string;
}

export const countries: Country[] = [
  {
    id: "card1",
    title: "Study in UK",
    description: `Home to renowned institutions like Oxford and Cambridge, the UK offers rigorous programs, short duration courses, and a strong academic tradition. Cities in the UK offer a student-friendly atmosphere, blending culture and connectivity. They offer a 1-year master’s degree with no compromise on academic standards, along with a 2-year stay-back option. With part-time work opportunities, the UK is ideal for career-focused learners.`,
    image: "/assets/country/UK.webp",
  },
  {
    id: "card2",
    title: "Study in the USA",
    description: `The U.S. is a top destination for international students, offering prestigious universities like Harvard and MIT, a flexible education system, research projects, and internship opportunities. Its diverse lifestyle—from city campuses to quiet towns—enhances the student experience. Offering a 2-year master's program and a 3-year stay-back option, students can gain valuable work experience after graduation through Optional Practical Training (OPT) and STEM extensions.`,
    image: "/assets/country/USA (1).webp",
  },
  {
    id: "card3",
    title: "Study in Ireland",
    description: `Ireland is home to prestigious universities like Trinity College Dublin and University College Dublin, known for academic excellence. With vibrant cities, affordable tuition, and a welcoming atmosphere, it offers an exceptional student experience. Ireland also provides Post-Graduation Work Permits, making it a great choice for long-term career and settlement opportunities.`,
    image: "/assets/country/Ireland.webp",
  },
  {
    id: "card4",
    title: "Study in Canada",
    description: `Canada stands out for its world-class universities like the University of Toronto and McGill, inclusive society, and high standard of living. Affordable tuition, multicultural cities, and a welcoming environment make it a top choice. Post-Graduation Work Permits (up to 3 years) and clear Permanent Residency pathways support long-term settlement.`,
    image: "/assets/country/Canada (1).webp",
  },
];

const CountriesCarousel: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <div className="relative overflow-hidden lg:py-5 py-6 lg:min-h-screen">
      {/* ✅ Mobile-Only Parallax Background */}
      <div
        className="absolute inset-0 bg-scroll lg:bg-fixed bg-center bg-cover bg-no-repeat block lg:hidden"
        style={{
          backgroundImage: "url('/assets/textures/countryfullbg.avif')",
          opacity: 0.5,
        }}
      ></div>

      {/* ✅ Desktop Parallax Background (more faded) */}
      <div
        className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat hidden lg:block"
        style={{
          backgroundImage: "url('/assets/textures/countryfullbg.avif')",
          opacity: 0.4, // Softer effect for large screens
        }}
      ></div>

      {/* Main Content */}
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor-placement="top-bottom"
        className="relative z-10 bg-transparent flex flex-col gap-10 justify-center items-center text-white"
      >
        <h1 className="text-3xl text-primary md:text-5xl lg:text-5xl  font-bold leading-tight text-center lg:py-8">
          Countries
        </h1>

        <div
          ref={carouselRef}
          className="flex w-full items-center gap-5 px-10 lg:p-0 scroll-smooth no-scrollbar py-2 justify-start lg:justify-center overflow-auto"
        >
          {countries.map((country) => (
            <div key={country.id}>
              <FlipCard
                imageSrc={country.image}
                title={country.title}
                backDescription={country.description}
                id={country.id}
              />
            </div>
          ))}
        </div>

        {/* Centered Button */}
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
