import React, { Component } from "react";

export default function Event(props) {
  const getRenderedType = () => {
    let eventView;
    if (props.view === "month") {
      eventView = (
        <li>
          {props.start}-{props.name}
        </li>
      );
    } else {
      eventView = (
        <li>
          <div className="event">
            <div className="event-header">{props.name}</div>
            <div className="event--time">
              {props.start} - {props.end}
            </div>
          </div>
        </li>
      );
    }
  };

  return eventView;
}
