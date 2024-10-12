import React from "react";
import Heading from "../components/atoms/heading";
import UpcomingEvents from "../components/organisms/upcoming-events";
import PastEvents from "../components/organisms/past-events";
import eventsData from "../assets/data.json";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description: "Check on upcoming events for Spartan Disability Association.",
};
export default function EventsPage() {
  const { upcomingEvents, pastEvents } = eventsData;

  return (
    <div className="container mx-auto max-w-4xl py-10 px-4">
      <Heading>Events</Heading>
      <div className="space-y-12">
        <UpcomingEvents events={upcomingEvents} />
        <PastEvents events={pastEvents} />
      </div>
    </div>
  );
}
