// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import uk from "@/public/assets/UK.png";
// import usa from "@/public/assets/country/Usa.jpg";
// import ireland from "@/public/assets/country/Ireland.jpg";
// import canada from "@/public/assets/country/Canada (1).png";
// import australia from "@/public/assets/country/Australia.png";
// import newzealand from "@/public/assets/country/New Zealand (1).png";
// import france from "@/public/assets/country/France.jpg";
// import germany from "@/public/assets/country/Germany (1).png";
// import uae from "@/public/assets/country/UAE (1).png";
// import singapore from "@/public/assets/country/Singapore.png";
// import malaysia from "@/public/assets/country/Malaysia.png";
// import poland from "@/public/assets/country/Poland.png";
// import sweden from "@/public/assets/country/Sweden.png";
// import latvia from "@/public/assets/country/Latvia.jpg";
// import lithuania from "@/public/assets/country/Lithuania .jpg";
// import malta from "@/public/assets/country/malta.jpg";
// import netherland from "@/public/assets/country/Netherland.jpg";
// import finland from "@/public/assets/country/Finland.jpg";

// type Country = {
//   title: string;
//   image: any;
//   slug: string;
// };

// const countries: Country[] = [
//   { title: "Study in UK", image: uk, slug: "uk" },
//   { title: "Study in the USA", image: usa, slug: "usa" },
//   { title: "Study in Ireland", image: ireland, slug: "ireland" },
//   { title: "Study in Canada", image: canada, slug: "canada" },
//   { title: "Study in Australia", image: australia, slug: "australia" },
//   { title: "Study in New Zealand", image: newzealand, slug: "new-zealand" },
//   { title: "Study in France", image: france, slug: "france" },
//   { title: "Study in Germany", image: germany, slug: "germany" },
//   { title: "Study in the UAE", image: uae, slug: "uae" },
//   { title: "Study in Singapore", image: singapore, slug: "singapore" },
//   { title: "Study in Malaysia", image: malaysia, slug: "malaysia" },
//   { title: "Study in Poland", image: poland, slug: "poland" },
//   { title: "Study in Sweden", image: sweden, slug: "sweden" },
//   { title: "Study in Latvia", image: latvia, slug: "latvia" },
//   { title: "Study in Lithuania", image: lithuania, slug: "lithuania" },
//   { title: "Study in Malta", image: malta, slug: "malta" },
//   { title: "Study in Netherlands", image: netherland, slug: "netherlands" },
//   { title: "Study in Finland", image: finland, slug: "finland" },
// ];

// const Page = () => {
//   const [showContent, setShowContent] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setShowContent(window.scrollY > 100);
//     }
//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Hero Section */}
//       <section
//         className="w-full min-h-screen sm:h-80 md:h-96 flex justify-center items-center text-center px-4 sm:px-6 md:px-12 relative overflow-hidden bg-fixed"
//         style={{
//           backgroundImage:
//             "url('https://images.unsplash.com/photo-1594734415578-00fc9540929b?q=80&w=1470&auto=format&fit=crop')",
//           backgroundRepeat: "no-repeat",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundBlendMode: "overlay",
//           backgroundColor: "rgba(0,0,0,0.7)",
//         }}
//       >
//         <motion.h1
//           initial={{ opacity: 0, y: -50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, ease: "easeOut" }}
//           className="relative text-3xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-widest font-sans select-none text-white drop-shadow-lg"
//         >
//           Study <span className="text-primary">Abroad</span> Destinations
//         </motion.h1>

//         <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-red-500 animate-bounce">
//           <svg
//             className="w-8 h-8"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//           >
//             <path d="M12 5v14M19 12l-7 7-7-7" />
//           </svg>
//         </div>
//       </section>

