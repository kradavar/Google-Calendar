import React from "react";

export default function Event(props) {
  return (
    <li>
      {props.view === "month" ? (
        <div onClick={props.onClick}>
          {props.start}-{props.name}
        </div>
      ) : (
        <div className="event" onClick={props.onClick}>
          <div className="event-header">{props.name}</div>
          <div className="event--time">
            {props.start} - {props.end}
          </div>
        </div>
      )}
    </li>
  );
}
