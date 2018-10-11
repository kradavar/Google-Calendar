import React from "react";
import Week from "./Week";
import MonthHeader from "./MonthHeader";
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
        <tr>
          <td className="month-cell">
            <Week
              renderedDate={currentDate.clone()}
              view={props.view}
              key={i}
            />
          </td>
        </tr>
      );
      currentDate.add(1, "week");
    }

    return weeks;
  };

  return <tbody>{renderMonth()}</tbody>;
}