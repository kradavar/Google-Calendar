import React from "react";
import Button from "./Button";

export default function ViewTypeSwitcher(props) {
  return (
    <div className="switcher">
      <Button value="day" onClick={props.onChangeView} />
      <Button value="week" onClick={props.onChangeView} />
      <Button value="month" onClick={props.onChangeView} />
    </div>
  );
}
