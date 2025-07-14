"use client";

import "./globals.css";
import { Providers } from "./providers";
import { LenisProvider } from "@/components/LenisProvider";
import Nav from "@/components/sections/Nav";
import { Footer } from "@/components/sections/footer-section";
import FloatingContactButtons from "@/components/sections/FloatingContactButtons";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useEffect, useState } from "react";
import Loading from "@/components/sections/Loading3D";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [queryClient] = useState(() => new QueryClient());

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Loading started");
    const timer = setTimeout(() => {
      console.log("Loading ended");
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en">
      <body className="font-sans ">
        <link rel="icon" href="/favicon.ico" />

        <QueryClientProvider client={queryClient}>
          <Providers>
            <Toaster />
            <LenisProvider />
            {loading ? (
              <Loading />
            ) : (
              <>
                <Nav isLoading={false} />
                <main>{children}</main>
                <Footer />
                <FloatingContactButtons />
              </>
            )}
          </Providers>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
