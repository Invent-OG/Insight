"use client";

import { useEffect, useRef, useState } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Store scroll position in a ref so it doesn't cause re-renders
  const scrollYRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    type Star = {
      x: number;
      y: number;
      r: number;
      alphaPhase: number; // for smooth sine wave animation
      alphaSpeed: number; // speed of blinking
    };

    const starCount = window.innerWidth < 768 ? 100 : 200;
    let stars: Star[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alphaPhase: Math.random() * Math.PI * 2,
        alphaSpeed: 0.02 + Math.random() * 0.015,
      }));
    };

    const drawStar = (x: number, y: number, r: number, alpha: number) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${alpha})`);
      gradient.addColorStop(0.3, `rgba(255, 255, 255, ${alpha * 0.6})`);
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, r * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    let lastTime = 0;

    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaTime = time - lastTime;
      lastTime = time;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update alpha phase for blinking
        star.alphaPhase += star.alphaSpeed * (deltaTime / 16);

        // Calculate blinking alpha
        const alpha = 0.65 + 0.35 * Math.sin(star.alphaPhase);

        // Calculate star y position offset by scrollY and wrap around canvas height
        const yPos = (star.y + scrollYRef.current) % canvas.height;

        drawStar(star.x, yPos, star.r, alpha);
      });

      requestAnimationFrame(animate);
    };

    // Update scrollYRef on scroll
    const onScroll = () => {
      scrollYRef.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", resize);

    resize();
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
    />
  );
}
