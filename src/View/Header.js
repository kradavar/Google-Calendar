import React from "react";

import { ViewTypeSwitcher } from "./Switchers/ViewTypeSwitcher";
import "../Styles/App.css";
import { SharedViewContext } from "../Context";
import { Button } from "./Switchers/Button";
import { DATE_FORMATS } from "../constants/DateFormats";
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
          <div className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle sign-link"
              href="#"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Sign
            </a>
            <div
              className="dropdown-menu drop-width"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <Button
                value="Sign in"
                classes="dropdown-item drop-button"
                onClick={props.handleOpen}
              />
              <Button
                value="Sign up"
                classes="dropdown-item drop-button"
                onClick={props.handleOpen}
              />
            </div>
          </div>
        </nav>
      )}
    </SharedViewContext.Consumer>
  );
};
