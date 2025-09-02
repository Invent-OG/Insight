'use client';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Image from 'next/image';
import { IoIosArrowDown } from 'react-icons/io';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { CldImage } from 'next-cloudinary';

const countries = [
  { title: 'UK', image: 'UK_jyybhv', slug: 'australi' },
  { title: 'Study in UK', image: 'UK_jyybhv', slug: 'uk' },
  { title: 'Study in USA', image: 'USA_1_gw8rlk', slug: 'usa' },
  {
    title: 'Study in Ireland',
    image: 'Ireland_oyog0w',
    slug: 'ireland',
  },
  {
    title: 'Study in Canada',
    image: 'Canada_1_yxn9jo',
    slug: 'canada',
  },
  {
    title: 'Study in Australia',
    image: 'Australia_sjbomj',
    slug: 'australia',
  },
  {
    title: 'Study in New Zealand',
    image: 'New_zealand_1_t8nmqw',
    slug: 'newzealand',
  },
  {
    title: 'Study in France',
    image: 'France_ia7wdh',
    slug: 'france',
  },
  {
    title: 'Study in Germany',
    image: 'Germany_1_zxx8hu',
    slug: 'germany',
  },
  {
    title: 'Study in  UAE',
    image: 'UAE_fgvysx',
    slug: 'uae',
  },
  {
    title: 'Study in Singapore',
    image: 'singapore_xj4aie',
    slug: 'singapore',
  },
  {
    title: 'Study in Malaysia',
    image: 'malaysia_imjp7t',
    slug: 'malaysia',
  },
  {
    title: 'Study in Poland',
    image: 'poland_sy7baq',
    slug: 'poland',
  },
  {
    title: 'Study in Sweden',
    image: 'swedan_g0b6di',
    slug: 'sweden',
  },
  {
    title: 'Study in Latvia',
    image: 'Latvia_yik0er',
    slug: 'latvia',
  },
  {
    title: 'Study in Lithuania',
    image: 'Lithuania_xdd2mi',
    slug: 'lithuania',
  },
  {
    title: 'Study in Malta',
    image: 'malta_xcvhl5',
    slug: 'malta',
  },
  {
    title: 'Study in Netherlands',
    image: 'Netherland_hoponi',
    slug: 'netherlands',
  },
  {
    title: 'Study in Finland',
    image: 'Finland_inxqoe',
    slug: 'finland',
  },
  {
    title: 'Study in Armenia',
    image: 'Armenia_qqasz6',
    slug: 'armenia',
  },
  {
    title: 'Study in Georgia',
    image: 'Georgia_u3butg',
    slug: 'georgia',
  },
  {
    title: 'Study in Uzbekistan',
    image: 'Uzbekistan_ove2ok',
    slug: 'uzbekistan',
  },
];

