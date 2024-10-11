// src/components/atoms/Logo.tsx
import React from "react";
import Image from "next/image";

const Logo: React.FC = () => {
  return (
    <Image
      src="/temp_logo.png"
      alt="Spartan Disability Alliance Logo"
      width={60}
      height={60}
      className="cursor-pointer"
    />
  );
};

export default Logo;
