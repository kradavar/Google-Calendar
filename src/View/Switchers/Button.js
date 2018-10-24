import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export default function Button({ classes, value, onClick, view, label }) {
  let btnClass = classNames([
    classes,
    "btn",
    {
      "btn-outline-primary": value !== view,
      "btn-primary": value === view,
      disabled: value === view
    }
  ]);

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
