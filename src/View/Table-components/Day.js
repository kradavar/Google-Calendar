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
        <RenderedEvents date={props.renderedDate} view={props.view} />
      </td>
    );
  } else {
    const hours = [];

    for (let hour = 0; hour < 24; hour++) {
      //debugger;
      hours.push(
        <tr>
          <td className="hour-cell">
            <CellHeader headerInfo={hour} />
            <RenderedEvents
              date={props.renderedDate}
              view={props.view}
              hour={hour}
            />
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
