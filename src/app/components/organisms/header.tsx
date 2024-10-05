"use client";
import React from "react";
import Link from "next/link";
import Logo from "../atoms/logo";
import NavbarLinks from "../molecules/navbar";
import HamburgerMenu from "../molecules/menu";

const Header: React.FC = () => {
  return (
    <header className="bg-base-300 shadow-lg">
      <div className="container mx-auto navbar py-4 px-6 flex justify-between items-center">
        <Link
          href="/"
          className="flex items-center space-x-3 transition-transform transform hover:scale-110"
        >
          <Logo />
        </Link>

        <HamburgerMenu />

        <nav className="hidden lg:flex lg:items-center lg:space-x-12 ml-auto">
          <NavbarLinks />
        </nav>
      </div>
    </header>
  );
};

export default Header;
