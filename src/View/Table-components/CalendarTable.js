import React from "react";
import "../../Styles/CalendarTable.css";
import Month from "./Month";
import Week from "./Week";
import { SharedViewContext } from "../../Context";

export default function CalendarTable({ renderedDate }) {
  return (
    <SharedViewContext.Consumer>
      {({ view }) => (
        <div className="calendar">
          {view === "month" ? (
            <Month renderedDate={renderedDate} view={view} />
          ) : (
            <Week renderedDate={renderedDate} view={view} />
          )}
        </div>
      )}
    </SharedViewContext.Consumer>
  );
}
