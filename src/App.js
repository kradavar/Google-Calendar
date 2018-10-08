import React, { Component } from "react";
import moment from "moment";
// Redux stuff
/*import { Provider } from "react-redux";
import store from "./Model/store/store";*/

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
    this.handleSwitcherChange = this.handleSwitcherChange.bind(this);
  }

  handleSwitcherChange(event) {

    switch (event.target.value) {
      case 'day':
        this.setState({
          view: "day"
        });
        break;
      case 'week':
        this.setState({
          view: "week"
        });
        console.log(this.state.view);
        break;
      case 'month':
        this.setState({
          view: "month"
        });
        break;
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">Google Calendar</header>
        <div>
          <Switcher onChangeView={this.handleSwitcherChange} />
        </div>
        <CalendarTable
          calendarToRender={this.state.view}
          renderedDate={this.state.renderedDate}
          currentDate={this.state.currentDate}
        />
      </div>
    );
  }
}

export default App;
