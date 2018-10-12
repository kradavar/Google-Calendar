import React from "react";
import Week from "./Week";
import TableHeader from "./TableHeader";
import "../../Styles/Cell.css";

export default function Month(props) {
  const getWeekCount = date => {
    // week number of 1st day of the month
    const start = date.date(1).isoWeek();
    // week number of the last day of the month
    const end = date.date(date.daysInMonth()).isoWeek();
    const duration = end - start + 1;
    if (duration < 0) {
      return date.isoWeeksInYear() + duration;
    }
    return duration;
  };

  const renderMonth = () => {
    const start = props.renderedDate.clone().startOf("month");
    const weeks = [];
    const duration = getWeekCount(props.renderedDate.clone());
    const currentDate = start.clone();

    for (let i = 0; i < duration; i++) {
      weeks.push(
        <Week renderedDate={currentDate.clone()} view={props.view} key={i} />
      );
      currentDate.add(1, "week");
    }

    return weeks;
  };

  return (
    <tbody>
      <TableHeader
        view={props.view}
        renderedDay={props.renderedDate.format("ddd")}
        day={props.renderedDate.date()}
      />
      {renderMonth()}
    </tbody>
  );
}
