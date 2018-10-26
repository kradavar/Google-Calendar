import React from "react";
import Button from "./Button";

import classNames from "classnames";
import "../../Styles/Switchers.css";

export default function ViewTypeSwitcher({ onChangeView, view }) {
  const btnClass = value =>
    classNames([
      "switcher-input",
      {
        "btn-outline-primary": value !== view,
        "btn-primary": value === view,
        disabled: value === view
      }
    ]);
  return (
    <div className="switcher">
      <Button
        view={view}
        value="day"
        onClick={onChangeView}
        classes={btnClass("day")}
      />
      <Button
        view={view}
        value="week"
        onClick={onChangeView}
        classes={btnClass("week")}
      />
      <Button
        view={view}
        value="month"
        onClick={onChangeView}
        classes={btnClass("month")}
      />
    </div>
  );
}
