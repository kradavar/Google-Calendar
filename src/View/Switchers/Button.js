import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export default function Button({
  classes,
  value,
  onClick,
  view,
  type = "button"
}) {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={classNames(["btn", classes])}
      disabled={view === value}
    />
  );
}
