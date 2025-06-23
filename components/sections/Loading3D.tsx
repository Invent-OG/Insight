// components/Loading.jsx
"use client";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full bg-white">
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
// components/Loading.jsx
// "use client";
// import Image from "next/image";

// export default function Loading() {
//   return (
//     <div className="relative flex flex-col items-center justify-center h-screen w-screen bg-white overflow-hidden">
//       {/* Subtle pulsing background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-white animate-[bgPulse_3s_infinite]" />

//       {/* 3D layered spinning rings */}
//       <div className="relative flex items-center justify-center">
//         {/* Outer ring */}
//         <div className="absolute rounded-full border-t-4 border-b-4 border-red-500 h-32 w-32 animate-[spin_3s_linear_infinite] opacity-70"></div>

//         {/* Inner ring with reverse spin */}
//         <div className="absolute rounded-full border-t-4 border-b-4 border-black h-24 w-24 animate-[spinReverse_4s_linear_infinite] opacity-50"></div>

//         {/* Logo */}
//         <div className="relative z-10 p-3 rounded-full bg-white shadow-2xl">
//           <Image
//             src="/assets/logo.png"
//             alt="Insight Logo"
//             width={64}
//             height={64}
//           />
//         </div>
//       </div>

//       {/* Company Name with 3D-style text effect */}
//       <h1 className="mt-6 text-4xl font-extrabold text-red-600 relative">
//         <span className="relative z-10">Insight</span>
//         <span
//           className="absolute left-0 top-0 text-4xl font-extrabold text-transparent"
//           style={{
//             WebkitTextStroke: "1px rgba(0,0,0,0.2)",
//             transform: "translate(2px, 2px)",
//             zIndex: "0",
//           }}
//         >
//           Insight
//         </span>
//       </h1>

//       <style jsx>{`
//         @keyframes spin {
//           0% {
//             transform: rotate(0deg);
//           }
//           100% {
//             transform: rotate(360deg);
//           }
//         }
//         @keyframes spinReverse {
//           0% {
//             transform: rotate(360deg);
//           }
//           100% {
//             transform: rotate(0deg);
//           }
//         }
//         @keyframes bgPulse {
//           0%,
//           100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.9;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
