import React from "react";
import Event from "./Event";
import { Button } from "../../View/Switchers/Button";
import "../../Styles/Event.css";

export const EventsComponent = ({ events, handleClose, userColors }) => (
  <div className="all-events">
    <header className="all-events-header">
      All events
      <Button
        onClick={handleClose}
        value="✘"
        classes="btn-light close-button more-close-btn"
      />
    </header>
    <ul className="event-list">
      {events.map(event => (
        <Event key={event.id} {...event} />
      ))}
    </ul>
  </div>
);
