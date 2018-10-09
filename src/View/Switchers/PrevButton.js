import React from "react";
import Button from "./Button";

export default function PrevButton(props) {
  return <Button value="prev" classes={"nav-input"} onClick={props.onClick} />;
}
