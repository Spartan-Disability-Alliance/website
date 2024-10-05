import React from "react";
import Link from "next/link";

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavButton: React.FC<NavButtonProps> = ({ href, children, className }) => {
  return (
    <Link
      href={href}
      className={`hover:bg-neutral-content hover:scale-110 hover:text-primary-content rounded-lg transition-all p-3 text-lg ${className}`}
    >
      {children}
    </Link>
  );
};

export default NavButton;
