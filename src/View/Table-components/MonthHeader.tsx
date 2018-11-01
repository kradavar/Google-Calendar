import * as React from "react";
import "../../Styles/Cell.css";

export const MonthHeader: React.SFC<{}> = () => (
  <header className="month-header">
    <div>Mon</div>
    <div>Tue</div>
    <div>Wed</div>
    <div>Thu</div>
    <div>Fri</div>
    <div>Sat</div>
    <div>Sun</div>
  </header>
);
