import React, { Component } from "react";

import "../../Styles/Event.css";

import ModalShowEvent from "../../Model/containers/ModalShowEvent";

import { getDuration, createMoment } from "../../Model/getRenderedDateInfo";

export default class Event extends Component {
  getHeight = () => {
    const { start, end } = this.props;
    const minutes = getDuration(start, end, "minutes");
    return (
      minutes * 0.05
    ); /* 0.05rem - height of 1 minute, 'cause height of hour cell is 3rem  */
  };

  getTopOfEvent = () => {
    const { start } = this.props;
    const startTime = createMoment(start).minute();
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

  render() {
    return (
      <li className="event-list-item">
        {this.props.view === "month" ? (
          <div className="event" onClick={this.props.onClick}>
            {this.props.showModal && (
              <ModalShowEvent
                handleClose={this.props.handleClose}
                start={this.props.start}
                end={this.props.end}
                name={this.props.name}
                id={this.props.id}
                view={this.props.view}
              />
            )}
            {this.props.start.split(" ")[1]}-{this.props.name}
          </div>
        ) : (
          <div
            className={this.props.eventsClassName}
            onClick={this.props.onClick}
            style={this.getStyles()}
          >
            {this.props.showModal && (
              <ModalShowEvent
                handleClose={this.props.handleClose}
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
