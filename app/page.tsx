import Countries from "@/components/sections/Countries";
import Hero from "@/components/sections/Hero";
import Knowaboutus from "@/components/sections/Knowaboutus";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Testimonial from "@/components/sections/Testimonial";
import Herocontent from "@/components/sections/Herocontent";

export default function Home() {
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
