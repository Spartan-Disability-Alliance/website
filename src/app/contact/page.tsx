import React from "react";
import Heading from "../components/atoms/heading";
import SocialBtn from "../components/molecules/social-btn";
import socialLinksData from "../assets/data.json";

export default function ContactPage() {
  return (
    <div className="container mx-auto py-20">
      <Heading>Contact</Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 px-4 max-w-2xl mx-auto">
        {socialLinksData.socialLinks.map((socialLink, index) => (
          <SocialBtn
            key={index}
            href={socialLink.href}
            icon={socialLink.icon}
            text={socialLink.text}
          />
        ))}
      </div>
    </div>
  );
}