export default function Countries() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gotoRef = useRef<(index: number, dir: number) => void>(() => {});
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const sectionEls = document.querySelectorAll('.section');
    const imageEls = document.querySelectorAll('.background');
    const headingEls = document.querySelectorAll('.section-title');
    const outerEls = document.querySelectorAll('.outer');
    const innerEls = document.querySelectorAll('.inner');
    const footerEl = document.querySelector('footer');
    const headerEl = document.querySelector('header');

    let currentIndex = 0;
    let animating = false;
    let showNavTimeout: NodeJS.Timeout;

    const wrap = (i: number, max: number) => (i + max) % max;

    gsap.set(outerEls, { yPercent: 100 });
    gsap.set(innerEls, { yPercent: -100 });
    gsap.set(sectionEls[0], {
      autoAlpha: 1,
      zIndex: 1,
      pointerEvents: 'auto',
    });

    const goto = (index: number, dir: number) => {
      index = wrap(index, sectionEls.length);
      if (index === currentIndex || animating) return;
      animating = true;

      const fromTop = dir === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: 'power1.inOut' },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionEls[currentIndex], { zIndex: 0 });
        tl.to(imageEls[currentIndex], { yPercent: -15 * dFactor }).set(sectionEls[currentIndex], {
          autoAlpha: 0,
          pointerEvents: 'none',
        });
      }

      gsap.set(sectionEls[index], {
        autoAlpha: 1,
        zIndex: 1,
        pointerEvents: 'auto',
      });

      tl.fromTo(
        [outerEls[index], innerEls[index]],
        { yPercent: (i) => (i ? -100 * dFactor : 100 * dFactor) },
        { yPercent: 0 },
        0
      )
        .fromTo(imageEls[index], { yPercent: 15 * dFactor }, { yPercent: 0 }, 0)
        .fromTo(
          headingEls[index],
          { autoAlpha: 0, yPercent: 150 * dFactor },
          {
            autoAlpha: 1,
            yPercent: 0,
            duration: 1,
            ease: 'power2',
            stagger: { each: 0.02, from: 'random' },
          },
          0.2
        );

      setActiveIndex(index);
      currentIndex = index;
    };

    gotoRef.current = goto;

    const handleScroll = (e: WheelEvent) => {
      if (headerEl) headerEl.style.opacity = '0';
      clearTimeout(showNavTimeout);
      showNavTimeout = setTimeout(() => {
        if (headerEl) headerEl.style.opacity = '1';
      }, 1500);

      const direction = e.deltaY > 0 ? 1 : -1;
      const lastIndex = sectionEls.length - 1;

      if (!animating) {
        if (footerEl) footerEl.style.display = 'none';

        if (currentIndex === 1 && direction === -1) {
          // From index 1, scroll up goes to last index
          goto(lastIndex, 1);
        } else if (currentIndex === lastIndex && direction === 1) {
          // From last index, scroll down goes to index 1
          goto(1, 1);
        } else {
          goto(currentIndex + direction, direction);
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50 && !animating) {
        const direction = deltaY > 0 ? 1 : -1;
        const lastIndex = sectionEls.length - 1;

        if (currentIndex === 1 && direction === -1) {
          goto(lastIndex, 1); // swipe down from index 1 → go to last
        } else if (currentIndex === lastIndex && direction === 1) {
          goto(1, 1); // swipe up from last index → go to index 1
        } else {
          goto(currentIndex + direction, direction);
        }
      }
    };

    let startY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    goto(1, 18);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      document.body.style.overflow = 'auto';
      clearTimeout(showNavTimeout);
    };
  }, []);

  return (
    <div className='relative w-screen h-screen overflow-hidden font-sans text-white bg-black'>
      {countries.map((country) => (
        <section
          key={country.slug}
          id={country.slug}
          className='absolute inset-0 z-0 opacity-0 section'
        >
          <div className='relative w-full h-full overflow-hidden outer'>
            <div className='absolute inset-0 z-0 background'>
              <CldImage
                src={country.image}
                alt={country.title}
                fill
                crop='fit'
                className='object-cover object-center'
                priority
                sizes='100vw'
              />
            </div>
            <div className='relative z-10 flex items-end justify-center w-full h-full inner'>
              <div className='absolute flex flex-col items-center justify-center w-full gap-5 px-4 py-6 lg:bottom-0 bottom-1/4 lg:bg-gradient-to-t from-black via-black/50 to-transparent'>
                {/* <h1 className='flex gap-3 text-4xl font-bold text-center section-title md:text-6xl'>
                  {country.title}
                </h1> */}
                <div className='bg-black/30 px-4 py-2 rounded-lg inline-block'>
                  <h1 className='text-4xl md:text-6xl font-bold text-center text-white'>
                    {country.title}
                  </h1>
                </div>
                <Button
                  onClick={() => router.push(`/countries/${country.slug}`)}
                  className='transition-colors duration-300 bg-black border rounded-full border-primary hover:bg-red-600'
                >
                  Learn More
                </Button>
                <IoIosArrowDown className='animate-bounce ' />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Left Vertical Number Nav */}
      <header className='fixed  top-1/2 left-2 -translate-y-1/2 z-[999]'>
        <nav className='flex  flex-col gap-1 max-h-[90vh]  overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent'>
          {countries.slice(1).map((country, i) => {
            const actualIndex = i + 1; // Since we're slicing from 1, adjust index
            return (
              <button
                key={country.slug}
                onClick={() => {
                  const dir = actualIndex > activeIndex ? 1 : -1;
                  gotoRef.current?.(actualIndex, dir);
                }}
                className={`w-6  h-6 text-[10px] sm:w-8 sm:h-8 sm:text-sm backdrop-blur-md   border border-white/20 rounded-md shadow-md transition-transform 
            ${
              actualIndex === activeIndex
                ? '  font-bold bg-primary text-black '
                : 'hover:bg-black/30 bg-black/50 text-white'
            }`}
              >
                {actualIndex}
              </button>
            );
          })}
        </nav>
      </header>
    </div>
  );
}
