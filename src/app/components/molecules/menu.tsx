// this is for the mobile hamburger menu
import React, { useState } from "react";
import Button from "../atoms/button";
import Icon from "../atoms/menuIcon";
import NavbarLinks from "./navbar";

const Menu: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="lg:hidden dropdown dropdown-end">
      <Button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="btn-square btn-ghost"
      >
        <Icon />
      </Button>
      {isMenuOpen && (
        <ul className="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
          <NavbarLinks />
        </ul>
      )}
    </div>
  );
};

export default Menu;
