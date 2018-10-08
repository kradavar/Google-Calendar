import React from "react";
import Button from "./Button";

export default function NextButton(props) {
  return <Button value="next" onClick={props.onClick} />;
}
