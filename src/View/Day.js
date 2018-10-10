import React from "react";
import CellHeader from "./Table-components/Cells/CellHeader.js";
import "../../Styles/Cell.css";

export default function Day(props) {
  let day = <td />;

  if (props.view === "month") {
    day = (
      <td className="cell">
        <CellHeader headerInfo={props.date.date()} />
      </td>
    );
  } else {
    const wholeDayStart = props.date.clone().startOf("day");
    const wholeDayEnd = props.date.clone().endOf("day");
    const hours = [];
    for (
      let hour = wholeDayStart.hour();
      hour <= wholeDayEnd.hour();
      hour.add(1, "hour")
    ) {
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
