import "./globals.css";
import Navbar from "@/components/sections/Navbar"; // Make sure the path is correct

export const metadata = {
  title: "Insight | Expert Study Abroad Consultants for Global Education",
  description:
    "Turn your study abroad dreams into reality with Insight. Insight’s expert guidance, trusted support, and global opportunities await!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
