import React from "react";
import Day from "./Day";
import moment from "moment";

export default function Week(props) {
  const renderWeek = () => {
    const date = moment(props.renderedDate);
    const wholeWeekStart = date.clone().startOf("isoWeek");
    const wholeWeekEnd = date.clone().endOf("isoWeek");
    const week = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      week.push(<Day view={props.view} date={props.renderedDate} />);
    }

    return week;
  };

  const week = renderWeek();
  return (
    <div>
      {props.view === "week" ? (
        { week }
      ) : (
        <Day renderedDate={props.renderedDate} view={props.view} />
      )}
      )}
    </div>
  );
}
