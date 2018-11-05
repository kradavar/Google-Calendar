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

  getRenderedList = (events, view) =>
    events.length < 3 || view !== VIEW.MONTH
      ? events.map(event => <Event key={event.id} {...event} />)
      : events.slice(0, 2).map(event => <Event key={event.id} {...event} />);

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
            {this.state.showAllEvents && view === VIEW.MONTH ? (
              <EventsComponent
                events={this.props.events}
                handleClose={this.handleAllEventClose}
              />
            ) : (
              <React.Fragment>
                {this.getRenderedList(this.props.events, view)}
                {this.props.events.length > 2 &&
                  view === VIEW.MONTH && (
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
