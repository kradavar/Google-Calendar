import React from "react";
import Day from "./Day";
import moment from "moment";
import "../../Styles/Cell.css";
import DayWeekHeadar from "./DayWeekHeader";
import { DATE_FORMATS } from "../../Model/DateFormats";

export default function Week({ renderedDate, view }) {
  const daysHeader = [];
  const renderWeek = () => {
    const date = moment(renderedDate);
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
        <Day
          view={view}
          renderedDate={date}
          key={date.format(DATE_FORMATS.DATE)}
        />
      );
    }

    return days;
  };
  const days = renderWeek();

  switch (view) {
    case "month":
      return <div className="week">{days}</div>;
    case "week":
      return <div className="week content">{days}</div>;
    default:
      return <Day renderedDate={renderedDate} view={view} />;
  }
}
