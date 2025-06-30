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
import PopupFormModal from "@/components/sections/PopupFormModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body className="font-sans">
        <QueryClientProvider client={queryClient}>
          <Providers>
            <LenisProvider />
            <Nav isLoading={false} />
            <main>{children}</main>
            <Footer />
          </Providers>
          <FloatingContactButtons />
          <PopupFormModal />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
