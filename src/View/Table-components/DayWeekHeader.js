import React from "react";

export default function DayWeekHeadar(props) {
  //debugger;
  if (props.view === "day") {
    return (
      <tr className="header">
        <th scope="col">
          {props.renderedDate},{props.day}
        </th>
      </tr>
    );
  }
}
