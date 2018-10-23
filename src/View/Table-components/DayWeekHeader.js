import React from "react";
import "../../Styles/Cell.css";

export default function DayWeekHeadar({ className, renderedDate, day }) {
  return (
    <header className={className}>
      {renderedDate},{day}
    </header>
  );
}
