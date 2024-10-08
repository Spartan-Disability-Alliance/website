import React from "react";
import Heading from "../components/atoms/heading";
import data from "../assets/data.json";
import ResourceCard from "../components/molecules/resource-card";

export default function EventsPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <Heading>Resources</Heading>
      {data.resources.map((resource, index) => (
        <ResourceCard key={index} title={resource.title} links={resource.links} />
      ))}
    </div>
  );
}
