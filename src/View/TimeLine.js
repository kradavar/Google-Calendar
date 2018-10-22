import React, { Component } from "react";
import "../Styles/CalendarTable.css";
import moment from "moment";

export default class TimeLine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: moment()
    };
  }

  getDayStart = () => moment().startOf("day");

  getMinutes = () => {
    return this.state.time.diff(this.getDayStart(), "minutes");
  };

  getTopOfEvent = () => {
    const startTime = this.getMinutes();
    return 0.05 * startTime; /* rise line to the start of the day */
  };

  getStyles = () => {
    const topRem = this.getTopOfEvent() + "rem";
    return {
      top: topRem
    };
  };

  componentDidMount = () => {
    this.intervalToken = this.createIntervalUpdater(18000);
  };

  componentDidUpdate = prevProps => {
    if (prevProps.interval !== 18000) {
      clearInterval(this.intervalToken);
      this.intervalToken = this.createIntervalUpdater(18000);
    }
  };

  createIntervalUpdater = interval => {
    return setInterval(() => {
      this.setState({
        time: moment()
      });
    }, interval);
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalToken);
  };

  render() {
    return <div style={this.getStyles()} className="time-line" />;
  }
}
