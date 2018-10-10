import React from "react";
import Week from "./Week";
import moment from "moment";

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
    const weeks2 = [];
    const duration = getWeekCount(props.renderedDate.clone());
    const currentDate = start.clone();

    for (let week = 0; week < duration; week++) {
        weeks.push(
          <tr>
            <td>
              <Week renderedDate={currentDate} view={props.view} key={week} />
            </td>
          </tr>
        );
        weeks2.push(currentDate);
        currentDate.add(1, "week");
      })();
    }

    console.warn("AAA", { weeks2 });

    return weeks;
  };

  return <tbody>{renderMonth()}</tbody>;
}
