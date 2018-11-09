import * as React from "react";
import "../../Styles/CalendarTable.css";
import { Month } from "./Month";
import { Week } from "./Week";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";
import { VIEW } from "../../constants/ViewTypes";
import { DATE_FORMATS } from "../../constants/DateFormats";
import { formatDate } from "../../Model/getRenderedDateInfo";

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
