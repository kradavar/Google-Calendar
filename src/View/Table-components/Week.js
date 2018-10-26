import React from "react";
import Day from "./Day";
import "../../Styles/Cell.css";
import DayWeekHeadar from "./DayWeekHeader";
import { DATE_FORMATS } from "../../Model/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";

// self-invoking functions
export default function Week({ renderedDate, view }) {
  const renderWeek = () => {
    const wholeWeekStart = renderedDate.clone().startOf("isoWeek");
    const wholeWeekEnd = renderedDate.clone().endOf("isoWeek");
    const days = [];
    const daysHeader = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      const date = currDate.clone();
      daysHeader.push(
        <DayWeekHeadar
          renderedDate={date.date()}
          day={formatDate(date, DATE_FORMATS.DAY)}
          key={formatDate(date, DATE_FORMATS.DATE_WITH_TIME)}
        />
      );
      days.push(
        <Day
          view={view}
          renderedDate={date}
          key={formatDate(date, DATE_FORMATS.DATE)}
        />
      );
    }

    return days;
  };
  const days = renderWeek();

  if (view === "day") {
    return <Day renderedDate={renderedDate} view={view} />;
  } else {
    return <div className="week">{days}</div>;
  }
}
