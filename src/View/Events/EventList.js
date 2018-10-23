import React from "react";
import Event from "./Event";
import "../../Styles/Event.css";

export default function EventList({ events, view }) {
  const className =
    view === "month" ? "event-list" : "event-list day-event-list";
  return (
    <ul className={className}>
      {events.map(event => (
        <Event
          key={event.id}
          start={event.start}
          end={event.end}
          name={event.name}
          id={event.id}
          view={view}
        />
      ))}
    </ul>
  );
}
