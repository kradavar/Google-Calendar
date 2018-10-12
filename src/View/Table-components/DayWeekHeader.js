import React from "react";
import "../../Styles/Cell.css";

export default function DayWeekHeadar(props) {
  return (
    <header className="">
      {props.renderedDate},{props.day}
    </header>
  );
}
