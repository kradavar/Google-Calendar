import React from "react";
import classNames from "classnames";
import "../../Styles/Button.css";
import { SharedViewContext } from "../../Context";

export const Button = ({ classes, value, onClick, type = "button" }) => {
  return (
    <SharedViewContext.Consumer>
      {({ view }) => (
        <input
          type={type}
          value={value}
          onClick={onClick}
          className={classNames(["btn", classes])}
          disabled={view === value}
        />
      )}
    </SharedViewContext.Consumer>
  );
};
