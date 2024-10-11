// src/components/molecules/EventCard.tsx
import React from "react";
import Image from "next/image";
import Card from "../atoms/card";

interface EventCardProps {
  title: string;
  description: string;
  image?: string;
  date: string;
}

const EventCard: React.FC<EventCardProps> = ({
  title,
  description,
  image,
  date,
}) => {
  const eventDate = new Date(date + "T00:00:00");
  return (
    <Card className="bg-gray-800 border-gray-700 p-4">
      {image && (
        <Image
          src={image}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover rounded-md"
        />
      )}
      <div className="card-header mt-2">
        <h3 className="text-2xl font-semibold text-gray-100">{title}</h3>
        <p className="text-md text-gray-400">
          {eventDate.toLocaleDateString()}
        </p>
      </div>
      <div className="card-content mt-2">
        <p className="text-xl text-gray-300">{description}</p>
      </div>
    </Card>
  );
};

export default EventCard;
