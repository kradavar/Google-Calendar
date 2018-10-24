import React from "react";

export default function HourCell({ children, hour, onClick, value }) {
  return (
    <div className="hour" onClick={onClick} key={hour} value={value}>
      {children}
    </div>
  );
}
