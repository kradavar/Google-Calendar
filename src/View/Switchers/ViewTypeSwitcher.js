import React from "react";
import Button from "./Button";
import "../../Styles/Switchers.css";

export default function ViewTypeSwitcher(props) {
  return (
    <div className="switcher">
      <Button
        view={props.view}
        value="day"
        onClick={props.onChangeView}
        classes={"switcher-input"}
      />
      <Button
        view={props.view}
        value="week"
        onClick={props.onChangeView}
        classes={"switcher-input"}
      />
      <Button
        view={props.view}
        value="month"
        onClick={props.onChangeView}
        classes={"switcher-input"}
      />
    </div>
  );
}
