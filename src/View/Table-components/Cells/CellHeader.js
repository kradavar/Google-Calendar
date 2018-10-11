import React from "react";
import "../../../Styles/Cell.css";

export default function CellHeader(props) {
  return (
    <div className="cell-header">
      <div className="cell-header-info">{props.headerInfo}</div>
    </div>
  );
}
