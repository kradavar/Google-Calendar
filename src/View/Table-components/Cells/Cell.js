import React from "react";
import CellHeader from "./CellHeader.js";
import "../../../Styles/Cell.css";

export default function Cell({ dayOfMonth }) {
  return (
    <td className="cell">
      <CellHeader dayOfMonth={dayOfMonth} />
    </td>
  );
}
