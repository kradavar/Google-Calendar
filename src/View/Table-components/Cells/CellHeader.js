import React from "react";

export default function CellHeader(props) {
  return (
    <div className="cell-header">
      <div className="day-of-month">{props.dayOfMonth}</div>
    </div>
  );
}
