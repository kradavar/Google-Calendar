import React from "react";

export default function MonthHeader({ view, renderedDay, day }) {
  return (
    <tr className="header">
      <th>
        <th scope="col">Mon</th>
        <th scope="col">Tue</th>
        <th scope="col">Wed</th>
        <th scope="col">Thu</th>
        <th scope="col">Fri</th>
        <th scope="col">Sat</th>
        <th scope="col">Sun</th>
      </th>
    </tr>
  );
}
