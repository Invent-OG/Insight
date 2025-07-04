// components/FloatingContactButtons.tsx
"use client";

import { FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";
import PopupFormModal from "./PopupFormModal";

export default function FloatingContactButtons() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) return null;

  return (
    <div className="fixed  z-50 flex flex-col gap-3 bottom-5 right-5">
      {/* WhatsApp Button */}

      <a
        href="https://wa.me/919629472748" // Replace with your number
        target="_blank"
        rel="noopener noreferrer"
        className="p-4 text-white transition-transform transform bg-green-500 rounded-full shadow-lg hover:bg-green-600 hover:scale-105"
        title="Chat on WhatsApp"
      >
        {/* <MessageSquare className="w-5 h-5" /> */}
        <FaWhatsapp className="w-5 h-5" />
      </a>

      <PopupFormModal />
    </div>
  );
}
