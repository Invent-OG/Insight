import Herocontent from "@/components/sections/Herocontent";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Blogs from "@/components/sections/Blogs";
import Testimonial from "@/components/sections/Testimonial";
import MultiLayerParallax from "@/components/sections/HeroParallax";
import { HeroSection } from "@/components/hero-odyssey";
import Spline from "@splinetool/react-spline/next";

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
      {/* <HeroSection /> */}
      <div className="h-screen relative">
        <Spline scene="https://prod.spline.design/ejhkBgQAm79AyNpP/scene.splinecode" />
        <div className="absolute uppercase bg-primary font-bold text-4xl  py-4 px-5 text-white bottom-0 right-0">
          Beyond borders better
        </div>
      </div>

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
