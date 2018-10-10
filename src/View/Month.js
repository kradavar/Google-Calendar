import React from "react";
import Week from "./Week";

export default function Month(props) {
  const getWeekCount = () => {
    const date = props.renderedDate.clone();
    const start = date.date(1).isoWeek();
    const end = date.date(date.daysInMonth()).isoWeek();
    const duration = end - start;
    if (duration < 0) {
      return date.isoWeeksInYear() + duration;
    }
    return duration;
  };

  const renderMonth = () => {
    const start = props.renderedDate.clone().startOf("month");
    const month = [];
    for (let week = 0; week < getWeekCount(); week++) {
      month.push(<Week renderedDate={start} view={props.view} />);
    }
    return month;
  };
  const month = renderMonth();
  return <div>{month}</div>;
}
