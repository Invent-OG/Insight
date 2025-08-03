import Herocontent from '@/components/sections/Herocontent';
import CountriesCarousel from '@/components/sections/CountriesCarousel';
import ServicesSection from '@/components/sections/Services';
import ContactSection from '@/components/sections/ContactSection';
import Blogs from '@/components/sections/Blogs';
import Testimonial from '@/components/sections/Testimonial';
import { FaAngleDown } from 'react-icons/fa6';
import LogoExp from '@/components/sections/LogoExp';
import { log } from 'node:console';
import { TopUniversities } from '@/components/sections/Universities';

export const metadata = {
  title: 'Insight | Expert Study Abroad Consultants for Global Education',
  description:
    'Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!',
  keywords:
    'study abroad, global education, international students, expert guidance, trusted support, study visa, international admissions, overseas education',
};

const universities = [
  {
    name: 'RWTH Aachen University',
    images: ['RWTH_AACHEN_UNIVERSITY_atfcuz'],
  },
  {
    name: 'Arizona State University',
    images: ['Arizona_state_university_gqvufg'],
  },
  {
    name: 'University of Twente',
    images: ['univeresity_of_twente_rqqihm'],
  },
  {
    name: 'Radboud University',
    images: ['Radboud_university_vut6ly'],
  },
  {
    name: 'RMIT University',
    images: ['RMIT_university_ytqjax'],
  },
  {
    name: 'Drexel University',
    images: ['Drexel_university_cy3ggh'],
  },
  {
    name: 'University of Oxford',
    images: ['University_of_oxford_rl7pe2'],
  },
  {
    name: 'University of Cambridge',
    images: ['University_of_Cambridge_gyghv2'],
  },
  {
    name: 'University of Tech Sydney',
    images: ['Tech_sydney_ewkdlo'],
  },
];

export default function Home() {
  console.log('object');
  return (
    <main className='w-full'>
      <div className='relative w-full'>
        <video
          className='relative z-10 hidden object-cover w-full h-screen lg:block'
          autoPlay
          muted
          playsInline
          disableRemotePlayback
        >
          <source
            src='https://res.cloudinary.com/ds0phxytc/video/upload/f_auto,q_auto/banner_ym2ltg.mp4'
            type='video/mp4'
          />
        </video>

        <FaAngleDown className='absolute bottom-0 z-50 w-10 h-10 text-primary left-1/2 animate-bounce' />
      </div>
      <div className='relative w-full'>
        <video
          className='block z-10 object-cover w-full h-screen lg:hidden'
          autoPlay
          muted
          loop
          playsInline
          disableRemotePlayback
        >
          <source
            src='https://res.cloudinary.com/ds0phxytc/video/upload/f_auto,q_auto/banner_M_1_1_1_p0iysu.mp4'
            type='video/mp4'
          />
        </video>

        <FaAngleDown className='absolute bottom-0 z-50 w-10 h-10 text-primary left-1/2 animate-bounce' />
      </div>

      {/* <LogoExp /> */}
      <Herocontent />
      <CountriesCarousel />
      <ServicesSection />
      {/* <UniversitiesSection /> */}
      <TopUniversities universities={universities} />
      <ContactSection />
      <Blogs />
      <Testimonial />
    </main>
  );
}
