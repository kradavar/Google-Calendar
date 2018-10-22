import React, { Component } from "react";
import moment from "moment";
// Redux stuff

import "./Styles/App.css";
// Calendar
import CalendarTable from "./View/Table-components/CalendarTable";
// Switchers
import ViewTypeSwitcher from "./View/Switchers/ViewTypeSwitcher";
import PrevButton from "./View/Switchers/PrevButton";
import NextButton from "./View/Switchers/NextButton";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month",
      renderedDate: moment()
    };
  }

  handleSwitcherChange = event => {
    if (event.target.value === this.state.view) return;
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
      <div className="container">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <header className="App-header">Calendar</header>
          <ViewTypeSwitcher
            view={this.state.view}
            onChangeView={this.handleSwitcherChange}
          />
          <div className="current-month">
            {this.state.renderedDate.format("MMMM")}
          </div>
          <CalendarTable
            view={this.state.view}
            renderedDate={this.state.renderedDate}
          />
          <div className="container d-flex justify-content-between bottom-buttons">
            <PrevButton onClick={this.handlePrevButtonClick} />
            <NextButton onClick={this.handleNextButtonClick} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
