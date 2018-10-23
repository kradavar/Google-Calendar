import React from "react";
import "../../../Styles/Cell.css";

export default function CellHeader({ headerInfo }) {
  return (
    <div className="cell-header">
      <div className="cell-header-info">{headerInfo}</div>
    </div>
  );
}
