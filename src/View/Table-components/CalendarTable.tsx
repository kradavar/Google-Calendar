import * as React from "react";
import "../../Styles/CalendarTable.css";
import { Month } from "./Month";
import { Week } from "./Week";
import { SharedViewContext } from "../../Context";
import * as moment from "moment";

export interface CalendarProps {
  renderedDate: moment.Moment;
}

export const CalendarTable = ({ renderedDate }: CalendarProps) => {
  return (
    <SharedViewContext.Consumer>
      {({ view }: { [key: string]: any }) => (
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
