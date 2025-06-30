// // app/layout.tsx
// "use client";
// import "./globals.css";

// import type { Metadata } from "next";
// import { Outfit } from "next/font/google";
// import { Providers } from "./providers";
// import { LenisProvider } from "@/components/LenisProvider";
// import Nav from "@/components/sections/Nav";
// import { Footer } from "@/components/footer-section";
// import Loading3D from "@/components/sections/Loading3D"; // ⬅️ Import here
// import FloatingContactButtons from "@/components/sections/FloatingContactButtons";
// import MultiLayerParallax from "@/components/sections/HeroParallax";
// import Loading from "@/components/sections/Loading3D";
// import { useState, useEffect } from "react";
// import { LoaderProvider } from "@/components/LoaderProvider";

// const inter = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // const [isLoading, setIsLoading] = useState(true);

//   // useEffect(() => {
//   //   const timer = setTimeout(() => {
//   //     setIsLoading(false);
//   //   }, 2000);
//   //   return () => clearTimeout(timer);
//   // }, []);

//   // if (isLoading) {
//   //   return <Loading />;
//   // }
//   return (
//     <html lang="en">
//       <body className={`${inter.variable} font-sans`}>
//         {/* <LoaderProvider> */}
//         <Providers>
//           <LenisProvider />
//           <Nav isLoading={false} />
//           <main>{children}</main>
//           <Footer />
//         </Providers>
//         <FloatingContactButtons />
//         {/* </LoaderProvider> */}
//       </body>
//     </html>
//   );
// }
"use client";

import "./globals.css";

import type { Metadata } from "next";
import { Providers } from "./providers";
import { LenisProvider } from "@/components/LenisProvider";
import Nav from "@/components/sections/Nav";
import { Footer } from "@/components/footer-section";
import FloatingContactButtons from "@/components/sections/FloatingContactButtons";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Providers>
          <LenisProvider />
          <Nav isLoading={false} />
          <main>{children}</main>
          <Footer />
        </Providers>
        <FloatingContactButtons />
      </body>
    </html>
  );
}
