"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import logo from "@/public/assets/logo.png";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import whitelogo from "@/public/assets/whitelogo.png";

export default function Nav() {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  console.log(pathname);

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const wrapperRef = useRef<HTMLDivElement | null>(null); // ✅ outer wrapper for outside click
  const navRef = useRef<HTMLElement | null>(null);
  const linksRef = useRef<HTMLAnchorElement[]>([]);
  const closeRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLHeadingElement | null>(null);

  const tl = useRef<gsap.core.Timeline | null>(null);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isAdmin) return;

    tl.current = gsap.timeline({
      defaults: { duration: 0.6, ease: "expo.inOut" },
      paused: true,
      onReverseComplete: () => {
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

    return () => {
      tl.current?.kill();
    };
  }, [isAdmin]);

  // ✅ Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const openMenu = () => {
    if (!isAdmin) {
      tl.current?.play();
      setIsOpen(true);
    }
  };

  const closeMenu = () => {
    if (!isAdmin) {
      tl.current?.reverse();
    }
  };

  const addToLinksRef = (el: HTMLAnchorElement | null) => {
    if (el && !linksRef.current.includes(el)) {
      linksRef.current.push(el);
    }
  };

  if (isAdmin) return null;

  return (
    <div ref={wrapperRef}>
      <div
        className={cn(
          "lg:px-28 px-5 py-3 w-full flex items-center transition-all duration-500 justify-between fixed z-50",
          isScrolled
            ? "bg-gradient-to-t from-transparent to-black [mask-image:linear-gradient(to_bottom,black_25%,black_75%)]"
            : "bg-transparent"
        )}
      >
        {/* Logo */}
        <Image
          onClick={() => router.push("/")}
          src={logo}
          alt="Insight Logo"
          width={60}
          height={60}
          className="object-cover hover:cursor-pointer"
        />

        {/* Hamburger */}
        {!isOpen && (
          <div
            className="flex flex-col items-center justify-center cursor-pointer group rounded-full"
            onClick={openMenu}
            aria-label="Open Menu"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && openMenu()}
          >
            <span
              className={cn(
                "w-[20px] h-[3px]  rounded-sm mb-[3px] transition-all duration-300",
                (pathname === "/services" || pathname === "/contact") &&
                  !isScrolled
                  ? "bg-black"
                  : "bg-[#faf9f9]"
              )}
            />
            <span
              className={cn(
                "w-[20px] h-[3px]  rounded-sm mb-[3px] transition-all duration-300",
                (pathname === "/services" || pathname === "/contact") &&
                  !isScrolled
                  ? "bg-black"
                  : "bg-[#faf9f9]"
              )}
            />
            <span
              className={cn(
                "w-[20px] h-[3px]  rounded-sm mb-[3px] transition-all duration-300",
                (pathname === "/services" || pathname === "/contact") &&
                  !isScrolled
                  ? "bg-black"
                  : "bg-[#faf9f9]"
              )}
            />
          </div>
        )}
      </div>

      {/* Sidebar Nav */}
      <nav
        ref={navRef}
        className="fixed top-0 right-[-100%] w-[80vw] max-w-[320px] h-0 bg-gradient-to-b from-red-700 via-red-700 to-black shadow-2xl shadow-black/60 overflow-hidden flex flex-col pt-[60px] z-[999]"
      >
        {/* Nav Header */}
        <div className="flex items-center gap-2.5 px-5 pb-5">
          <Image
            src={whitelogo}
            alt="Insight Logo"
            width={40}
            height={40}
            className="rounded-full "
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
          className="absolute top-[15px] right-5 w-7.5 h-7.5 cursor-pointer opacity-0 pointer-events-none flex items-center justify-center"
        >
          <div className="relative w-6 h-6">
            <span className="absolute left-3 top-0 w-[3px] h-6 bg-white rotate-45 rounded-sm" />
            <span className="absolute left-3 top-0 w-[3px] h-6 bg-white -rotate-45 rounded-sm" />
          </div>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-col gap-6 mt-10 pl-5 capitalize">
          {[
            { name: "home", route: "/" },
            { name: "services", route: "/services" },
            { name: "about", route: "/about" },
            { name: "courses & countries", route: "/courses" },
            { name: "english programs", route: "/english-programs" },
            { name: "blogs", route: "/blogs" },
            { name: "contact", route: "/contact" },
          ].map(({ name, route }) => {
            const isActive = pathname === route;

            return (
              <li key={name}>
                <a
                  href={route}
                  ref={addToLinksRef}
                  className={cn(
                    "inline-block text-white text-xl font-medium no-underline opacity-0 pointer-events-none transition-colors duration-300 hover:text-gray-300 focus:text-primary focus:outline-none pl-3",
                    isActive && "border-l-4 border-white/50 text-gray-300"
                  )}
                >
                  {name}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
