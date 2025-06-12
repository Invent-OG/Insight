"use client";

import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const AccordionScroll = () => {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#wrapper",
      content: "#content",
      smooth: true,
      effects: false,
      normalizeScroll: true,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".accordions",
        pin: true,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    tl.to(".accordion .text", {
      height: 0,
      paddingBottom: 0,
      opacity: 0,
      stagger: 0.5,
    });

    tl.to(
      ".accordion",
      {
        marginBottom: -15,
        stagger: 0.5,
      },
      "<"
    );
  }, []);

  return (
    <div
      id="wrapper"
      className="m-0 font-sans bg-gradient-to-br from-[#5c2fa6] via-[#5a36c0] to-[#5a36c0] scroll-smooth"
    >
      <div id="content">
        <div className="h-[70vh]" />
        <div className="accordions flex flex-col items-center pb-[20vh]">
          {accordionData.map(({ title, text, bg }, i) => (
            <div
              key={i}
              className={`accordion w-[min(50vw,280px)] max-w-[90vw] rounded-[15px] shadow-[0_30px_30px_-10px_rgba(0,0,0,0.3)] px-8 py-6 mb-10 text-white`}
              style={{ background: bg }}
            >
              <div className="title text-[max(2vw,24px)] leading-[1.1] pb-[0.4em] text-white drop-shadow-md">
                {title}
              </div>
              <div className="text text-[max(1vw,15px)] leading-[1.4] pb-5 text-white/70 overflow-hidden">
                {text}
              </div>
            </div>
          ))}
        </div>
        <div className="h-[70vh]" />
      </div>
    </div>
  );
};

const accordionData = [
  {
    title: "All-screen design.",
    text: `Lets you immerse yourself in whatever you’re reading, watching, or creating. The 10.9-inch Liquid Retina display features advanced technologies like True Tone, P3 wide color, and an antireflective coating.`,
    bg: "linear-gradient(200deg, rgb(29, 145, 252) 13.57%, rgb(90, 54, 192) 98.38%)",
  },
  {
    title: "Beauty all around.",
    text: `The breakthrough M1 chip is now in Air. An 8-core CPU delivers up to 60 percent faster performance than the previous generation...`,
    bg: "linear-gradient(200deg, rgb(242, 136, 133) 13.57%, rgb(233, 79, 102) 98.38%)",
  },
  {
    title: "Take Center Stage.",
    text: `The 12MP Ultra Wide front camera enables Center Stage, making video calls more natural and content creation more fun...`,
    bg: "linear-gradient(200deg, rgb(101, 187, 118) 13.57%, rgb(70, 111, 171) 98.38%)",
  },
  {
    title: "Pretty everywhere.",
    text: `Join superfast 5G wireless networks when you’re on the go. Download files, play multiplayer games, stream movies, check in with friends, and more.`,
    bg: "linear-gradient(200deg, #c215d1 13.57%, #9813a1 98.38%)",
  },
];

export default AccordionScroll;
