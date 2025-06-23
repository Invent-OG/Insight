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

export const metadata = {
  title: "Insight | Expert Study Abroad Consultants for Global Education",
  description:
    "Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!",
  keywords:
    "study abroad, global education, international students, expert guidance, trusted support, study visa, international admissions, overseas education",
  icons: {
    icon: "/assets/logo.png",
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
