import React, { Component } from "react";
import moment from "moment";
import "./Styles/App.css";
// Calendar
import { CalendarTable } from "./View/Table-components/CalendarTable";
// Switchers
import { ViewTypeSwitcher } from "./View/Switchers/ViewTypeSwitcher";
import { Button } from "./View/Switchers/Button";
import { formatDate } from "./Model/getRenderedDateInfo";
import { DATE_FORMATS } from "./constants/DateFormats";
import { SharedViewContext } from "./Context";
import { VIEW } from "./constants/ViewTypes";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeViewType = e => {
      this.setState({
        view: e.target.value
      });
    };

    this.nextPeriod = () => {
      this.setState({
        renderedDate: this.state.renderedDate.add(1, this.state.view)
      });
    };

    this.previuosPeriod = () => {
      this.setState({
        renderedDate: this.state.renderedDate.subtract(1, this.state.view)
      });
    };

    this.state = {
      view: VIEW.MONTH,
      renderedDate: moment(),
      changeViewType: this.changeViewType,
      nextPeriod: this.nextPeriod,
      previuosPeriod: this.previuosPeriod
    };
  }

  render() {
    return (
      <SharedViewContext.Provider value={this.state}>
        <div className="container">
          <SharedViewContext.Consumer>
            {({ renderedDate, previuosPeriod, nextPeriod }) => (
              <div className="d-flex flex-column align-items-center justify-content-center">
                <header className="App-header">Calendar</header>
                <ViewTypeSwitcher />
                <div className="current-month">
                  {formatDate(renderedDate, DATE_FORMATS.MONTH)}
                </div>

                <div className="container d-flex justify-content-center align-items-center">
                  <Button
                    value="◀"
                    classes="nav-input"
                    onClick={previuosPeriod}
                  />
                  <CalendarTable />
                  <Button value="▶" classes="nav-input" onClick={nextPeriod} />
                </div>
              </div>
            )}
          </SharedViewContext.Consumer>
        </div>
      </SharedViewContext.Provider>
    );
  }
}

export default App;
