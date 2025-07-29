// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import gsap from 'gsap';

// export const TestimonialsColumn = (props: {
//   className?: string;
//   testimonials: {
//     text: string;
//     image: string;
//     name: string;
//     role: string;
//     youtubeUrl?: string | null;
//   }[];
//   duration?: number;
// }) => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const tweenRef = useRef<gsap.core.Tween | null>(null);
//   const [isPaused, setIsPaused] = useState(false);
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
//   const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
//   const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

//   const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

//   const getYouTubeEmbedUrl = (url: string) => {
//     const videoIdMatch = url.match(
//       /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/
//     );
//     return videoIdMatch ? `https://www.youtube.com/embed/${videoIdMatch[1]}` : null;
//   };

//   const pauseScroll = () => {
//     if (tweenRef.current) tweenRef.current.pause();
//     if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
//     setIsPaused(true);
//   };

//   const resumeScroll = (delay = 10000) => {
//     if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
//     resumeTimeout.current = setTimeout(() => {
//       tweenRef.current?.play();
//       setIsPaused(false);
//       setExpandedIndex(null);
//     }, delay);
//   };

//   const handleMouseEnter = (index: number) => {
//     if (!isMobile) {
//       setHoveredIndex(index);
//       pauseScroll();
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setHoveredIndex(null);
//       resumeScroll(1000);
//     }
//   };

//   const handleClick = (index: number) => {
//     if (isMobile) {
//       if (expandedIndex === index) {
//         setExpandedIndex(null);
//         resumeScroll(1000);
//       } else {
//         setExpandedIndex(index);
//         pauseScroll();
//         resumeScroll(10000);
//       }
//     }
//   };

//   useEffect(() => {
//     if (containerRef.current) {
//       tweenRef.current = gsap.to(containerRef.current, {
//         yPercent: -50,
//         duration: props.duration || 10,
//         repeat: -1,
//         ease: 'linear',
//       });
//     }

//     return () => {
//       if (tweenRef.current) tweenRef.current.kill();
//       if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
//     };
//   }, [props.duration]);

//   return (
//     <div className={props.className}>
//       <div ref={containerRef} className='flex flex-col gap-6 pb-6 will-change-transform'>
//         {[...new Array(2)].map((_, loopIndex) => (
//           <React.Fragment key={loopIndex}>
//             {props.testimonials.map(({ text, image, name, role, youtubeUrl }, i) => {
//               const embedUrl = youtubeUrl ? getYouTubeEmbedUrl(youtubeUrl) : null;

//               const actualIndex = `${i}-${loopIndex}`;
//               const isHovered = hoveredIndex === i;
//               const isExpanded = expandedIndex === i;
//               const shouldClamp = text.length > 160;
//               const showFullText = isHovered || isExpanded;

//               return (
//                 <div
//                   key={actualIndex}
//                   onMouseEnter={() => handleMouseEnter(i)}
//                   onMouseLeave={handleMouseLeave}
//                   onClick={() => handleClick(i)}
//                   className='cursor-pointer p-6 rounded-3xl border border-gray-200 shadow-md shadow-primary/5 max-w-xs w-full bg-white text-black relative flex flex-col hover:shadow-lg transition duration-300 overflow-hidden'
//                 >
//                   {embedUrl && (
//                     <div className='w-full aspect-video mb-4'>
//                       <iframe
//                         src={embedUrl}
//                         title={name}
//                         allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//                         allowFullScreen
//                         className='w-full h-full rounded-xl border border-black/10'
//                       />
//                     </div>
//                   )}

//                   <div className='flex items-center gap-3 mb-3'>
//                     <Image
//                       width={40}
//                       height={40}
//                       src={image}
//                       alt={name}
//                       className='h-10 w-10 rounded-full object-cover'
//                     />
//                     <div>
//                       <div className='font-semibold text-sm'>{name}</div>
//                       <div className='text-gray-500 text-xs'>{role}</div>
//                     </div>
//                   </div>

//                   <div
//                     className={`text-sm text-gray-700 whitespace-pre-wrap break-words transition-all delay-500 duration-500 ease-in-out ${
//                       showFullText
//                         ? 'line-clamp-none max-h-fit'
//                         : shouldClamp
//                         ? 'line-clamp-3 max-h-20'
//                         : ''
//                     }`}
//                   >
//                     {text}
//                   </div>
//                 </div>
//               );
//             })}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// };

