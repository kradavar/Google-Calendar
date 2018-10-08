import React, { Component } from "react";
import moment from "moment";
// Redux stuff
import { Provider } from "react-redux";
import store from "./Model/store/store";

import CalendarTable from "./View/Table-components/CalendarTable";
import Switcher from "./View/Switcher";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month",
      currentDate: moment(),
      renderedDate: moment()
    };
  }
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">Google Calendar</header>
          <div>
            <Switcher />
          </div>
          <CalendarTable
            calendarToRender={this.state.view}
            renderedDate={this.state.renderedDate}
          />
        </div>
      </Provider>
    );
  }
}

export default App;
