// src/components/organisms/PastEvents.tsx
import React from "react";
import EventCard from "../molecules/event-card";

interface PastEventsProps {
  events: {
    title: string;
    description: string;
    image?: string;
    date: string;
  }[];
}

const PastEvents: React.FC<PastEventsProps> = ({ events }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Past Events</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {events.map((event, index) => (
          <EventCard key={index} title={event.title} description={event.description} image={event.image} date={event.date}/>
        ))}
      </div>
    </section>
  );
};

export default PastEvents;
