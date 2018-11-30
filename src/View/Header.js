import React from "react";

import { ViewTypeSwitcher } from "./Switchers/ViewTypeSwitcher";
import "../Styles/App.css";
import { SharedViewContext } from "../Context";
import SignMenu from "./SignMenu";
import { Button } from "./Switchers/Button";
import { DATE_FORMATS } from "../constants/constants";
import { formatDate } from "../Model/getRenderedDateInfo";

export const Header = props => {
  return (
    <SharedViewContext.Consumer>
      {({ renderedDate, previuosPeriod, nextPeriod }) => (
        <nav className="navbar navbar-light navbar-header">
          <header className="App-header">Calendar</header>
          <div className="container d-flex justify-content-center align-items-center">
            <Button value="◀" classes="nav-input" onClick={previuosPeriod} />
            <div className="current-month">
              {formatDate(renderedDate, DATE_FORMATS.MONTH)}
            </div>
            <Button value="▶" classes="nav-input" onClick={nextPeriod} />
          </div>
          <ViewTypeSwitcher />
          <SignMenu handleOpen={props.handleOpen} />
        </nav>
      )}
    </SharedViewContext.Consumer>
  );
};
