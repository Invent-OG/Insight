// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { Providers } from "./providers";
import { LenisProvider } from "@/components/LenisProvider";
import Nav from "@/components/sections/Nav";
import { Footer } from "@/components/footer-section";
import Loading3D from "@/components/sections/Loading3D"; // ⬅️ Import here
import FloatingContactButtons from "@/components/sections/FloatingContactButtons";
import MultiLayerParallax from "@/components/sections/HeroParallax";

const inter = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title:
    "Leading Solar Energy Solutions in Coimbatore | Nigaran Solar Tamil Nadu",
  description:
    "Nigaran Solar offers top-quality solar panel solutions in Coimbatore and Tamil Nadu. We specialize in On-Grid, Off-Grid, and Hybrid Solar Systems for residential and commercial installations. Get your free solar consultation today!",
  keywords:
    "solar energy, solar panels, solar power systems, on-grid solar, off-grid solar, hybrid solar systems, residential solar, commercial solar, solar solutions Tamil Nadu, solar companies in TamilNadu",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isLoading = false; // 👈 Replace with your real loading state

  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <LenisProvider />
          <Nav />
          {isLoading ? <Loading3D /> : <main>{children}</main>}

          <Footer />
        </Providers>
        <FloatingContactButtons />
      </body>
    </html>
  );
}