//       {/* Cards Section */}
//       <section className="w-full mx-auto py-16 lg:py-20 bg-black px-4 sm:px-6 md:px-12">
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-gray-200">
//           {countries.map((country) => (
//             <Link href={`/countries/${country.slug}`} key={country.slug}>
//               <motion.div
//                 className="relative w-full max-w-xs mx-auto rounded-xl overflow-hidden shadow-xl group border border-gray-800 hover:border-primary/50 transition-all duration-300"
//                 whileHover={{ scale: 1.03 }}
//               >
//                 <div className="relative h-80 w-full">
//                   <Image
//                     src={country.image}
//                     alt={country.title}
//                     fill
//                     className="object-cover"
//                     priority
//                   />
//                   <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/60 to-transparent px-4 py-3">
//                     <h2 className="text-white text-lg font-semibold text-center">
//                       {country.title}
//                     </h2>
//                   </div>
//                 </div>
//               </motion.div>
//             </Link>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Page;

"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

// Image imports
import uk from "@/public/assets/UK.png";
import usa from "@/public/assets/country/Usa.jpg";
import ireland from "@/public/assets/country/Ireland.jpg";
import canada from "@/public/assets/country/Canada (1).png";
import australia from "@/public/assets/country/Australia.png";
import newzealand from "@/public/assets/country/New Zealand (1).png";
import france from "@/public/assets/country/France.jpg";
import germany from "@/public/assets/country/Germany (1).png";
import uae from "@/public/assets/country/UAE (1).png";
import singapore from "@/public/assets/country/Singapore.png";
import malaysia from "@/public/assets/country/Malaysia.png";
import poland from "@/public/assets/country/Poland.png";
import sweden from "@/public/assets/country/Sweden.png";
import latvia from "@/public/assets/country/Latvia.jpg";
import lithuania from "@/public/assets/country/Lithuania .jpg";
import malta from "@/public/assets/country/malta.jpg";
import netherland from "@/public/assets/country/Netherland.jpg";
import finland from "@/public/assets/country/Finland.jpg";
import { Button } from "@/components/ui/button";

const countries = [
  { title: "Study in UK", image: uk, slug: "uk" },
  { title: "Study in the USA", image: usa, slug: "usa" },
  { title: "Study in Ireland", image: ireland, slug: "ireland" },
  { title: "Study in Canada", image: canada, slug: "canada" },
  { title: "Study in Australia", image: australia, slug: "australia" },
  { title: "Study in New Zealand", image: newzealand, slug: "new-zealand" },
  { title: "Study in France", image: france, slug: "france" },
  { title: "Study in Germany", image: germany, slug: "germany" },
  { title: "Study in the UAE", image: uae, slug: "uae" },
  { title: "Study in Singapore", image: singapore, slug: "singapore" },
  { title: "Study in Malaysia", image: malaysia, slug: "malaysia" },
  { title: "Study in Poland", image: poland, slug: "poland" },
  { title: "Study in Sweden", image: sweden, slug: "sweden" },
  { title: "Study in Latvia", image: latvia, slug: "latvia" },
  { title: "Study in Lithuania", image: lithuania, slug: "lithuania" },
  { title: "Study in Malta", image: malta, slug: "malta" },
  { title: "Study in Netherlands", image: netherland, slug: "netherlands" },
  { title: "Study in Finland", image: finland, slug: "finland" },
];

