import React from "react";

import "../../Styles/Switchers.css";
import { SharedViewContext } from "../../Context";
import { VIEW } from "../../constants/ViewTypes";

export const ViewTypeSwitcher = () => {
  return (
    <SharedViewContext.Consumer>
      {({ changeViewType }) => (
        <select className="switcher" onChange={changeViewType}>
          <option value={VIEW.MONTH}>Month</option>
          <option value={VIEW.WEEK}>Week</option>
          <option value={VIEW.DAY}>Day</option>
        </select>
      )}
    </SharedViewContext.Consumer>
  );
};
