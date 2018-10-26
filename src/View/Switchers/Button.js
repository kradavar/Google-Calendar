import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

// Default class 'btn'
export default function Button({
  classes,
  value,
  onClick,
  view,
  type = "button"
}) {
  let btnClass;

  // MOVE!
  if (value === "day" || value === "week" || value === "month") {
    btnClass = classNames([
      classes,
      {
        "btn-outline-primary": value !== view,
        "btn-primary": value === view,
        disabled: value === view
      }
    ]);
  } else {
    btnClass = classes;
  }

  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={btnClass}
      disabled={view === value}
    />
  );
}
