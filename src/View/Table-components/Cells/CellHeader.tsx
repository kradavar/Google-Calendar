import * as React from "react";
import "../../../Styles/Cell.css";

export interface CellHeaderProps {
  headerInfo: any /* string or result of function? */;
  hour: number | null;
}

export const CellHeader = ({ headerInfo, hour }: CellHeaderProps): any => (
  <div className="cell-header-info" data-hour={hour}>
    {headerInfo}
  </div>
);
