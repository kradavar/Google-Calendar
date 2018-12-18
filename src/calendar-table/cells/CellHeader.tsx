import * as React from "react";
import "../../Styles/Cell.css";

export const CellHeader: React.SFC<{
  headerInfo: string | number;
  hour?: number;
}> = ({ headerInfo, hour }) => (
  <div className="cell-header-info" data-hour={hour}>
    {headerInfo}
  </div>
);
