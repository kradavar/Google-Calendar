import React from "react";
import "../../Styles/CalendarTable.css";
import Month from "./Month";
import Week from "./Week";
import DayWeekHeadar from "./DayWeekHeader";

export default function CalendarTable(props) {
  return (
    <div className="calendar">
      <hr />
      <div>{props.renderedDate.format()}</div>
      <div className="table table-bordered">
        {props.view === "month" ? (
          <Month renderedDate={props.renderedDate} view={props.view} />
        ) : (
          <Week renderedDate={props.renderedDate} view={props.view} />
        )}
      </div>
    </div>
  );
}
