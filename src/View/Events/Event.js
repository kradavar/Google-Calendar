import React, { Component } from "react";

import "../../Styles/Event.css";

import ModalShowEvent from "../../Model/containers/ModalShowEvent";

import { getDuration } from "../../Model/getRenderedDateInfo";
import moment from "moment";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../Model/DateFormats";
import { SharedViewContext } from "../../Context";

export default class Event extends Component {
  state = {
    showModal: false,
    eventsClassName: "event-day"
  };

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

  getHeight = (start, end) => {
    const minutes = getDuration(start, end, "minutes");
    return (
      minutes * 0.05
    ); /* 0.05rem - height of 1 minute, 'cause height of hour cell is 3rem  */
  };

  getTopOfEvent = start => {
    const startTime = moment(start).minute();
    return 0.05 * startTime - 2.2; /* rise event on the top of its start */
  };

  getStyles = (start, end, view) => {
    const heightRem = this.getHeight(start, end) + "rem";
    const topRem = this.getTopOfEvent(start) + "rem";
    if (view !== "month") {
      return {
        height: heightRem,
        top: topRem
      };
    }
  };

  getClassName = view =>
    view === "month" ? "event" : this.state.eventsClassName;

  eventInput = (start, end, name, view) =>
    view === "month"
      ? formatDate(start, DATE_FORMATS.TIME) + "-" + name
      : name +
        "," +
        formatDate(start, DATE_FORMATS.TIME) +
        "-" +
        formatDate(end, DATE_FORMATS.TIME);

  render() {
    const { start, end, name } = this.props;
    return (
      <SharedViewContext.Consumer>
        {({ view }) => (
          <li className="event-list-item">
            <div
              className={this.getClassName(view)}
              onClick={this.handleOpen}
              style={this.getStyles(start, end, view)}
            >
              {this.state.showModal && (
                <ModalShowEvent
                  handleClose={this.handleClose}
                  {...this.props}
                />
              )}
              {this.eventInput(start, end, name, view)}
            </div>
          </li>
        )}
      </SharedViewContext.Consumer>
    );
  }
}
