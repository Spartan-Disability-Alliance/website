import React from "react";
import Heading from "../components/atoms/heading";
import data from "../assets/data.json";
import ResourceCard from "../components/molecules/resource-card";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "A centralized and up-to-date repository of local accessibility resources, curated by Spartan Disability Association.",
};
export default function EventsPage() {
  return (
    <div className="container mx-auto py-10 px-8">
      <Heading>Resources</Heading>
      {data.resources.map((resource, index) => (
        <ResourceCard
          key={index}
          title={resource.title}
          links={resource.links}
        />
      ))}
    </div>
  );
}
