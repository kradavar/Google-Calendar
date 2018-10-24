import React from "react";
import Button from "./Button";

export default function PrevButton({ onClick }) {
  return (
    <Button
      value="Prev"
      classes="nav-input btn btn-outline-primary"
      onClick={onClick}
    />
  );
}
