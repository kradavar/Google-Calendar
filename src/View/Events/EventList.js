import React, { Component } from "react";
import Event from "./Event";
import "../../Styles/Event.css";

export default class EventList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      eventsClassName: "event-day"
    };
  }
  handleClose = e => {
    this.setState({
      showModal: false,
      eventsClassName: "event-day"
    });
    e.stopPropagation();
  };

  handleOpen = e => {
    this.setState({
      showModal: true,
      eventsClassName: "event-day hide"
    });
    e.stopPropagation();
  };

  render() {
    const className =
      view === "month" ? "event-list" : "event-list day-event-list";
    const { events, view } = this.props;
    return (
      <ul className={className}>
        {events.map(event => (
          <Event
            key={event.id}
            start={event.start}
            end={event.end}
            name={event.name}
            id={event.id}
            view={view}
            onClick={this.handleOpen}
            handleClose={this.handleClose}
            eventsClassName={this.state.eventsClassName}
            showModal={this.state.showModal}
          />
        ))}
      </ul>
    );
  }
}
