import React from "react";
import { Button } from "./Button";

import classNames from "classnames";
import "../../Styles/Switchers.css";
import { SharedViewContext } from "../../Context";

export const ViewTypeSwitcher = ({ onChangeView, view }) => {
  const btnClass = value =>
    classNames([
      "switcher-input",
      {
        "btn-outline-primary": value !== view,
        "btn-primary": value === view,
        disabled: value === view
      }
    ]);
  return (
    <SharedViewContext.Consumer>
      {({ view, changeViewType }) => (
        <div className="switcher">
          <Button
            view={view}
            value="day"
            onClick={changeViewType}
            classes={btnClass("day")}
          />
          <Button
            view={view}
            value="week"
            onClick={changeViewType}
            classes={btnClass("week")}
          />
          <Button
            view={view}
            value="month"
            onClick={changeViewType}
            classes={btnClass("month")}
          />
        </div>
      )}
    </SharedViewContext.Consumer>
  );
};
