"use client";

import Link from "next/link";

const NavButton = ({ mobile = false }) => {
  return (
    <Link
      href="/login"
      className={` border border-amber-600 bg-amber-600 text-white hover:bg-white hover:text-amber-600 inline-flex items-center justify-center rounded-lg font-semibold text-sm bg-warnin transition-all duration-200 hover:bg-warning-strong focus:outline-none focus:ring-2 focus:ring-warning-medium focus:ring-offset-2 active:scale-95                                                                            
      ${mobile ? "w-full py-3" : "px-5 py-2.5"}`}
    >
      Login
    </Link>
  );
};

export default NavButton;
