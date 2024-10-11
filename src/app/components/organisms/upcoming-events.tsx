import React from "react";
import EventCard from "../molecules/event-card";
import Card from "../atoms/card";

interface UpcomingEventsProps {
  events: {
    title: string;
    description: string;
    image?: string;
    date: string;
    startTime: string;
    endTime: string;
  }[];
}

const UpcomingEvents: React.FC<UpcomingEventsProps> = ({ events }) => {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-4">Upcoming Events</h2>
      {events.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              date={event.date}
              startTime={event.startTime}
              endTime={event.endTime}
            />
          ))}
        </div>
      ) : (
        <Card className="bg-gray-800 border-gray-700 p-6 text-xl text-gray-400">
          No upcoming events at the moment.
        </Card>
      )}
    </section>
  );
};

export default UpcomingEvents;
