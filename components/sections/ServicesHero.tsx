'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';

const slides = [
  'https://resonance.bestlooker.pro/images/full-width-images/section-bg-7.jpg',
  // "https://resonance.bestlooker.pro/images/full-width-images/section-bg-8.jpg",
  'https://resonance.bestlooker.pro/images/full-width-images/section-bg-9.jpg',
];

interface ServicesHeroProps {
  scrollToCards: () => void;
}

export default function ServicesHero({ scrollToCards }: ServicesHeroProps) {
  const router = useRouter();

  return (
    <section className='relative w-full h-screen overflow-hidden'>
      {/* Swiper Background */}
      <div className='absolute inset-0 z-0'>
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect='fade'
          loop
          autoplay={{ delay: 10000, disableOnInteraction: false }}
          speed={1000}
          className='w-full h-full'
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index}>
              <div
                className='w-full h-full bg-cover bg-center relative'
                style={{ backgroundImage: `url(${src})` }}
              >
                <div className='absolute inset-0 bg-white bg-opacity-60' />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Overlay Content */}
      <div className='absolute inset-0 z-10 flex items-center justify-center px-4 text-center'>
        <div className='max-w-4xl'>
          <h1 className='text-lg sm:text-xl md:text-2xl uppercase tracking-wide font-medium text-black opacity-0 blur-md animate-fade-in-up animation-delay-300'>
            Insight Services | Supporting Your Global Journey
          </h1>
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-black leading-tight mt-4 mb-8 opacity-0 blur-md animate-fade-in-up animation-delay-500'>
            Your Journey, Fully Supported Every Step of the Way!
          </h2>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-4 opacity-0 blur-md animate-fade-in-up animation-delay-700'>
            <Button onClick={scrollToCards} variant={'outline'}>
              Learn More
            </Button>
            <Button onClick={() => router.push('/contact')}>Get In Touch</Button>
          </div>
        </div>
      </div>

      {/* Status */}
      <div className='absolute font-mono font-extralight bottom-6 left-6 text-black border-l-2 pl-3 text-sm sm:text-base hidden lg:block opacity-0 blur-md animate-fade-in-right animation-delay-500'>
        Shaping Futures with Personalized Support & Care
      </div>
    </section>
  );
}
