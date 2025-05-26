import Countries from "@/components/sections/Countries";
import Hero from "@/components/sections/Hero";
import Knowaboutus from "@/components/sections/Knowaboutus";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Testimonial from "@/components/sections/Testimonial";

export default function Home() {
  return (
    <>
      <Hero />
      <Countries />
      <Knowaboutus />
      <ServicesSection />
      <UniversitiesSection />
      <ContactSection />
      <Testimonial />
    </>
  );
}
