import React from "react";

export const HourCell = ({ children, hour, onClick, value }) => (
  <div className="hour" onClick={onClick} key={hour} value={value}>
    {children}
  </div>
);
