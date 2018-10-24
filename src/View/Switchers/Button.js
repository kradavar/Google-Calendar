import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export default function Button({ classes, value, onClick, view, label }) {
  let btnClass;

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

  const type = value === "Create" ? "submit" : "button";

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
