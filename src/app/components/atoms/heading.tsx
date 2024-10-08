import React from "react";

interface HeadingProps {
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({ className = '', children }) => {
  const defaultClasses = "text-5xl text-center mb-8 animate-fade-in-top";
  const combinedClasses = `${defaultClasses} ${className}`;

  return <h1 className={combinedClasses}>{children}</h1>;
};

export default Heading;
