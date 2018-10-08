import React from "react";
import CellHeader from "./CellHeader.js";

export default function Cell({ dayOfMonth }) {
  return (
    <td className="cell">
      <CellHeader dayOfMonth={dayOfMonth} />
    </td>
  );
}
