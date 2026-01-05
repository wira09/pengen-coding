"use client";

import Link from "next/link";

const NavButton = ({ mobile = false }) => {
  return (
    <Link
      href="/login"
      className={` bg-amber-700 hover:bg-amber-500
        inline-flex items-center justify-center
        rounded-full font-semibold text-sm
        bg-warning text-white
        transition-all duration-200
        hover:bg-warning-strong
        focus:outline-none focus:ring-2 focus:ring-warning-medium focus:ring-offset-2
        active:scale-95

        ${mobile ? "w-full py-3" : "px-5 py-2.5"}
      `}
    >
      Login
    </Link>
  );
};

export default NavButton;
