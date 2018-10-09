import React from "react";
import Button from "./Button";

export default function NextButton(props) {
  return <Button value="next" classes={"nav-input"} onClick={props.onClick} />;
}
