import React from "react";
import Day from "./Day";
import moment from "moment";

export default function Week(props) {
  let weekToRender;
  const renderWeek = () => {
    const date = moment(props.renderedDate);
    const wholeWeekStart = date.clone().startOf("isoWeek");
    const wholeWeekEnd = date.clone().endOf("isoWeek");
    const days = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      const date = moment(currDate);
      days.push(
        <Day view={props.view} renderedDate={date} key={currDate.format()} />
      );
    }

    return days;
  };
  const days = renderWeek();

  switch (props.view) {
    case "month":
      return (
        <table>
          <tbody>
            <tr>{days}</tr>
          </tbody>
        </table>
      );
    case "week":
      return <tr>{days}</tr>;
    case "day":
      return (
        <tr>
          <Day renderedDate={props.renderedDate} view={props.view} />
        </tr>
      );
  }
}
