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
    return duration + 1;
  };

  const renderMonth = () => {
    const start = props.renderedDate.clone().startOf("month");
    const weeks = [];
    const duration = getWeekCount();
    //debugger;
    for (let week = 0; week < duration; week++) {
      weeks.push(
        <tr>
          <td>
            <Week renderedDate={start} view={props.view} key={start.format()} />
          </td>
        </tr>
      );
      start.add(1, "week");
    }
    return weeks;
  };
  const weeks = renderMonth();
  return <tbody>{weeks}</tbody>;
}
