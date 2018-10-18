import React from "react";
import "../Styles/CalendarTable.css";
import moment from "moment";

export default function TimeLine(props) {
  const getDayStart = () => moment().startOf("day");

  const getMinutes = () => moment().diff(getDayStart(), "minutes");

  const getTopOfEvent = () => {
    const startTime = getMinutes();
    return 0.05 * startTime; /* rise event on the top of its start */
  };

  const getStyles = () => {
    const topRem = getTopOfEvent() + "rem";
    return {
      top: topRem
    };
  };

  return <div style={getStyles()} className="time-line" />;
}
