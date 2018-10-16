import React from "react";
import Event from "./Event";
import { showEvent } from "../../Model/actions/actions";
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
          onClick={() => showEvent(event.id)}
        />
      ))}
    </ul>
  );
}
