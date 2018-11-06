import * as React from "react";
import "../../Styles/CalendarTable.css";
import { Month } from "./Month";
import { Week } from "./Week";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";
import { VIEW } from "../../constants/ViewTypes";

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
            <Month monthDate={renderedDate} />
          ) : (
            <Week weekDate={renderedDate} />
          )}
        </div>
      )}
    </SharedViewContext.Consumer>
  );
};
