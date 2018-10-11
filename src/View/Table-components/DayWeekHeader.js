import React from "react";

export default function DayWeekHeadar(props) {
  return (
    <tr className="header">
      <th scope="col">
        {props.renderedDay},{props.day}
      </th>
    </tr>
  );
}
