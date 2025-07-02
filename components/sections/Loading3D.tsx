// components/Loading.jsx
"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center  justify-center h-screen w-full bg-white">
      {/* Logo with a rotating ring */}
      <div className="relative flex items-center justify-center">
        <div className="absolute rounded-full border-t-4 border-b-4 border-red-500 animate-spin h-24 w-24"></div>
        <Image
          src="/assets/logo.png" // Replace with your actual path
          alt="Insight Logo"
          width={64}
          height={64}
        />
      </div>

      {/* Company Name with gradient shimmer */}
      <h1 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-black animate-pulse">
        Loading...
      </h1>
    </div>
  );
}
