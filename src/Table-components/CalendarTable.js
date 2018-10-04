import React, { Component } from 'react';
import Cell from './Cell';

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 7,
      rows: (this.props.mounthLength / 7),
    }
  }

  chooseTableToCreate() {
    const daysInWeek = 7;
    switch (calendarToRender) {
      case 'mounth': this.setState({
        column: daysInWeek,
        rows: (this.props.mounthLength / daysInWeek)
      });
        break;
      case 'week': this.setState({
        column: daysInWeek,
        rows: 1
      });
        break;
      case 'day': this.setState({
        column: 1,
        rows: 1
      });
        break;
      default: break;
    }
  }

  chooseDayOfWeek(id) {
    let day;
    if (this.state.column > 1) {
      switch (id) {
        case '0': day = "Monday";
          break;
        case '1': day = "Tuesday";
          break;
        case '2': day = "Wednesday";
          break;
        case '3': day = "Thursday";
          break;
        case '4': day = "Friday";
          break;
        case '5': day = "Saturday";
          break;
        case '6': day = "Sunday";
          break;
      }
    }
    else {
      day = this.props.dayOfWeek;
    }
  }

  render() {
    let rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      let rowID = 'row' + i;
      let columns = [];
      for (let j = 0; j < this.state.column; j++) {
        let cellID = 'cell' + i + '-' + j;
        columns.push(<Cell date={} dayOfWeek={this.chooseDayOfWeek(cellID)} />);
      }
      rows.push(<tr key={i} id={rowID}>{columns}</tr>);
    }
    return (
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }

}
