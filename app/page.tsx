import Herocontent from "@/components/sections/Herocontent";
import CountriesCarousel from "@/components/sections/CountriesCarousel";
import ServicesSection from "@/components/sections/Services";
import UniversitiesSection from "@/components/sections/Universities";
import ContactSection from "@/components/sections/ContactSection";
import Blogs from "@/components/sections/Blogs";
import Testimonial from "@/components/sections/Testimonial";
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
      {/* <video
        className="top-0 left-0 hidden object-cover w-full h-screen lg:block"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        disableRemotePlayback
        poster="/images/placeholder.jpg"
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>
      <video
        className="top-0 left-0 block object-cover w-full h-screen lg:hidden"
        autoPlay
        loop
        muted
        preload="auto"
        playsInline
        disableRemotePlayback
        poster="/images/placeholder.jpg"
      >
        <source src="/videos/banner M.mp4" type="video/mp4" />
      </video> */}
      <VideoScrollSection />
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
