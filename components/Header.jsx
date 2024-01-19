"use client";

import React, { useState, useEffect } from "react";

//components
import Logo from "./Logo";
import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 19 ? setHeader(true) : setHeader(false);
    });

    //remove event
    return () => window.removeEventListener("scroll", scrollYPos);
  });

  return (
    <>
      <header
        className={`${
          header
            ? " py-5 bg-white backdrop-blur-2xl shadow-lg dark:bg-transparent"
            : " py-5 dark:bg-transparent bg-transparent backdrop-blur-2xl"
        } sticky top-0 z-30 transition-all ${
          pathname === "/" && "bg-[#fef9f5]"
        }`}
      >
        <div className="container mx-auto ">
          <div className="flex justify-between items-center">
            <Logo />
            <div className=" flex items-center gap-x-6">
              {/* Nav */}
              <Nav
                containerStyles="hidden xl:flex gap-x-8 items-center"
                linkStyles="relative hover:text-primary transition-all font-medium"
                underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
              />
              <ThemeToggler />
              {/* Mobile Nav */}
              <div className="xl:hidden">
                <MobileNav />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
