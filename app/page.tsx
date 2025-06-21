// "use client";

// import Hero from "@/components/sections/Hero";
// import ServicesSection from "@/components/sections/Services";
// import UniversitiesSection from "@/components/sections/Universities";
// import ContactSection from "@/components/sections/ContactSection";
// import Testimonial from "@/components/sections/Testimonial";
// import Herocontent from "@/components/sections/Herocontent";
// import Blogs from "@/components/sections/Blogs";
// import CountriesCarousel from "@/components/sections/CountriesCarousel";

// import { useState, useEffect } from "react";

// export default function Home() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2000);
//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     // return <Loading3D />;
//   }

//   return (
//     <main className="w-full ">
//       <Hero />
//       <Herocontent />
//       <CountriesCarousel />
//       <ServicesSection />
//       <UniversitiesSection />
//       <ContactSection />
//       <Blogs />
//       <Testimonial />
//     </main>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import Hero1 from "@/components/sections/Hero1";
import Herocontent from "@/components/sections/Herocontent";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Blogs from "@/components/sections/Blogs";
import Testimonial from "@/components/sections/Testimonial";
import PopupFormModal from "@/components/sections/PopupFormModal"; // ⬅️ Add this line
import MultiLayerParallax from "@/components/sections/HeroParallax";
import HeroParallaxContent from "@/components/sections/HeroParallaxContent";

export default function Home() {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   // return <Loading3D />;
  // }

  return (
    <main className="w-full">
      <PopupFormModal />
      <MultiLayerParallax />
      <HeroParallaxContent />
      {/* <Hero1 /> */}
      {/* <Herocontent /> */}
      <CountriesCarousel />
      <ServicesSection />
      <UniversitiesSection />
      <ContactSection />
      <Blogs />
      <Testimonial />
    </main>
  );
}
