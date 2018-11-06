import * as React from "react";
import Day from "./Day";
import "../../Styles/Cell.css";
import { DATE_FORMATS } from "../../constants/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";
import { VIEW } from "../../constants/ViewTypes";

export const Week: React.SFC<{
  weekDate: moment.Moment;
}> = ({ weekDate }) => {
  const weekArray: Array<JSX.Element> = (() => {
    const wholeWeekStart: moment.Moment = weekDate.clone().startOf("isoWeek");
    const wholeWeekEnd: moment.Moment = weekDate.clone().endOf("isoWeek");
    const days: Array<JSX.Element> = [];
    for (
      let currDate = wholeWeekStart.clone();
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      const date: moment.Moment = currDate.clone();
      days.push(
        <Day dayDate={date} key={formatDate(date, DATE_FORMATS.DATE)} />
      );
    }
    return days;
  })();

  return (
    <SharedViewContext.Consumer>
      {({ view }: { view: string }) => (
        <React.Fragment>
          {view === VIEW.DAY ? (
            <Day dayDate={weekDate} />
          ) : (
            <div className="week">{weekArray}</div>
          )}
        </React.Fragment>
      )}
    </SharedViewContext.Consumer>
  );
};
