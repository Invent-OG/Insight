'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';

export default function AboutHero() {
  const router = useRouter();

  return (
    <section className="relative bg-[#e3eefc] bg-[url('https://cfl.dropboxstatic.com/static/images/business/homepage/background--db-vfl4SbjZf.jpg')] bg-no-repeat bg-top bg-cover lg:bg-right lg:bg-contain min-h-screen">
      {/* White semi-transparent overlay */}
      <div className='absolute inset-0 bg-white/60 pointer-events-none z-0' />

      <div className='relative z-10 min-h-screen max-w-[990px] w-full px-6 sm:px-8 py-20 lg:ml-[10%] flex items-center'>
        <div className='mt-0 max-w-full sm:max-w-[450px]'>
          <h1 className='text-4xl sm:text-5xl md:text-5xl font-extrabold text-black leading-tight mt-4 mb-8 opacity-0 blur-md animate-fade-in-up animation-delay-500'>
            <div className='leading-tight text-nowrap'>Insight Educator &</div>
            <div className='mt-1 text-primary font-semibold leading-tight'>Abroad Services</div>
          </h1>
          <h2 className='text-[#000000]  lg:text-xl text-xl sm:text-lg font-medium leading-[1.5] mb-6'>
            We provide expert guidance to help students explore global education opportunities with
            clarity, confidence, and care.
          </h2>
          <div className='mt-8'>
            <Button
              onClick={() => router.push('/form')}
              className='text-base  sm:text-lg font-semibold text-white hover:bg-transparent hover:text-black border hover:border-black'
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
