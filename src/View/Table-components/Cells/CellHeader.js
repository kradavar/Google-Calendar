import React from "react";
import "../../../Styles/Cell.css";

export default function CellHeader({ headerInfo, value }) {
  return (
    <div className="cell-header-info" value={value}>
      {headerInfo}
    </div>
  );
}
