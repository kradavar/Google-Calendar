import * as React from "react";

export const HourCell: React.SFC<{
  children: Array<JSX.Element>;
  hour: string | number;
  onClick: (e: any) => void;
}> = ({ children, hour, onClick }) => (
  <div className="hour" onClick={onClick} data-hour={hour}>
    {children}
  </div>
);
