"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-black text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo wrapped with Link for redirect */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="https://inkxnijaveazwuplldwu.supabase.co/storage/v1/object/public/images/testimonials/1747896131969.png"
            alt="Insight Logo"
            width={40}
            height={40}
          />
          <span className="font-bold text-xl">Insight</span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex space-x-6 text-sm uppercase font-semibold">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About Us</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/testimonials">Testimonials</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* Call Info (lg and above) */}
        <div className="hidden lg:flex items-center space-x-2 text-sm">
          <Phone className="w-5 h-5 text-yellow-400" />
          <span>Call Us Now</span>
          <span className="font-bold text-yellow-400">+91 7593 000 094</span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black px-6 pb-4 uppercase font-semibold text-sm flex flex-col text-center">
          {/* Each Link gets a bottom border except the last */}
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            About Us
          </Link>
          <Link
            href="/courses"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            Courses
          </Link>
          <Link
            href="/testimonials"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            Testimonials
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-3 border-b border-gray-600 last:border-none"
          >
            Contact Us
          </Link>

          <div className="flex items-center space-x-2 text-yellow-400 pt-4">
            <Phone className="w-5 h-5" />
            <span>Call Us Now</span>
            <span className="font-bold ">+91 7593 000 094</span>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
