import React from "react";
import Event from "./Event";
import { showEvent } from "../../Model/actions/actions";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map(event => (
        <Event
          key={event.id}
          start={event.start}
          end={event.end}
          name={event.name}
          id={event.id}
          onClick={() => showEvent(event.id)}
        />
      ))}
    </ul>
  );
}
