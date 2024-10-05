// src/components/atoms/Logo.tsx
import React from "react";
import Image from "next/image";
import logo from "../../assets/images/temp_logo.png";

const Logo: React.FC = () => {
  return (
    <Image
      src={logo}
      alt="Spartan Disability Alliance Logo"
      width={60}
      height={60}
      className="cursor-pointer"
    />
  );
};

export default Logo;
