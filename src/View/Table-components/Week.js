import React from "react";
import Day from "./Day";
import moment from "moment";
import "../../Styles/Cell.css";
import DayWeekHeadar from "./DayWeekHeader";
import { DATE_FORMATS } from "../../Model/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";

// self-invoking functions & clone
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

  switch (view) {
    case "month":
      return <div className="week">{days}</div>;
    case "week":
      return <div className="week content">{days}</div>;
    default:
      return <Day renderedDate={renderedDate} view={view} />;
  }
}
