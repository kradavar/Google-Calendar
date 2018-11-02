import * as React from "react";
import "../../Styles/CalendarTable.css";
import { Month } from "./Month";
import { Week } from "./Week";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";

export const CalendarTable: React.SFC<{ renderedDate: moment.Moment }> = ({
  renderedDate
}) => {
  return (
    <SharedViewContext.Consumer>
      {({ view }: { view: string }) => (
        <div className="calendar">
          {view === "month" ? (
            <Month renderedDate={renderedDate} />
          ) : (
            <Week renderedDate={renderedDate} />
          )}
        </div>
      )}
    </SharedViewContext.Consumer>
  );
};