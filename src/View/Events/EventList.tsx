import * as React from "react";
import Event from "./Event";
import "../../Styles/Event.css";
import { SharedViewContext } from "../../Context";
import { VIEW } from "../../constants/ViewTypes";
import { EventsComponent } from "./EventsComponent";

export interface IEventListProps {
  events: any;
  eventsByUser: any;
}
export interface IEventListState {
  showAllEvents: boolean;
  colorsByUser: any;
}

class EventList extends React.Component<IEventListProps, IEventListState> {
  state = {
    showAllEvents: false,
    // ???
    colorsByUser: {
      1: "#d598ac",
      2: "#bf98d5",
      3: "#a4d2d4",
      4: "#81a3e6"
    }
  };
  getClassName = (view: string) =>
    view === VIEW.MONTH ? "event-list" : "day-event-list";

  getUserColor = (event: any) => {
    const userOfEvent = event.user_id;
    if (userOfEvent in this.state.colorsByUser) {
      return this.state.colorsByUser[userOfEvent];
    } else {
      let color = "#";
      const letters = "0123456789ABCDEF";
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      console.log(this.state);
      const nextColorByUser = {
        ...this.state.colorsByUser,
        [userOfEvent]: color
      };
      // Warning about state
      this.setState({
        colorsByUser: nextColorByUser
      });
      return color;
    }
  };

  getRenderedList = (events: any, view: string) =>
    events.length < 3 || view !== VIEW.MONTH
      ? events.map((event: any) => (
          <Event key={event.id} {...event} color={this.getUserColor(event)} />
        ))
      : events
          .slice(0, 2)
          .map((event: any) => (
            <Event key={event.id} {...event} color={this.getUserColor(event)} />
          ));

  handleLinkClick = (e: any) => {
    e.stopPropagation();
    this.setState({
      showAllEvents: true
    });
  };

  handleAllEventClose = (e: any) => {
    e.stopPropagation();
    this.setState({
      showAllEvents: false
    });
  };

  render() {
    return (
      <SharedViewContext.Consumer>
        {({ view }: any) => (
          <ul className={this.getClassName(view)}>
            {this.state.showAllEvents && view === VIEW.MONTH ? (
              <EventsComponent
                events={this.props.events}
                userColors={this.state.colorsByUser}
                handleClose={this.handleAllEventClose}
              />
            ) : (
              <React.Fragment>
                {this.getRenderedList(this.props.events, view)}
                {this.props.events.length > 2 && view === VIEW.MONTH && (
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
