import React from "react";

export default function DayWeekHeadar(props) {
  if (props.view === "day") {
    return (
      <th scope="col">
        {props.renderedDate},{props.day}
      </th>
    );
  }
}
