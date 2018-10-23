import React from "react";
import Button from "./Button";

export default function NextButton({ onClick }) {
  return <Button value="next" classes={"nav-input"} onClick={onClick} />;
}
