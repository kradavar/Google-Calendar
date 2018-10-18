import React from "react";
import Button from "./Button";
import "../../Styles/Switchers.css";

export default function ViewTypeSwitcher({ onChangeView, view }) {
  return (
    <div className="switcher">
      <Button
        view={view}
        value="day"
        onClick={onChangeView}
        classes={"switcher-input"}
      />
      <Button
        view={view}
        value="week"
        onClick={onChangeView}
        classes={"switcher-input"}
      />
      <Button
        view={view}
        value="month"
        onClick={onChangeView}
        classes={"switcher-input"}
      />
    </div>
  );
}
