import React from "react";
import Event from "./Event";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map(event => (
        <Event key={event.id} event={event} />
      ))}
    </ul>
  );
}
