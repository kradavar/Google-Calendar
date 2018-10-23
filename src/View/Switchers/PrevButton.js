import React from "react";
import Button from "./Button";

export default function PrevButton({ onClick }) {
  return <Button value="prev" classes={"nav-input"} onClick={onClick} />;
}
