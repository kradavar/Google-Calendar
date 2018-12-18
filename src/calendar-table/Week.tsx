import * as React from "react";
import Day from "./cells/Day";
import "../Styles/Cell.css";
import { DATE_FORMATS, VIEW } from "../constants/constants";
import { formatDate } from "../getRenderedDateInfo";
import { SharedViewContext } from "../Context";
import * as moment from "moment";

export const Week: React.SFC<{
  weekDate: string;
}> = ({ weekDate }) => {
  const weekArray: Array<JSX.Element> = (() => {
    const wholeWeekStart: moment.Moment = moment(weekDate).startOf("isoWeek");
    const wholeWeekEnd: moment.Moment = moment(weekDate).endOf("isoWeek");
    const days: Array<JSX.Element> = [];
    for (
      let currDate = wholeWeekStart;
      currDate <= wholeWeekEnd;
      currDate.add(1, "day")
    ) {
      days.push(
        <Day
          dayDate={currDate.clone()}
          key={formatDate(currDate, DATE_FORMATS.DATE)}
        />
      );
    }
    return days;
  })();

  return (
    <SharedViewContext.Consumer>
      {({ view }: { view: string }) => (
        <React.Fragment>
          {view === VIEW.DAY ? (
            <Day dayDate={moment(weekDate)} />
          ) : (
            <div className="week">{weekArray}</div>
          )}
        </React.Fragment>
      )}
    </SharedViewContext.Consumer>
  );
};
