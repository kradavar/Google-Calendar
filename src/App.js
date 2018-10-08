import React, { Component } from "react";
import moment from "moment";
// Redux stuff
/*import { Provider } from "react-redux";
import store from "./Model/store/store";*/

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
      currentDate: moment(),
      renderedDate: moment()
    };
    this.handleSwitcherChange = this.handleSwitcherChange.bind(this);
    this.handleNextButtonClick = this.handleNextButtonClick.bind(this);
    this.handlePrevButtonClick = this.handlePrevButtonClick.bind(this);
  }

  handleSwitcherChange(event) {
    if (event.target.value === this.state.view) return;
    this.setState({ view: event.target.value });
  }

  handlePrevButtonClick() {
    this.setState({
      renderedDate: this.state.renderedDate.subtract(1, this.state.view)
    });
  }

  handleNextButtonClick() {
    this.setState({
      renderedDate: this.state.renderedDate.add(1, this.state.view)
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">Google Calendar</header>
        <ViewTypeSwitcher onChangeView={this.handleSwitcherChange} />
        <div>{`Current date is: ${this.state.currentDate}`}</div>
        <div>{`Rendered date is: ${this.state.renderedDate}`}</div>
        <CalendarTable
          view={this.state.view}
          renderedDate={this.state.renderedDate}
          currentDate={this.state.currentDate}
        />
        <div>
          <PrevButton onClick={this.handlePrevButtonClick} />
          <NextButton onClick={this.handleNextButtonClick} />
        </div>
      </div>
    );
  }
}

export default App;
