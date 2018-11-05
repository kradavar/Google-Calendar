import * as React from "react";
import Day from "./Day";
import "../../Styles/Cell.css";
import { DATE_FORMATS } from "../../constants/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";
import { VIEW } from "../../constants/ViewTypes";

export const Week: React.SFC<{
  renderedDate: moment.Moment;
}> = ({ renderedDate }) => {
  const weekArray: Array<JSX.Element> = (() => {
    const wholeWeekStart: moment.Moment = renderedDate
      .clone()
      .startOf("isoWeek");
    const wholeWeekEnd: moment.Moment = renderedDate.clone().endOf("isoWeek");
    const days: Array<JSX.Element> = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      const date: moment.Moment = currDate.clone();
      days.push(
        <Day renderedDate={date} key={formatDate(date, DATE_FORMATS.DATE)} />
      );
    }
    return days;
  })();

  return (
    <SharedViewContext.Consumer>
      {({ view }: { view: string }) => (
        <React.Fragment>
          {view === VIEW.DAY ? (
            <Day renderedDate={renderedDate} />
          ) : (
            <div className="week">{weekArray}</div>
          )}
        </React.Fragment>
      )}
    </SharedViewContext.Consumer>
  );
};
