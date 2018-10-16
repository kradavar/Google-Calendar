import React from "react";
import "../../Styles/CalendarTable.css";
import Month from "./Month";
import Week from "./Week";

export default function CalendarTable(props) {
  return (
    <div className="calendar">
      {props.view === "month" ? (
        <Month renderedDate={props.renderedDate} view={props.view} />
      ) : (
        <Week renderedDate={props.renderedDate} view={props.view} />
      )}
    </div>
  );
}
