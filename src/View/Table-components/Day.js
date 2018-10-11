import React from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";

export default function Day(props) {
  let day = <td />;

  if (props.view === "month") {
    day = (
      <td
        className="cell day-cell"
        onClick={() =>
          alert("add Event for this Day " + props.renderedDate.date())
        }
      >
        <CellHeader headerInfo={props.renderedDate.date()} />
        <RenderedEvents />
      </td>
    );
  } else {
    const hours = [];
    for (let hour = 0; hour < 24; hour++) {
      hours.push(
        <tr>
          <td className="hour-cell">
            <CellHeader headerInfo={hour} />
            <RenderedEvents />
          </td>
        </tr>
      );
    }
    day = (
      <td className="cell-with-hour">
        <table className="hour-table">
          <tbody>{hours}</tbody>
        </table>
      </td>
    );
  }

  return day;
}
