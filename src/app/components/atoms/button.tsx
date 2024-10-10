import React from "react";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className }) => {
  return (
    <button className={`shadow-xl btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
