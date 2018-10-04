import React, { Component } from 'react';
import CalendarTable from './Table-components/CalendarTable';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      calendarToRender: "mounth",
      monthLength: 31
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <CalendarTable calendarToRender={"month"} monthLength={this.state.monthLength} />
      </div>
    );
  }
}

export default App;
