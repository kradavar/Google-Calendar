import React from "react";
import Button from "./Button";
import "../../Styles/Switchers.css";

export default function ViewTypeSwitcher({ onChangeView, view }) {
  return (
    <div className="switcher">
      <Button
        view={view}
        value="Day"
        onClick={onChangeView}
        classes={"switcher-input btn"}
      />
      <Button
        view={view}
        value="Week"
        onClick={onChangeView}
        classes={"switcher-input btn"}
      />
      <Button
        view={view}
        value="Month"
        onClick={onChangeView}
        classes={"switcher-input btn"}
      />
    </div>
  );
}
