import Herocontent from '@/components/sections/Herocontent';
import CountriesCarousel from '@/components/sections/CountriesCarousel';
import ServicesSection from '@/components/sections/Services';
import UniversitiesSection from '@/components/sections/Universities';
import ContactSection from '@/components/sections/ContactSection';
import Blogs from '@/components/sections/Blogs';
import Testimonial from '@/components/sections/Testimonial';
import { FaAngleDown } from 'react-icons/fa6';

export const metadata = {
  title: 'Insight | Expert Study Abroad Consultants for Global Education',
  description:
    'Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!',
  keywords:
    'study abroad, global education, international students, expert guidance, trusted support, study visa, international admissions, overseas education',
};

export default function Home() {
  return (
    <main className='w-full'>
      <div className='relative w-full'>
        <video
          className='relative z-10 hidden object-cover w-full h-screen lg:block'
          autoPlay
          muted
          preload='auto'
          playsInline
          disableRemotePlayback
          poster='/images/placeholder.jpg'
        >
          <source src='/videos/bannerS.mp4' type='video/mp4' />
        </video>
        <FaAngleDown className='absolute bottom-0 z-50 w-10 h-10 text-primary left-1/2 animate-bounce' />
      </div>
      <div className='relative w-full'>
        <video
          className='block object-cover w-full h-screen lg:hidden'
          autoPlay
          muted
          preload='auto'
          playsInline
          disableRemotePlayback
          poster='/images/placeholder.jpg'
        >
          <source src='/videos/banner M.mp4' type='video/mp4' />
        </video>
        <FaAngleDown className='absolute bottom-0 z-50 w-10 h-10 text-primary left-1/2 animate-bounce' />
      </div>

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
