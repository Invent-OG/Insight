"use client";

import Loading3D from "@/components/sections/Loading3D";
import Countries from "@/components/sections/Countries";
import Hero from "@/components/sections/Hero";
import Knowaboutus from "@/components/sections/Knowaboutus";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Testimonial from "@/components/sections/Testimonial";
import Herocontent from "@/components/sections/Herocontent";
import { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading3D />;
  }

  return (
    <>
      <Hero />
      <Herocontent />
      <Countries />
      {/* <Knowaboutus /> */}
      <ServicesSection />
      <UniversitiesSection />
      <ContactSection />
      <Testimonial />
    </>
  );
}
