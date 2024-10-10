"use client";
import React from "react";
import Link from "next/link";
import Button from "../atoms/button";

interface SocialBtnProps {
  href: string;
  icon: string;
  text: string;
}

const SocialBtn: React.FC<SocialBtnProps> = ({ href, icon, text }) => {
  return (
    <Link href={href} legacyBehavior passHref>
      <a target="_blank" rel="noopener noreferrer" className="w-full">
        <Button
          onClick={() => {}}
          className={`h-20 w-full flex items-center justify-center space-x-2 rounded-lg border-none bg-gray-800 hover:scale-110 ease-out duration-300 hover:bg-gray-700 animate-fade-in-bottom`}
        >
          <span className={`icon`} dangerouslySetInnerHTML={{ __html: icon }} />
          <span>{text}</span>
        </Button>
      </a>
    </Link>
  );
};

export default SocialBtn;
