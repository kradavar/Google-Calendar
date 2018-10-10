import React from "react";
import CellHeader from "./Table-components/Cells/CellHeader.js";
import "../Styles/Cell.css";

export default function Day(props) {
  let day = <td />;

  if (props.view === "month") {
    day = (
      <td className="cell">
        <CellHeader headerInfo={props.renderedDate.date()} />
      </td>
    );
  } else {
    const wholeDayStart = props.renderedDate.clone().startOf("day");
    const wholeDayEnd = props.renderedDate.clone().endOf("day");
    const hours = [];
    for (let hour = wholeDayStart.hour(); hour <= wholeDayEnd.hour(); hour++) {
      hours.push(
        <tr>
          <td className="hour-cell">
            <CellHeader headerInfo={hour} />
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
