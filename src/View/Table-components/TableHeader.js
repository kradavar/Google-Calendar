import React from "react";

export default function TableHeader({ view, renderedDay, day }) {
  const isDayView = view === "day";
  let headers;
  if (isDayView) {
    headers = (
      <tr className="header">
        <th scope="col">
          {renderedDay},{day}
        </th>
      </tr>
    );
  } else {
    headers = (
      <tr className="header">
        <th scope="col">Mon</th>
        <th scope="col">Tue</th>
        <th scope="col">Wed</th>
        <th scope="col">Thu</th>
        <th scope="col">Fri</th>
        <th scope="col">Sat</th>
        <th scope="col">Sun</th>
      </tr>
    );
  }
  return headers;
}
