import React, { useState, useEffect, useRef } from "react";

interface Ripple {
  id: number;
  x: number;
  y: number;
}

const DigitalSerenity = () => {
  const [mouseGradientStyle, setMouseGradientStyle] = useState({
    left: "0px",
    top: "0px",
    opacity: 0,
  });
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const [scrolled, setScrolled] = useState(false);
  const wordsRef = useRef<HTMLElement[]>([]);
  const floatingElementsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const animateWords = () => {
      const wordElements =
        document.querySelectorAll<HTMLElement>(".word-animate");
      wordElements.forEach((word) => {
        const delay = parseInt(word.getAttribute("data-delay") ?? "0") || 0;
        setTimeout(() => {
          word.style.animation = "word-appear 0.8s ease-out forwards";
        }, delay);
      });
    };
    const timeoutId = setTimeout(animateWords, 500);
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseGradientStyle({
        left: `${e.clientX}px`,
        top: `${e.clientY}px`,
        opacity: 1,
      });
    };
    const handleMouseLeave = () => {
      setMouseGradientStyle((prev) => ({ ...prev, opacity: 0 }));
    };
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newRipple: Ripple = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
      };
      setRipples((prev) => [...prev, newRipple]);
      setTimeout(
        () => setRipples((prev) => prev.filter((r) => r.id !== newRipple.id)),
        1000
      );
    };
    document.addEventListener("click", handleClick);
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    const wordElements =
      document.querySelectorAll<HTMLElement>(".word-animate");
    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.style.textShadow = "0 0 20px rgba(203, 213, 225, 0.5)";
    };
    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.style.textShadow = "none";
    };
    wordElements.forEach((word) => {
      word.addEventListener("mouseenter", handleMouseEnter);
      word.addEventListener("mouseleave", handleMouseLeave);
    });
    return () => {
      wordElements.forEach((word) => {
        word.removeEventListener("mouseenter", handleMouseEnter);
        word.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      ".floating-element-animate"
    );
    floatingElementsRef.current = Array.from(elements);
    const handleScroll = () => {
      if (!scrolled) {
        setScrolled(true);
        floatingElementsRef.current.forEach((el, index) => {
          setTimeout(() => {
            el.style.animationPlayState = "running";
            el.style.opacity = "";
          }, parseFloat(el.style.animationDelay || "0") * 1000 + index * 100);
        });
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div>
      {/* Sample container */}
      <div
        style={{
          position: "fixed",
          left: mouseGradientStyle.left,
          top: mouseGradientStyle.top,
          opacity: mouseGradientStyle.opacity,
          width: "100px",
          height: "100px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.5) 0%, rgba(0,0,0,0) 80%)",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
        }}
      />
      {/* Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          style={{
            position: "fixed",
            left: ripple.x,
            top: ripple.y,
            width: "20px",
            height: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            animation: "ripple-effect 1s ease-out forwards",
          }}
        />
      ))}
    </div>
  );
};

export default DigitalSerenity;
