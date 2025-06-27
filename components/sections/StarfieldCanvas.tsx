"use client";

import { useEffect, useRef } from "react";

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let stars: {
      x: number;
      y: number;
      r: number;
      alpha: number;
      delta: number;
    }[] = [];

    const starCount = window.innerWidth < 768 ? 100 : 200;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      stars = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        alpha: Math.random(),
        delta: Math.random() * 0.02 + 0.005,
      }));
    };

    const drawStar = (x: number, y: number, r: number, alpha: number) => {
      // Clamp alpha so stars don’t get too transparent
      const brightAlpha = Math.min(Math.max(alpha, 0.7), 1);

      const gradient = ctx.createRadialGradient(x, y, 0, x, y, r * 2);
      gradient.addColorStop(0, `rgba(255, 255, 255, ${brightAlpha})`); // bright white core
      gradient.addColorStop(0.3, `rgba(255, 255, 255, ${brightAlpha * 0.6})`); // strong glow
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.beginPath();
      ctx.fillStyle = gradient;
      ctx.arc(x, y, r * 2, 0, Math.PI * 2);
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.alpha += star.delta;
        if (star.alpha >= 1 || star.alpha <= 0) star.delta *= -1;

        drawStar(star.x, star.y, star.r, star.alpha);
      });

      requestAnimationFrame(animate);
    };

    resize();
    animate();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-10 w-full h-full pointer-events-none"
    />
  );
}
