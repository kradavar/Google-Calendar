import React, { Component } from "react";
import moment from "moment";
// Redux stuff
/*import { Provider } from "react-redux";
import store from "./Model/store/store";*/

import CalendarTable from "./View/Table-components/CalendarTable";
import Switcher from "./View/Switcher";
import "./App.css";
import PrevNextDate from "./View/PrevNextDate";

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month",
      currentDate: moment(),
      renderedDate: moment()
    };
    this.handleSwitcherChange = this.handleSwitcherChange.bind(this);
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
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
        console.log(this.state.currentDate);
        break;
      case 'month':
        this.setState({
          view: "month"
        });
        break;
    }
  }
  handleNavButtonClick(event) {
    switch (event.target.value) {
      case 'prev':
        switch (this.state.view) {
          case 'month':
            debugger;
            this.setState({
              renderedDate: this.state.renderedDate.subtract(1, 'month')
            });
            break;
          case 'week': this.setState({
            renderedDate: this.state.renderedDate.subtract(1, 'week')
          });
            break;
          case 'day': this.setState({
            renderedDate: this.state.renderedDate.subtract(1, 'day')
          });
            break;
        }
        break;
      case 'next':
        switch (this.state.view) {
          case 'month':
            this.setState({
              renderedDate: this.state.renderedDate.add(1, 'month')
            });
            break;
          case 'week': this.setState({
            renderedDate: this.state.renderedDate.add(1, 'week')
          });
            break;
          case 'day': this.setState({
            renderedDate: this.state.renderedDate.add(1, 'day')
          });
            break;
        }
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
        <PrevNextDate onClickNavButton={this.handleNavButtonClick} />
      </div>
    );
  }
}

export default App;
