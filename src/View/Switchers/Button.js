import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export const Button = ({ classes, value, onClick, type = "button" }) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={classNames(["btn", "bnt-font", classes])}
    />
  );
};
