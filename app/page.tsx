import Herocontent from "@/components/sections/Herocontent";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Blogs from "@/components/sections/Blogs";
import Testimonial from "@/components/sections/Testimonial";
import MultiLayerParallax from "@/components/sections/HeroParallax";
import { HeroSection } from "@/components/hero-odyssey";

export const metadata = {
  title: "Insight | Expert Study Abroad Consultants for Global Education",
  description:
    "Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!",
  keywords:
    "study abroad, global education, international students, expert guidance, trusted support, study visa, international admissions, overseas education",
};

export default function Home() {
  return (
    <main className="w-full">
      <HeroSection />
      {/* <MultiLayerParallax /> */}
      <Herocontent />
      <CountriesCarousel />
      <ServicesSection />
      <UniversitiesSection />
      <ContactSection />
      <Blogs />
      <Testimonial />
    </main>
  );
}
