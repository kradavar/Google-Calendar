import React, { Component } from "react";

import "../../Styles/Event.css";

import ModalShowEvent from "../../Model/containers/ModalShowEvent";

export default class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  getHourOfEvent = dateString => +dateString.split(" ")[1].split(":")[0];

  getMinutesOfEvent = dateString => +dateString.split(" ")[1].split(":")[1];

  converHoursIntoMinutes = hour => hour * 60;

  getTimeInMitutes = dateString =>
    this.getMinutesOfEvent(dateString) +
    this.converHoursIntoMinutes(this.getHourOfEvent(dateString));

  getEventDuration = (start, end) =>
    this.getTimeInMitutes(end) - this.getTimeInMitutes(start);

  getHeight = () => {
    const minutes = this.getEventDuration(this.props.start, this.props.end);
    return (
      minutes * 0.05
    ); /* 0.05rem - height of 1 minute, 'cause height of hour cell is 3rem  */
  };

  getTopOfEvent = () => {
    const startTime = this.getMinutesOfEvent(this.props.start);
    return 0.05 * startTime - 2.2; /* rise event on the top of its start */
  };

  getStyles = () => {
    const heightRem = this.getHeight() + "rem";
    const topRem = this.getTopOfEvent() + "rem";
    return {
      height: heightRem,
      top: topRem
    };
  };

  handleClose = e => {
    this.setState({
      showModal: false
    });
    e.stopPropagation();

    const headers = document.getElementsByClassName("sticky-top");
    for (let i = 0; i < headers.length; i++) {
      headers[i].style.zIndex = "30";
    }
  };

  handleOpen = e => {
    this.setState({
      showModal: true
    });
    e.stopPropagation();
    const headers = document.getElementsByClassName("sticky-top");
    const events = document.getElementsByClassName(
      "event-day"
    ); /* maybe fix this in another way */
    for (let i = 0; i < headers.length; i++) {
      headers[i].style.zIndex = "auto";
    }
    for (let i = 0; i < events.length; i++) {
      events[i].style.zIndex = "auto";
    }
  };

  render() {
    return (
      <li className="event-list-item">
        {this.props.view === "month" ? (
          <div className="event" onClick={this.handleOpen}>
            {this.state.showModal && (
              <ModalShowEvent
                handleClose={this.handleClose}
                start={this.props.start}
                end={this.props.end}
                name={this.props.name}
                id={this.props.id}
              />
            )}
            {this.props.start.split(" ")[1]}-{this.props.name}
          </div>
        ) : (
          <div
            className="event-day"
            style={this.getStyles()}
            onClick={this.handleOpen}
          >
            {this.state.showModal && (
              <ModalShowEvent
                handleClose={this.handleClose}
                start={this.props.start}
                end={this.props.end}
                name={this.props.name}
                id={this.props.id}
              />
            )}
            {this.props.name},{this.props.start} - {this.props.end}
          </div>
        )}
      </li>
    );
  }
}
