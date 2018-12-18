import * as React from "react";
import { Month } from "../../Month";
import { Week } from "../../Week";
import { SharedViewContext } from "../../../../Context";
import * as moment from "moment";
import { VIEW, DATE_FORMATS } from "../../../../constants/constants";
import { formatDate } from "../../../../getRenderedDateInfo";

import "./CalendarTable.css";

export const CalendarTable: React.SFC<{}> = ({}) => {
  return (
    <SharedViewContext.Consumer>
      {({
        view,
        renderedDate
      }: {
        view: string;
        renderedDate: moment.Moment;
      }) => (
        <div className="calendar">
          {view === VIEW.MONTH ? (
            <Month
              monthDate={formatDate(renderedDate, DATE_FORMATS.DATE_WITH_TIME)}
            />
          ) : (
            <Week
              weekDate={formatDate(renderedDate, DATE_FORMATS.DATE_WITH_TIME)}
            />
          )}
        </div>
      )}
    </SharedViewContext.Consumer>
  );
};
