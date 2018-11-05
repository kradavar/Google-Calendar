import React from "react";
import { Button } from "./Button";

import "../../Styles/Switchers.css";
import { SharedViewContext } from "../../Context";
import { VIEW } from "../../constants/ViewTypes";

export const ViewTypeSwitcher = () => {
  return (
    <SharedViewContext.Consumer>
      {({ view, changeViewType }) => (
        <div className="switcher">
          <Button
            view={view}
            value={VIEW.DAY}
            onClick={changeViewType}
            classes="switcher-input btn-outline-primary"
          />
          <Button
            view={view}
            value={VIEW.WEEK}
            onClick={changeViewType}
            classes="switcher-input btn-outline-primary"
          />
          <Button
            view={view}
            value={VIEW.MONTH}
            onClick={changeViewType}
            classes="switcher-input btn-outline-primary"
          />
        </div>
      )}
    </SharedViewContext.Consumer>
  );
};
