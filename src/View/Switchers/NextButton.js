import React from "react";
import Button from "./Button";

export default function NextButton({ onClick }) {
  return (
    <Button
      value="Next"
      classes="nav-input btn btn-outline-primary"
      onClick={onClick}
    />
  );
}
