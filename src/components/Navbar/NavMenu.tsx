"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavMenu = () => {
  const pathname = usePathname();
  const navLink = [
    { name: "Beranda", path: "/" },
    { name: "Materi", path: "/materi" },
    { name: "Souce Code", path: "/code" },
    { name: "Kontak", path: "/kontak" },
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-1">
      {navLink.map((link) => (
        <Link
          key={link.name}
          href={link.path}
          className={`font-medium text-gray-700 hover:text-amber-600 px-4 py-2.5 rounded-lg transition-all duration-300 relative group ${
            pathname === link.path ? "font-semibold text-amber-600" : ""
          }`}
          onClick={() => {
            if (window.innerWidth < 1024) {
              const event = new MouseEvent("click", {
                view: window,
                bubbles: true,
                cancelable: true,
              });
              const menuButton = document.querySelector(
                'button[aria-label="Toggle menu"]'
              );
              menuButton?.dispatchEvent(event);
            }
          }}
        >
          {link.name}
          <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavMenu;
