import React from "react";
import { Button } from "./Button";

import classNames from "classnames";
import "../../Styles/Switchers.css";
import { SharedViewContext } from "../../Context";

export const ViewTypeSwitcher = () => {
  const btnClass = (value, view) =>
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
