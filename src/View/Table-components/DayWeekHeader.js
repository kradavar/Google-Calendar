import React from "react";
import "../../Styles/Cell.css";

export default function DayWeekHeadar(props) {
  return (
    <header className="day-week-header sticky-top">
      {props.renderedDate},{props.day}
    </header>
  );
}
