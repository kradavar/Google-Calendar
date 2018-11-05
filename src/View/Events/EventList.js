import React, { Component } from "react";
import Event from "./Event";
import "../../Styles/Event.css";
import { SharedViewContext } from "../../Context";
import { VIEW } from "../../constants/ViewTypes";
import { EventsComponent } from "./EventsComponent";

class EventList extends Component {
  state = {
    showAllEvents: false
  };
  getClassName = view =>
    view === VIEW.MONTH ? "event-list" : "day-event-list";

  getRenderedList = events => {
    if (events.length < 3) {
      //debugger;
      return events.map(event => <Event key={event.id} {...event} />);
    } else
      return events
        .slice(0, 2)
        .map(event => <Event key={event.id} {...event} />);
  };

  handleLinkClick = e => {
    e.stopPropagation();
    this.setState({
      showAllEvents: true
    });
  };

  handleAllEventClose = e => {
    e.stopPropagation();
    this.setState({
      showAllEvents: false
    });
  };

  render() {
    return (
      <SharedViewContext.Consumer>
        {({ view }) => (
          <ul className={this.getClassName(view)}>
            {this.state.showAllEvents ? (
              <EventsComponent
                events={this.props.events}
                handleClose={this.handleAllEventClose}
              />
            ) : (
              <React.Fragment>
                {this.getRenderedList(this.props.events)}
                {this.props.events.length > 2 && (
                  <p className="more" onClick={this.handleLinkClick}>
                    more
                  </p>
                )}
              </React.Fragment>
            )}
          </ul>
        )}
      </SharedViewContext.Consumer>
    );
  }
}

export default EventList;
