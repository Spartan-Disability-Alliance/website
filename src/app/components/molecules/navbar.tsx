import React from "react";
import LinkItem from "../atoms/linkItem";

const NavbarLinks: React.FC = () => {
  return (
    <>
      <LinkItem href="/about">About</LinkItem>
      <LinkItem href="/contact">Contact</LinkItem>
      <LinkItem href="/events">Events</LinkItem>
      <LinkItem href="/resources">Resources</LinkItem>
    </>
  );
};

export default NavbarLinks;
