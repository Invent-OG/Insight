// "use client";

// import {
//   createContext,
//   useState,
//   useEffect,
//   useContext,
//   useRef,
//   useLayoutEffect,
// } from "react";
// import { gsap } from "gsap";
// import Image from "next/image";

// interface LoaderContextType {
//   loading: boolean;
// }

// const LoaderContext = createContext<LoaderContextType>({
//   loading: true,
// });

// export function useLoader() {
//   return useContext(LoaderContext);
// }

// export function LoaderProvider({ children }: { children: React.ReactNode }) {
//   const [loading, setLoading] = useState(true);
//   const [triggerExit, setTriggerExit] = useState(false);
//   const loaderRef = useRef<HTMLDivElement>(null);

//   // Timeout to trigger exit animation
//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setTriggerExit(true);
//     }, 2500); // Set duration in milliseconds (e.g., 2500ms = 2.5s)

//     return () => clearTimeout(timeout);
//   }, []);

//   // Animate loader exit
//   useLayoutEffect(() => {
//     if (triggerExit && loaderRef.current) {
//       gsap.fromTo(
//         loaderRef.current,
//         { y: 0, opacity: 1 },
//         {
//           y: "-100vh",
//           opacity: 0,
//           duration: 0.8,
//           ease: "power2.inOut",
//           onComplete: () => setLoading(false),
//         }
//       );
//     }
//   }, [triggerExit]);

//   return (
//     <LoaderContext.Provider value={{ loading }}>
//       {loading && (
//         <div
//           ref={loaderRef}
//           className="flex flex-col items-center justify-center h-screen w-full bg-white"
//         >
//           {/* Rotating Ring with Logo */}
//           <div className="relative flex items-center justify-center">
//             <div className="absolute rounded-full border-t-4 border-b-4 border-red-500 animate-spin h-24 w-24"></div>
//             <Image
//               src="/assets/logo.png"
//               alt="Insight Logo"
//               width={64}
//               height={64}
//             />
//           </div>

//           {/* Loading Text */}
//           <h1 className="mt-6 text-3xl font-bold text-transparent bg-clip-text bg-black animate-pulse">
//             Loading...
//           </h1>
//         </div>
//       )}
//       {children}
//     </LoaderContext.Provider>
//   );
// }
