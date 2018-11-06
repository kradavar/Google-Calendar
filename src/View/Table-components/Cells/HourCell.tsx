import * as React from "react";

export const HourCell: React.SFC<{
  children: Array<JSX.Element>;
  hour: string | number;
  onClick: (e: any) => void;
  classes?: string;
}> = ({ children, hour, onClick, classes }) => (
  <div className={"hour" + classes} onClick={onClick} data-hour={hour}>
    {children}
  </div>
);