'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const TestimonialsColumn = (props: {
  className?: string;
  testimonials: {
    text: string;
    image: string;
    name: string;
    role: string;
    youtubeUrl?: string | null;
  }[];
  duration?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const resumeTimeout = useRef<NodeJS.Timeout | null>(null);

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  const getYouTubeVideoId = (url: string) => {
    const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^\s&?/]+)/);
    return match ? match[1] : null;
  };

  const pauseScroll = () => {
    tweenRef.current?.pause();
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    setIsPaused(true);
  };

  const resumeScroll = (delay = 10000) => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    resumeTimeout.current = setTimeout(() => {
      tweenRef.current?.play();
      setIsPaused(false);
      setExpandedIndex(null);
    }, delay);
  };

  const handleMouseEnter = (index: number) => {
    if (!isMobile) {
      setHoveredIndex(index);
      pauseScroll();
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      setHoveredIndex(null);
      resumeScroll(1000);
    }
  };

  const handleClick = (index: number) => {
    if (isMobile) {
      if (expandedIndex === index) {
        setExpandedIndex(null);
        resumeScroll(1000);
      } else {
        setExpandedIndex(index);
        pauseScroll();
        resumeScroll(10000);
      }
    }
  };

  useEffect(() => {
    if (containerRef.current) {
      tweenRef.current = gsap.to(containerRef.current, {
        yPercent: -100,
        duration: props.duration || 20,
        repeat: -1,
        ease: 'linear',
        paused: true,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top bottom',
          end: 'bottom top',
          onEnter: () => tweenRef.current?.play(),
          onLeave: () => tweenRef.current?.pause(),
          onEnterBack: () => tweenRef.current?.play(),
          onLeaveBack: () => tweenRef.current?.pause(),
        },
      });
    }

    return () => {
      tweenRef.current?.kill();
      if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    };
  }, [props.duration]);

  return (
    <div className={props.className}>
      <div ref={containerRef} className='flex flex-col gap-6 pb-6 will-change-transform'>
        {props.testimonials.map(({ text, image, name, role, youtubeUrl }, i) => {
          const videoId = youtubeUrl ? getYouTubeVideoId(youtubeUrl) : null;
          const isHovered = hoveredIndex === i;
          const isExpanded = expandedIndex === i;
          const shouldClamp = text.length > 160;
          const showFullText = isHovered || isExpanded;
          const [playVideo, setPlayVideo] = useState(false);

          return (
            <div
              key={i}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleClick(i)}
              className='cursor-pointer p-6 rounded-3xl border border-gray-200 shadow-md shadow-primary/5 max-w-xs w-full bg-white text-black relative flex flex-col hover:shadow-lg transition duration-300 overflow-hidden'
            >
              {/* Lightweight YouTube thumbnail */}
              {videoId && (
                <div className='w-full aspect-video mb-4 relative'>
                  {!playVideo ? (
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayVideo(true);
                        pauseScroll();
                        resumeScroll(10000);
                      }}
                      className='absolute inset-0 z-10 flex items-center justify-center bg-black/40 rounded-xl hover:bg-black/50 transition'
                    >
                      <svg className='w-12 h-12 text-white' fill='currentColor' viewBox='0 0 24 24'>
                        <path d='M8 5v14l11-7z' />
                      </svg>
                    </div>
                  ) : null}

                  {!playVideo ? (
                    <Image
                      src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                      alt='YouTube Preview'
                      fill
                      className='object-cover rounded-xl border border-black/10'
                    />
                  ) : (
                    <iframe
                      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                      title={name}
                      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                      allowFullScreen
                      className='w-full h-full rounded-xl border border-black/10'
                    />
                  )}
                </div>
              )}

              {/* Name & Role */}
              <div className='flex items-center gap-3 mb-3'>
                <Image
                  width={40}
                  height={40}
                  src={image}
                  alt={name}
                  className='h-10 w-10 rounded-full object-cover'
                />
                <div>
                  <div className='font-semibold text-sm'>{name}</div>
                  <div className='text-gray-500 text-xs'>{role}</div>
                </div>
              </div>

              {/* Description */}
              <div
                className={`text-sm text-gray-700 whitespace-pre-wrap break-words transition-all delay-500 duration-500 ease-in-out ${
                  showFullText
                    ? 'line-clamp-none max-h-fit'
                    : shouldClamp
                    ? 'line-clamp-3 max-h-20'
                    : ''
                }`}
              >
                {text}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
