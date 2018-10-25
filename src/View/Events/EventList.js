import React from "react";
import Event from "./Event";
import "../../Styles/Event.css";

const EventList = ({ events, view }) => {
  const className = view === "month" ? "event-list" : "day-event-list";

  return (
    <ul className={className}>
      {events.map(event => (
        <Event key={event.id} {...event} view={view} />
      ))}
    </ul>
  );
};

export default EventList;
