
"use client";
import Herocontent from "@/components/sections/Herocontent";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Blogs from "@/components/sections/Blogs";
import Testimonial from "@/components/sections/Testimonial";
import MultiLayerParallax from "@/components/sections/HeroParallax";
import Loading from "@/components/sections/Loading3D";
import { useEffect, useState } from "react";
import Head from "next/head";

// export const metadata = {
//   title: "Insight | Expert Study Abroad Consultants for Global Education",
//   description:
//     "Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!",
//   keywords:
//     "study abroad, global education, international students, expert guidance, trusted support, study visa, international admissions, overseas education",
//   icons: {
//     icon: "/assets/logo.png",
//   },
// };

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started");
    const timer = setTimeout(() => {
      console.log("Loading ended");
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  console.log("Loading state:", loading);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <main className="w-full">
    
        <MultiLayerParallax />
       
        <Herocontent />
        <CountriesCarousel />
        <ServicesSection />
        <UniversitiesSection />
        <ContactSection />
        <Blogs />
        <Testimonial />
      </main>
    </>
  );
}
