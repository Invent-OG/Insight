"use client";

import "./globals.css";
import { Providers } from "./providers";
import { LenisProvider } from "@/components/LenisProvider";
import Nav from "@/components/sections/Nav";
import { Footer } from "@/components/footer-section";
import FloatingContactButtons from "@/components/sections/FloatingContactButtons";
import PopupFormModal from "@/components/sections/PopupFormModal";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { useState } from "react";
import { useParams } from "next/navigation";

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
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </body>
    </html>
  );
}
