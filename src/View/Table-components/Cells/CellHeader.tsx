import * as React from "react";
import "../../../Styles/Cell.css";

export interface CellHeaderProps {
  headerInfo: string;
  hour: string;
}

export const CellHeader = ({
  headerInfo,
  hour
}: CellHeaderProps): JSX.Element => (
  <div className="cell-header-info" data-hour={hour}>
    {headerInfo}
  </div>
);
