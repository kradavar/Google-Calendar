import React from "react";
import Day from "./Day";
import "../../Styles/Cell.css";
import { DATE_FORMATS } from "../../Model/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { SharedViewContext } from "../../Context";

export const Week = ({ renderedDate }) => {
  const weekArray = (() => {
    const wholeWeekStart = renderedDate.clone().startOf("isoWeek");
    const wholeWeekEnd = renderedDate.clone().endOf("isoWeek");
    const days = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      const date = currDate.clone();
      days.push(
        <Day renderedDate={date} key={formatDate(date, DATE_FORMATS.DATE)} />
      );
    }
    return days;
  })();

  return (
    <SharedViewContext.Consumer>
      {({ view }) => (
        <React.Fragment>
          {view === "day" ? (
            <Day renderedDate={renderedDate} />
          ) : (
            <div className="week">{weekArray}</div>
          )}
        </React.Fragment>
      )}
    </SharedViewContext.Consumer>
  );
};
