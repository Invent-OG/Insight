// 'use client';

// import { useEffect, useState } from 'react';
// import { CldImage } from 'next-cloudinary';

// const universities = [
//   {
//     name: 'RWTH Aachen University',
//     images: ['RWTH_AACHEN_UNIVERSITY_atfcuz'],
//   },
//   {
//     name: 'Arizona State University',
//     images: ['Arizona_state_university_gqvufg'],
//   },
//   {
//     name: 'University of Twente',
//     images: ['univeresity_of_twente_rqqihm'],
//   },
//   {
//     name: 'Radboud University',
//     images: ['Radboud_university_vut6ly'],
//   },
//   {
//     name: 'RMIT University',
//     images: ['RMIT_university_ytqjax'],
//   },
//   {
//     name: 'Drexel University',
//     images: ['Drexel_university_cy3ggh'],
//   },
//   {
//     name: 'University of Oxford',
//     images: ['University_of_oxford_rl7pe2'],
//   },
//   {
//     name: 'University of Cambridge',
//     images: ['University_of_Cambridge_gyghv2'],
//   },
//   {
//     name: 'University of Tech Sydney',
//     images: ['Tech_sydney_ewkdlo'],
//   },
// ];

// export default function UniversitiesSection() {
//   const [slideIndex, setSlideIndex] = useState(0);
//   const [imageIndex, setImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setImageIndex((prev) => prev + 1);
//       setSlideIndex((prev) => (prev + 1) % 3);
//     }, 4000);
//     return () => clearInterval(interval);
//   }, []);

//   const currentUniversities = universities.slice(slideIndex * 3, slideIndex * 3 + 3);

//   return (
//     <div className='relative'>
//       <section className='relative text-black px-4 py-12 md:py-11 lg:py-4 overflow-hidden'>
//         {/* Mobile-only Background */}
//         <div
//           className='absolute inset-0 z-0 block md:hidden'
//           style={{
//             backgroundImage: "url('/assets/textures/university2.jpg')",
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'scroll',
//             opacity: 0.6,
//           }}
//         />

//         {/* Desktop Background */}
//         <div
//           className='absolute inset-0 z-0 hidden md:block'
//           style={{
//             backgroundImage: "url('/assets/textures/university2.jpg')",
//             backgroundRepeat: 'no-repeat',
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             backgroundAttachment: 'fixed',
//             opacity: 0.5,
//           }}
//         />
//         <div className='relative z-10 container mx-auto max-w-7xl md:py-8 md:mb-4 lg:mt-6 mt-0 py-0 lg:py-2'>
//           <div className='text-center max-w-4xl mx-auto lg:mb-12 mb-4 lg:space-y-8 space-y-4'>
//             <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary font-medium text-shadow-sm'>
//               — Universities —
//             </h4>
//             <h2 className='lg:text-4xl md:text-4xl text-2xl font-bold'>
//               Unlock New <span className='text-primary'>Opportunities</span> With{' '}
//               <span className='text-primary'>Insights</span>
//             </h2>
//           </div>
//           <div className='w-full max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:py-4 py-6'>
//             {currentUniversities.map((uni, index) => (
//               <div
//                 key={index}
//                 className='relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300 bg-[#111111]'
//               >
//                 <div className='relative w-full h-60 sm:h-64 md:h-72'>
//                   <CldImage
//                     src={uni.images[0]}
//                     alt={uni.name}
//                     fill
//                     crop='fill'
//                     gravity='auto'
//                     className='object-cover w-full h-full'
//                   />
//                 </div>
//                 <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end p-4'>
//                   <h3 className='text-white text-lg font-bold uppercase tracking-wide'>
//                     {uni.name}
//                   </h3>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { CldImage } from 'next-cloudinary';

export const TopUniversities = ({
  universities,
}: {
  universities: {
    name: string;
    images: string[];
  }[];
}) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const maxSlides = Math.ceil(universities.length / 3);

  const currentUniversities = useMemo(() => {
    const start = slideIndex * 3;
    const end = start + 3;
    return universities.slice(start, end);
  }, [slideIndex, universities]);

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prev) => (prev + 1) % maxSlides);
    }, 4000);
    return () => clearInterval(interval);
  }, [maxSlides]);

  // Animate on slide change
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.university-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: 'power2.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [slideIndex]);

  return (
    <section className='relative z-10 py-16 bg-gray-100'>
      <div className='max-w-7xl mx-auto px-4 text-center'>
        <div className='text-center max-w-4xl mx-auto lg:mb-12 mb-4 lg:space-y-8 space-y-4'>
          <h4 className='uppercase text-sm lg:text-base tracking-[0.20em] text-primary font-medium text-shadow-sm'>
            — Universities —
          </h4>
          <h2 className='lg:text-4xl md:text-4xl text-2xl font-bold'>
            Unlock New <span className='text-primary'>Opportunities</span> With{' '}
            <span className='text-primary'>Insights</span>
          </h2>
        </div>
        <div className='w-full max-w-6xl mx-auto grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:py-4 py-6'>
          {currentUniversities.map((uni, index) => (
            <div
              key={index}
              className='relative rounded-xl overflow-hidden group shadow-lg hover:scale-105 transition-transform duration-300 bg-[#111111]'
            >
              <div className='relative w-full h-60 sm:h-64 md:h-72'>
                <CldImage
                  src={uni.images[0]}
                  alt={uni.name}
                  fill
                  crop='fill'
                  gravity='auto'
                  className='object-cover w-full h-full'
                />
              </div>
              <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end p-4'>
                <h3 className='text-white text-lg font-bold uppercase tracking-wide'>{uni.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
