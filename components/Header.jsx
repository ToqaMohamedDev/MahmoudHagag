"use client";
import React, { useState, useEffect } from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";



const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollyPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollyPos);
  },[]);
  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-xl border-b-1 dark:bg-accent"
          : "py-4 dark:bg-transparent"
      } sticky top-0 z-30 transtion-all ${pathname === "/" && "bg[#fef9f5]"}`}
    >
      <div className="container mx-auto">
        <div className="flex  justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
        
            <ThemeToggler />
            <div className="">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
