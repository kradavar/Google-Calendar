import React, { Component } from "react";
import moment from "moment";

import CalendarTable from "./View/Table-components/CalendarTable";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month",
      currentDate: moment(),
      renderedDate: moment("2018-09-01")
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <CalendarTable
          calendarToRender={this.state.view}
          renderedDate={this.state.renderedDate}
        />
      </div>
    );
  }
}

export default App;
