import React from "react";

export default function CellHeader(props) {
  return (
    <div className="cell-header">
      <div className="cell-header-info">{props.headerInfo}</div>
    </div>
  );
}
