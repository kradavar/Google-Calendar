import React, { Component } from 'react';
import CalendarTable from './View/Table-components/CalendarTable';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: "month"
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <CalendarTable calendarToRender={this.state.view} />
      </div>
    );
  }
}

export default App;
