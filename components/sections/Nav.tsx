"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Nav() {
  const navRef = useRef<HTMLElement | null>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const closeRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Initialize GSAP timeline for menu animation
    tl.current = gsap.timeline({
      defaults: { duration: 0.6, ease: "expo.inOut" },
      paused: true,
      onReverseComplete: () => {
        // After close animation finishes, update state to hide menu and show hamburger
        setIsOpen(false);
      },
    });

    tl.current
      .to(navRef.current, { right: 0 })
      .to(navRef.current, { height: "100vh" }, "-=0.1")
      .to(
        linksRef.current,
        { opacity: 1, pointerEvents: "all", stagger: 0.1 },
        "-=0.8"
      )
      .to(closeRef.current, { opacity: 1, pointerEvents: "all" }, "-=0.8")
      .to(headerRef.current, { opacity: 1, pointerEvents: "all" }, "-=1");

    // Cleanup timeline on unmount
    return () => {
      tl.current?.kill();
    };
  }, []);

  const openMenu = () => {
    tl.current?.play();
    setIsOpen(true);
  };

  const closeMenu = () => {
    tl.current?.reverse();
    // Don't setIsOpen(false) here, wait for onReverseComplete callback
  };

  // Add link elements to refs for GSAP animation
  const addToLinksRef = (el: HTMLAnchorElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };
  const router = useRouter();

  return (
    <>
      {/* Logo fixed top-left */}
      <div className="fixed top-[5%] left-[5%] w-[40px] h-[40px] z-[1000]">
        <Image
        onClick={()=>router.push('/')}
          src={logo}
          alt="Insight Logo"
          width={50}
          height={50}
          className="rounded-full  h-10 hover:cursor-pointer "
        />
      </div>

      {/* Hamburger Icon - visible only when menu is closed */}
      {!isOpen && (
        <div
          className="fixed top-[5%] right-[5%] w-[40px] h-[40px] z-[1000] flex flex-col items-center justify-center cursor-pointer group  rounded-full p-1"
          onClick={openMenu}
          aria-label="Open Menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && openMenu()}
        >
          <span className="w-[20px] h-[3px] bg-[#faf9f9] rounded-sm transition-all duration-300 ease-in-out mb-[3px]"></span>
          <span className="w-[20px] h-[3px] bg-[#faf9f9] rounded-sm transition-all duration-300 ease-in-out mb-[3px]"></span>
          <span className="w-[20px] h-[3px] bg-[#faf9f9] rounded-sm transition-all duration-300 ease-in-out"></span>
        </div>
      )}

      {/* Navigation Menu */}
      <nav
        ref={navRef}
        className="fixed top-0 right-[-100%] w-[80vw] max-w-[320px] h-0 bg-gradient-to-b from-black via-red-700 to-black shadow-lg shadow-black/60 overflow-hidden flex flex-col pt-[60px] z-[999]"
      >
        {/* Nav Header with logo inside menu */}
        <div className="flex items-center gap-2.5 px-5 pb-5">
          <Image
            src={logo}
            alt="Insight Logo"
            width={40}
            height={40}
            className="rounded-full"
          />
          <h2
            ref={headerRef}
            className="text-white text-2xl font-extrabold opacity-0 pointer-events-none select-none"
          >
            Insight
          </h2>
        </div>

        {/* Close Button */}
        <div
          ref={closeRef}
          onClick={closeMenu}
          aria-label="Close Menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && closeMenu()}
          className="absolute top-[15px] right-5 w-7.5 h-7.5 cursor-pointer opacity-0 pointer-events-none flex items-center justify-center focus:outline-white focus:outline-2"
        >
          <div className="relative w-6 h-6">
            <span className="absolute left-3 top-0 w-[3px] h-6 bg-white rounded-sm rotate-45 transition-colors duration-300 ease-in-out pointer-events-none"></span>
            <span className="absolute left-3 top-0 w-[3px] h-6 bg-white rounded-sm -rotate-45 transition-colors duration-300 ease-in-out pointer-events-none"></span>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 mt-10 pl-5 list-none">
          {[
            { name: "HOME", route: "/" },
            { name: "SERVICES", route: "/services" },
            { name: "ABOUT US", route: "/about" },
            { name: "COURSES", route: "/courses" },
            { name: "TESTIMONIALS", route: "/testimonials" },
            { name: "CONTACT US", route: "/contact" },
          ].map(({ name, route }) => (
            <li key={name}>
              <a
                href={route}
                ref={addToLinksRef}
                className="text-white text-xl font-medium no-underline opacity-0 pointer-events-none select-none transition-colors duration-300 ease-in-out hover:text-gray-500 focus:text-primary focus:outline-none"
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
