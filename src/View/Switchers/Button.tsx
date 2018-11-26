import * as React from "react";
import * as classNames from "classnames";
import "../../Styles/Button.css";

export const Button = ({ classes, value, onClick, type = "button" }: any) => {
  return (
    <input
      type={type}
      value={value}
      onClick={onClick}
      className={classNames(["btn", "bnt-font", classes])}
    />
  );
};
