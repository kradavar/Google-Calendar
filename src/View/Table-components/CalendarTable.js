import React from "react";
import "../../Styles/CalendarTable.css";
import TableHeader from "./MonthHeader";
import Month from "./Month";
import Week from "./Week";
import DayWeekHeadar from "./DayWeekHeader";

export default function CalendarTable(props) {
  return (
    <div className="calendar">
      <hr />
      <div>{props.renderedDate.format()}</div>
      <table className="table table-bordered">
        {/* <TableHeader
          view={props.view}
          renderedDay={props.renderedDate.format("ddd")}
          day={props.renderedDate.date()}
        />*/}
        {props.view === "month" ? (
          <Month renderedDate={props.renderedDate} view={props.view} />
        ) : (
          <tbody>
            <DayWeekHeadar
              renderedDate={props.renderedDate.date()}
              view={props.view}
              day={props.renderedDate.format("ddd")}
            />
            <Week renderedDate={props.renderedDate} view={props.view} />
          </tbody>
        )}
      </table>
    </div>
  );
}
