'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '../ui/button';
import { CircleDot } from 'lucide-react';
import { CldImage } from 'next-cloudinary';

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 50 },
  },
};

const highlightKeywords = (text: string) => {
  const keywords = [
    'Insight Educator & Abroad Services',
    'study abroad consultants',
    'overseas education consultancy',
    'you’re in the right place',
    'foreign education advisors',
    'empowering you',
  ];

  const pattern = new RegExp(`(${keywords.join('|')})`, 'gi');

  return text.split(pattern).map((part, i) =>
    keywords.includes(part) || keywords.some((k) => k.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className='text-primary font-semibold'>
        {part}
      </span>
    ) : (
      part
    )
  );
};

const Layout2 = () => {
  const [showFull, setShowFull] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const content = [
    'Feeling overwhelmed by the idea of studying abroad? You’re not alone — and we get it.',
    "At Insight Educator & Abroad Services, we are more than just study abroad consultants — we're your partners in shaping a brighter future overseas.",
    'As a leading overseas education consultancy, we help students to turn their international education dreams into reality.',
    'Whether you have no idea which country to choose, what course fits you best, or how the visa process works — you’re in the right place, our expert foreign education advisors are here to guide you through every step of the way.',
    'Studying abroad is more than just earning a degree – a journey of personal growth, independence, and transformation.',
    'At Insight, we guide you through every stage of this life-changing experience. We help you grow not only as a student but as a global citizen.',
    'With our expert support, your education abroad becomes a powerful opportunity to broaden your perspective, explore diverse cultures, and gain life lessons that go far beyond academics – shaping a more self-aware, confident, and open-minded future.',
    'We don’t believe in hard-selling or forcing decisions. Our consultations are about empowering you — to ask questions, explore your options, and take confident steps toward your future.',
  ];

  const visibleContent = showFull ? content : content.slice(0, 2);

  return (
    <div>
      <section className='relative  min-w-full flex justify-center text-black py-20 lg:py-10   overflow-hidden'>
        <div className='absolute uppercase lg:text-base text-sm top-0 lg:py-8 py-8 tracking-[0.20em] text-primary text-center font-bold text-shadow-sm'>
          — Dream. Plan. Go. —
        </div>
        <motion.div
          className='absolute inset-0  z-0 block md:hidden'
          style={{
            backgroundImage: "url('/assets/textures/texture.avif')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
          }}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* ✅ Desktop Normal Texture */}
        <div
          className='absolute inset-0 z-0  hidden md:block'
          style={{
            backgroundImage: "url('/assets/textures/texture.avif')",
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'left center',
            opacity: 0.1,
          }}
        />

        {/* Main content */}
        <div
          ref={sectionRef}
          className={`relative z-10 container px-6 md:px-20 md:py-20 lg:py-16 flex flex-col ${
            showFull
              ? 'md:flex-col items-center text-center'
              : 'md:flex-row items-start md:items-center text-left'
          } gap-10 max-w-[90%] md:max-w-[85%] mx-auto`}
        >
          {/* Image */}
          <motion.div
            className={`w-full ${showFull ? 'md:w-1/2 mx-auto' : 'md:w-1/2 md:pr-12'}`}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: false, amount: 0.5 }}
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8, ease: 'easeOut' },
              },
            }}
          >
            <div className='rounded-lg shadow-lg w-full h-auto overflow-hidden'>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <CldImage
                  src='herocontentimage_ystu7u' // Only the public_id, no extension
                  width={800}
                  height={600}
                  alt='Example Cloudinary Image'
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Text */}

          <div className={`w-full ${showFull ? 'md:w-full mt-4' : 'md:w-1/2'} space-y-4`}>
            <motion.h1
              className='lg:text-4xl md:text-4xl text-3xl lg:font-bold font-bold lg:text-nowrap text-nowrap text-black text-start md:text-left mb-6'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.5 }}
              variants={textVariants}
            >
              Start Your Global Journey <br />
              <div>
                <span className='text-primary text-nowrap'>We Make It Happen</span>
              </div>
            </motion.h1>

            {/* Content Block */}
            <AnimatePresence initial={false}>
              <motion.div
                key={showFull ? 'expanded' : 'collapsed'}
                initial={{ opacity: 0, y: 20, height: 'auto' }}
                animate={{
                  opacity: 1,
                  y: 0,
                  height: 'auto',
                  transition: { type: 'tween', duration: 0.6 },
                }}
                exit={{ opacity: 0, y: -20, transition: { duration: 0.4 } }}
                className={`transition-all overflow-hidden ${
                  showFull
                    ? 'relative bg-white/10  border border-white/10 backdrop-blur-lg shadow-xl p-6 rounded-xl space-y-6 scrollbar-hide max-h-[30rem] overflow-y-auto'
                    : 'space-y-6'
                }`}
              >
                {visibleContent.map((para, idx) => (
                  <motion.p
                    key={idx}
                    className={`text-base md:text-lg  leading-normal tracking-wide flex gap-2 items-start ${
                      showFull ? 'text-black/85 text-justify' : 'text-black/90  md:text-left'
                    }`}
                    variants={textVariants}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: false, amount: 0.5 }}
                  >
                    {showFull && <CircleDot size={18} className='text-red-500 mt-1 shrink-0' />}
                    <span>{highlightKeywords(para)}</span>
                  </motion.p>
                ))}
              </motion.div>
            </AnimatePresence>

            <div className='text-center md:text-left'>
              <Button
                onClick={() => {
                  if (showFull && sectionRef.current) {
                    sectionRef.current.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }
                  setShowFull((prev) => !prev);
                }}
                className='mt-2 bg-primary text-white px-4 py-2 font-semibold hover:bg-transparent hover:border hover:border-black hover:text-black transition-all'
              >
                {showFull ? 'Show Less' : 'Read More'}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Hide Scrollbar Styling */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Layout2;
