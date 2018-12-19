import * as React from "react";

import { ViewTypeSwitcher } from "../ViewTypeSwitcher";
import "./Header.css";
import { SharedViewContext } from "../../../Context";
import { SignMenu } from "../SignMenu";
import { Button } from "../../Button";
import { DATE_FORMATS } from "../../../constants/constants";
import { formatDate } from "../../../getRenderedDateInfo";
import * as moment from "moment";

export const Header = props => {
  return (
    <SharedViewContext.Consumer>
      {({
        renderedDate,
        previuosPeriod,
        nextPeriod
      }: {
        renderedDate: moment.Moment;
        previuosPeriod: () => void;
        nextPeriod: () => void;
      }) => (
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
