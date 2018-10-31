import React from "react";
import "../../../Styles/Cell.css";

export const CellHeader = ({ headerInfo, value }) => {
  return (
    <div className="cell-header-info" value={value}>
      {headerInfo}
    </div>
  );
};
