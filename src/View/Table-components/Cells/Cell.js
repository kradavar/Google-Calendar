import React from "react";
import CellHeader from "./CellHeader.js";
import "../../../Styles/Cell.css";

export default function Cell({ dayOfMonth, view, date }) {
  let cell = <td />;

  if (view === "month") {
    cell = (
      <td className="cell">
        <CellHeader headerInfo={dayOfMonth} />
      </td>
    );
  } else {
    let wholeDay = date.clone();
    wholeDay.hour(0);
    let hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push(
        <tr>
          <td className="hour-cell">
            <CellHeader headerInfo={wholeDay.hour()} />
          </td>
        </tr>
      );
      wholeDay.add(1, "hour");
    }
    cell = (
      <td className="cell">
        <table>
          <tbody>{hours}</tbody>
        </table>
      </td>
    );
  }

  return cell;
}
