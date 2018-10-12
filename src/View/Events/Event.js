import React from "react";

export default function Event(props) {
  return (
    <li>
      {props.view === "month" ? (
        <div>
          {props.start}-{props.name}
        </div>
      ) : (
        <div className="event">
          <div className="event-header">{props.name}</div>
          <div className="event--time">
            {props.start} - {props.end}
          </div>
        </div>
      )}
    </li>
  );
}
