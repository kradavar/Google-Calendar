import React from "react";
import Event from "./Event";

export default function EventList(props) {
  return (
    <ul>
      {props.events.map(event => (
        <Event
          key={event.id}
          start={event.start.format("kk:mm")}
          end={event.end.format("kk:mm")}
          name={event.name}
        />
      ))}
    </ul>
  );
}
