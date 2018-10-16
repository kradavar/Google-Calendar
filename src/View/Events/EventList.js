import React from "react";
import Event from "./Event";
import "../../Styles/Event.css";

export default function EventList(props) {
  return (
    <ul className="event-list">
      {props.events.map(event => (
        <Event
          key={event.id}
          start={event.start}
          end={event.end}
          name={event.name}
          id={event.id}
          view={props.view}
        />
      ))}
    </ul>
  );
}
