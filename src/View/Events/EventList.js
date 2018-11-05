import React from "react";
import Event from "./Event";
import "../../Styles/Event.css";
import { SharedViewContext } from "../../Context";
import { VIEW } from "../../constants/ViewTypes";

const EventList = ({ events }) => {
  const getClassName = view =>
    view === VIEW.MONTH ? "event-list" : "day-event-list";

  return (
    <SharedViewContext.Consumer>
      {({ view }) => (
        <ul className={getClassName(view)}>
          {events.map(event => (
            <Event key={event.id} {...event} />
          ))}
        </ul>
      )}
    </SharedViewContext.Consumer>
  );
};

export default EventList;
