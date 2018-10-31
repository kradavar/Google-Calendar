import React from "react";
import { Week } from "./Week";
import "../../Styles/Cell.css";
import { MonthHeader } from "./MonthHeader";

export const Month = ({ renderedDate, view }) => {
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
    const currentDate = renderedDate.clone().startOf("month");
    const weeks = [];
    const duration = getWeekCount(renderedDate.clone());

    for (let i = 0; i < duration; i++) {
      weeks.push(
        <Week renderedDate={currentDate.clone()} view={view} key={i} />
      );
      currentDate.add(1, "week");
    }

    return weeks;
  };

  return (
    <div className="flex-container month">
      <MonthHeader />
      {renderMonth()}
    </div>
  );
};
