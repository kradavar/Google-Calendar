import React from "react";
import Day from "./Day";
import moment from "moment";
import "../../Styles/Cell.css";
import DayWeekHeadar from "./DayWeekHeader";

export default function Week(props) {
  const daysHeader = [];
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

      daysHeader.push(
        <DayWeekHeadar
          renderedDate={date.date()}
          day={date.format("ddd")}
          key={date.format()}
        />
      );
      days.push(
        <Day view={props.view} renderedDate={date} key={date.format()} />
      );
    }

    return days;
  };
  const days = renderWeek();

  switch (props.view) {
    case "month":
      return <div className="week">{days}</div>;
    case "week":
      return <div className="week content">{days}</div>;
    case "day":
      return <Day renderedDate={props.renderedDate} view={props.view} />;
  }
}
