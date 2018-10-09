import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";

export default function Button(props) {
  let btnClass = classNames([
    props.classes,
    "btn",
    {
      "btn-outline-primary": props.value !== props.view,
      "btn-primary": props.value === props.view,
      disabled: props.value === props.view
    }
  ]);
  return (
    <input
      name={props.value}
      type="button"
      value={props.value}
      onClick={props.onClick}
      className={btnClass}
    />
  );
}
