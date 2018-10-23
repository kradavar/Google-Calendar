import React from "react";
import "../../Styles/CalendarTable.css";
import Month from "./Month";
import Week from "./Week";

export default function CalendarTable({ renderedDate, view }) {
  return (
    <div className="calendar">
      {view === "month" ? (
        <Month renderedDate={renderedDate} view={view} />
      ) : (
        <Week renderedDate={renderedDate} view={view} />
      )}
    </div>
  );
}
