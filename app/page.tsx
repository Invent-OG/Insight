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
import VideoScrollSection from "@/components/sections/VideoScrollSection";

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
      {/* <div className="relative h-screen">
        <Spline scene="https://prod.spline.design/gWbmQiAnSwvycQ1g/scene.splinecode" />
        <div className="absolute bottom-0 right-0 px-5 py-4 text-4xl font-bold text-white uppercase bg-primary">
          Beyond borders better
        </div>
      </div> */}

      <video
        className="top-0 left-0 object-cover w-full h-screen "
        autoPlay
        loop
        muted
        preload="auto" // or "metadata" for lighter load
        playsInline
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>

      {/* <VideoScrollSection /> */}
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
