import React, { Component } from "react";
import moment from "moment";
import "./Styles/App.css";
// Calendar
import { CalendarTable } from "./View/Table-components/CalendarTable";
// Switchers
import { ViewTypeSwitcher } from "./View/Switchers/ViewTypeSwitcher";
import { Button } from "./View/Switchers/Button";
import { formatDate } from "./Model/getRenderedDateInfo";
import { DATE_FORMATS } from "./Model/DateFormats";
import { SharedViewContext } from "./Context";

class App extends Component {
  constructor(props) {
    super(props);

    this.changeViewType = e => {
      this.setState({
        view: e.target.value
      });
    };

    this.state = {
      view: "month",
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
            <CalendarTable renderedDate={this.state.renderedDate} />
            <div className="container d-flex justify-content-between bottom-buttons">
              <Button
                value="Prev"
                classes="nav-input btn-outline-primary"
                onClick={this.handlePrevButtonClick}
              />
              <Button
                value="Next"
                classes="nav-input btn-outline-primary"
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
