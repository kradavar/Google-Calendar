import React, { Component } from "react";
import "../Styles/CalendarTable.css";
import moment from "moment";
import { getDuration } from "../getRenderedDateInfo";

export default class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  getTopOfEvent = () => {
    const startTime = getDuration(
      moment().startOf("day"),
      this.state.time,
      "minutes"
    );
    return 0.05 * startTime; /* rise line to the start of the day */
  };

  getStyles = () => {
    const topRem = this.getTopOfEvent() + "rem";
    return {
      top: topRem
    };
  };

  componentDidMount = () => {
    this.interval = setInterval(() => {
      this.setState({
        time: moment()
      });
    }, 18000);
  };

  componentWillUnmount = () => {
    clearInterval(this.interval);
  };

  render() {
    return <div style={this.getStyles()} className="time-line" />;
  }
}
