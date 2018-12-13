import * as React from "react";
import Event from "./Event";
import { Button } from "../Switchers/Button";
import "../../Styles/Event.css";

export const EventsComponent: React.SFC<{
  events: any;
  handleClose: (e?: any) => void;
  userColors?: any;
}> = ({ events, handleClose, userColors }) => (
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
