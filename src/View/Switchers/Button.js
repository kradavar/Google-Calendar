import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export default function Button({ value, onClick }) {
  let btnClass = classNames("btn");
  return (
    <input
      name={value}
      type="button"
      value={value}
      onClick={onClick}
      className={btnClass}
    />
  );
}
