// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// function LogoExp() {
//   const sectionRef = useRef(null);
//   const imageRef = useRef(null);
//   const blackRef = useRef(null);
//   const whiteRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // Logo zoom-in and pin
//       gsap.fromTo(
//         imageRef.current,
//         { scale: 1 },
//         {
//           scale: 1.5,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'center center',
//             end: 'bottom center',
//             scrub: true,
//             pin: true,
//           },
//         }
//       );

//       // Background transition to dark
//       gsap.to(sectionRef.current, {
//         backgroundColor: '#1a1a1a',
//         scrollTrigger: {
//           trigger: sectionRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//         },
//       });

//       // Slide white section over black section
//       gsap.fromTo(
//         whiteRef.current,
//         { yPercent: 100 },
//         {
//           yPercent: 0,
//           ease: 'power2.out',
//           scrollTrigger: {
//             trigger: blackRef.current,
//             start: 'top top',
//             end: 'bottom top',
//             scrub: true,
//           },
//         }
//       );
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <>
//       {/* Logo Zoom Section */}
//       <section
//         ref={sectionRef}
//         className='relative flex items-center justify-center w-full h-screen bg-black'
//       >
//         <div ref={imageRef} className='z-10'>
//           <Image
//             alt='logoexplaining'
//             src='/assets/whitelogo.png'
//             width={300}
//             height={300}
//             className='object-contain'
//           />
//         </div>
//       </section>

//       {/* Black + White Scroll Section */}
//       <section
//         ref={blackRef}
//         className='relative flex items-center justify-center min-h-screen overflow-hidden text-white bg-black'
//       >
//         {/* Black Content */}
//         <div className='z-10 max-w-3xl px-4 text-base leading-7 md:text-lg md:leading-8 md:px-6'>
//           <h2 className='mb-6 text-3xl font-semibold text-center'>More About the Logo</h2>
//           <p className='text-center'>
//             Our logo symbolizes strength, unity, and forward-thinking innovation. The curved
//             elements represent a global presence and movement, while the sharp points denote
//             direction and growth.
//           </p>
//         </div>

//         {/* White Section slides over */}
//         <div
//           ref={whiteRef}
//           className='absolute top-0 left-0 z-20 flex items-center justify-center w-full h-full text-black bg-white'
//         >
//           <div className='z-10 max-w-3xl px-4 text-base leading-7 md:text-lg md:leading-8 md:px-6'>
//             <h2 className='mb-6 text-3xl font-semibold text-center'>Our Mission</h2>
//             <p className='text-center'>
//               We empower students and professionals with the knowledge, tools, and guidance they
//               need to succeed on the global stage. From education consulting to international
//               partnerships, our team drives success through innovation and integrity.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default LogoExp;
'use client';

import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function LogoExp() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const aboutRef = useRef(null);
  const missionRef = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    const ctx = gsap.context(() => {
      // Logo zoom out + blur to sharp (responsive values)
      gsap.fromTo(
        imageRef.current,
        {
          scale: isMobile ? 3 : 6,
          filter: isMobile ? 'blur(10px)' : 'blur(20px)',
          opacity: 0,
        },
        {
          scale: 1,
          filter: 'blur(0px)',
          opacity: 1,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'center top',
            scrub: true,
          },
        }
      );

      // Fade in "More About the Logo"
      gsap.from(aboutRef.current, {
        opacity: 0,
        y: 40,
        duration: 2,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: isMobile ? 'top 95%' : 'top 80%',
          toggleActions: 'play none none reverse',
        },
      });

      // Fade in "Our Mission"
      gsap.from(missionRef.current, {
        opacity: 0,
        y: 50,
        duration: 2,
        scrollTrigger: {
          trigger: missionRef.current,
          start: isMobile ? 'top 95%' : 'top 90%',
          toggleActions: 'play none none reverse',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      {/* Logo Section */}
      <section
        ref={sectionRef}
        className='relative flex items-center justify-center w-full h-screen bg-black overflow-hidden'
      >
        <div ref={imageRef} className='z-20 will-change-transform'>
          <Image
            alt='logoexplaining'
            src='/assets/whitelogo.png'
            width={320}
            height={320}
            className='object-contain'
            priority
          />
        </div>
      </section>

      {/* Content Block 1: More About the Logo */}
      <section ref={aboutRef} className='px-4 py-20 text-white bg-black text-center md:px-6'>
        <h2 className='mb-6 text-3xl font-semibold'>More About the Logo</h2>
        <p className='max-w-3xl mx-auto text-base leading-7 md:text-lg md:leading-8'>
          Our logo represents depth, transformation, and clarity. The evolving shapes reflect our
          dynamic approach, while the bold geometry signifies direction and growth.
        </p>
      </section>

      {/* Content Block 2: Our Mission */}
      <section ref={missionRef} className='px-4 py-20 text-black bg-white text-center md:px-6'>
        <h2 className='mb-6 text-3xl font-semibold'>Our Mission</h2>
        <p className='max-w-3xl mx-auto text-base leading-7 md:text-lg md:leading-8'>
          We aim to empower students with vision, purpose, and clarity. Our unique blend of empathy
          and expertise helps individuals thrive globally through education and transformation.
        </p>
      </section>
    </div>
  );
}

export default LogoExp;
