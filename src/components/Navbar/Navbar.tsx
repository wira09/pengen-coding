"use client";

import Image from "next/image";
import { useState } from "react";
import NavMenu from "@/components/Navbar/NavMenu";
import NavButton from "@/components/Navbar/NavButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="p-5 sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* LEFT */}
          <div className="flex items-center gap-3">
            {/* Mobile Menu */}
            <button
              className="lg:hidden btn btn-ghost btn-sm text-r"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>

            {/* Logo for desktop */}
            <div className="hidden lg:flex items-center gap-2">
              <Image
                src="/pengen-coding.png"
                alt="Pengen Coding"
                width={120}
                height={120}
              />
              {/* <span className="hidden sm:block text-lg font-bold text-gray-800">
                Pengen <span className="font-bold text-amber-600">Coding</span>
              </span> */}
            </div>
          </div>

          {/* CENTER */}
          <nav className="hidden lg:flex items-center gap-1">
            <NavMenu />
          </nav>

          {/* RIGHT */}
          <div className="flex items-center gap-3">
            {/* Logo for mobile */}
            <div className="lg:hidden flex items-center gap-2">
              <Image
                src="/pengen-coding.png"
                alt="Pengen Coding"
                width={120}
                height={120}
              />
              {/* <span className="hidden sm:block text-lg font-bold text-gray-800">
                Pengen <span className="font-bold text-amber-600">Coding</span>
              </span> */}
            </div>

            {/* NavButton for desktop */}
            <div className="hidden lg:flex">
              <NavButton />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 px-4 border-t border-gray-100 bg-white/95 backdrop-blur-sm rounded-b-lg shadow-inner">
            <NavMenu />

            {/* LOGIN BUTTON MOBILE */}
            <div className="mt-6">
              <NavButton mobile />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
