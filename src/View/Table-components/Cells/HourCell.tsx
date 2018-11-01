import * as React from "react";

export interface HourCellProps {
  children: any;
  hour: string;
  onClick: () => void;
}

export const HourCell = ({
  children,
  hour,
  onClick
}: HourCellProps): JSX.Element => (
  <div className="hour" onClick={onClick} data-hour={hour}>
    {children}
  </div>
);
