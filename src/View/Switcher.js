import React from "react";

export default function Switcher(props) {
  return (
    <div className="switcher">
      <input name="day" type="button" value="day" />
      <input name="week" type="button" value="week" />
      <input name="month" type="button" value="month" />
    </div>
  );
}
