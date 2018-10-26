import React, { Component } from "react";
import moment from "moment";
import "./Styles/App.css";
// Calendar
import CalendarTable from "./View/Table-components/CalendarTable";
// Switchers
import ViewTypeSwitcher from "./View/Switchers/ViewTypeSwitcher";
import Button from "./View/Switchers/Button";
import { formatDate } from "./Model/getRenderedDateInfo";
import { DATE_FORMATS } from "./Model/DateFormats";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month",
      renderedDate: moment()
    };
  }

  handleSwitcherChange = event => {
    this.setState({ view: event.target.value });
  };

  handlePrevButtonClick = () => {
    this.setState({
      renderedDate: this.state.renderedDate.subtract(1, this.state.view)
    });
  };

  handleNextButtonClick = () => {
    this.setState({
      renderedDate: this.state.renderedDate.add(1, this.state.view)
    });
  };

  render() {
    return (
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <header className="App-header">Calendar</header>
          <ViewTypeSwitcher.Consumer
            view={this.state.view}
            onChangeView={this.handleSwitcherChange}
          />
          <div className="current-month">
            {formatDate(this.state.renderedDate, DATE_FORMATS.MONTH)}
          </div>
          <CalendarTable
            view={this.state.view}
            renderedDate={this.state.renderedDate}
          />
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
    );
  }
}

export default App;
