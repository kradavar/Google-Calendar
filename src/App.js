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

    this.state = {
      view: VIEW.MONTH,
      renderedDate: moment(),
      changeViewType: this.changeViewType
    };
  }

  handleSwitcherChange = event => {
    this.setState({ view: event.target.value });
  };

  handlePrevButtonClick = () => {
    this.setState({
      renderedDate: this.state.renderedDate.clone().subtract(1, this.state.view)
    });
  };

  handleNextButtonClick = () => {
    this.setState({
      renderedDate: this.state.renderedDate.clone().add(1, this.state.view)
    });
  };

  render() {
    return (
      <SharedViewContext.Provider value={this.state}>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <header className="App-header">Calendar</header>
            <ViewTypeSwitcher />
            <div className="current-month">
              {formatDate(this.state.renderedDate, DATE_FORMATS.MONTH)}
            </div>
            <div className="container d-flex justify-content-center align-items-center">
              <Button
                value="◀"
                classes="nav-input"
                onClick={this.handlePrevButtonClick}
              />
              <CalendarTable renderedDate={this.state.renderedDate} />
              <Button
                value="▶"
                classes="nav-input"
                onClick={this.handleNextButtonClick}
              />
            </div>
          </div>
        </div>
      </SharedViewContext.Provider>
    );
  }
}

export default App;
