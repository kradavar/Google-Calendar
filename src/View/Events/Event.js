import React from "react";

import "../../Styles/Event.css";

export default function Event(props) {
  //debugger;
  return (
    <li>
      {props.view === "month" ? (
        <div
          className="event"
          onClick={event => {
            props.onClick();
            event.stopPropagation();
          }}
        >
          {props.start.split(" ")[1]}-{props.name}
        </div>
      ) : (
        <div className="event-day" onClick={props.onClick}>
          <div className="event-header">{props.name}</div>
          <div className="event--time">
            {props.start} - {props.end}
          </div>
        </div>
      )}
    </li>
  );
}
