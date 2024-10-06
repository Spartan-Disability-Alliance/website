import React from "react";

/** A card for holding content.
 * @see https://daisyui.com/components/card/
 */
const Card: React.FC<{
  className?: string;
  children: React.ReactNode;
}> = ({ className, children }) => {
  return <div className={`card shadow-xl ${className}`}>{children}</div>;
};

export default Card;
