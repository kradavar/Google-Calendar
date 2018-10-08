import React from "react";

export default function TableHeader({ view, renderedDay }) {
  const isDayView = view === "day";
  let headers;
  if (isDayView) {
    headers = (
      <tr className="header">
        <th>{renderedDay}</th>
      </tr>
    );
  } else {
    headers = (
      <tr className="header">
        <th>Mon</th>
        <th>Tue</th>
        <th>Wed</th>
        <th>Thu</th>
        <th>Fri</th>
        <th>Sat</th>
        <th>Sun</th>
      </tr>
    );
  }
  return headers;
}