export default function StudyAbroadAnimation() {
  const [activeIndex, setActiveIndex] = useState(0);
  const gotoRef = useRef<(index: number, dir: number) => void>(() => {});

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const sectionEls = document.querySelectorAll(".section");
    const imageEls = document.querySelectorAll(".background");
    const headingEls = document.querySelectorAll(".section-title");
    const outerEls = document.querySelectorAll(".outer");
    const innerEls = document.querySelectorAll(".inner");
    const footerEl = document.querySelector("footer");
    const headerEl = document.querySelector("header");

    let currentIndex = 0;
    let animating = false;
    let showNavTimeout: NodeJS.Timeout;

    const wrap = (i: number, max: number) => (i + max) % max;

    gsap.set(outerEls, { yPercent: 100 });
    gsap.set(innerEls, { yPercent: -100 });
    gsap.set(sectionEls[0], {
      autoAlpha: 1,
      zIndex: 1,
      pointerEvents: "auto",
    });

    const goto = (index: number, dir: number) => {
      index = wrap(index, sectionEls.length);
      if (index === currentIndex || animating) return;
      animating = true;

      const fromTop = dir === -1;
      const dFactor = fromTop ? -1 : 1;

      const tl = gsap.timeline({
        defaults: { duration: 1.25, ease: "power1.inOut" },
        onComplete: () => {
          animating = false;
        },
      });

      if (currentIndex >= 0) {
        gsap.set(sectionEls[currentIndex], { zIndex: 0 });
        tl.to(imageEls[currentIndex], { yPercent: -15 * dFactor }).set(
          sectionEls[currentIndex],
          { autoAlpha: 0, pointerEvents: "none" }
        );
      }

      gsap.set(sectionEls[index], {
        autoAlpha: 1,
        zIndex: 1,
        pointerEvents: "auto",
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
            ease: "power2",
            stagger: { each: 0.02, from: "random" },
          },
          0.2
        );

      setActiveIndex(index);
      currentIndex = index;
    };

    gotoRef.current = goto;

    const handleScroll = (e: WheelEvent) => {
      if (headerEl) headerEl.style.opacity = "0";
      clearTimeout(showNavTimeout);
      showNavTimeout = setTimeout(() => {
        if (headerEl) headerEl.style.opacity = "1";
      }, 1500);

      if (!animating) {
        if (footerEl) footerEl.style.display = "none";
        goto(currentIndex + (e.deltaY > 0 ? 1 : -1), e.deltaY > 0 ? 1 : -1);
      }
    };

    // 🟠 Mobile swipe logic
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const endY = e.changedTouches[0].clientY;
      const deltaY = startY - endY;

      if (Math.abs(deltaY) > 50 && !animating) {
        const direction = deltaY > 0 ? 1 : -1;
        goto(currentIndex + direction, direction);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: true });
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    goto(0, 1);

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = "auto";
      clearTimeout(showNavTimeout);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans">
      {countries.map((country) => (
        <section
          key={country.slug}
          id={country.slug}
          className="section absolute inset-0 opacity-0 z-0"
        >
          <div className="outer w-full h-full overflow-hidden relative">
            <div className="background absolute inset-0 z-0">
              <Image
                src={country.image}
                alt={country.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            <div className="inner relative z-10 w-full h-full flex items-end justify-center">
              <div className="absolute bottom-0 w-full bg-gradient-to-t from-black via-black/50 to-transparent px-4 py-6">
                <h2 className="section-title text-4xl md:text-6xl font-bold text-center">
                  {country.title}
                </h2>
                <div className="mt-4 text-center">
                  <Link href={`/countries/${country.slug}`} passHref>
                    <Button className="relative inline-flex items-center justify-center px-4 py-2 rounded-full text-white bg-black border border-black hover:text-white transition-colors before:absolute before:inset-0 before:rounded-full before:border before:border-red-500 before:opacity-100 hover:before:opacity-0 before:transition-opacity">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Left Vertical Number Nav */}
      <header className="fixed top-1/2 left-2 -translate-y-1/2 z-[999]">
        <nav className="flex flex-col gap-1 max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-red-500 scrollbar-track-transparent">
          {countries.map((country, i) => (
            <button
              key={country.slug}
              onClick={() => {
                const dir = i > activeIndex ? 1 : -1;
                gotoRef.current?.(i, dir);
              }}
              className={`w-6 h-6 text-[10px] sm:w-8 sm:h-8 sm:text-sm backdrop-blur-md bg-white/10 text-white border border-white/30 rounded-md shadow-md transition-transform hover:scale-105
              ${
                i === activeIndex
                  ? "bg-red-600 font-bold text-white shadow-red-500/50"
                  : "hover:bg-red-700/50"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </nav>
      </header>
    </div>
  );
}
