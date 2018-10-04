import React, { Component } from 'react';
import Cell from './Cell';

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 7,
      rows: Math.ceil(this.props.monthLength / 7),
    }
  }

  chooseTableToCreate() {
    const daysInWeek = 7;
    switch (this.props.calendarToRender) {
      case 'month': this.setState({
        column: daysInWeek,
        rows: (this.props.monthLength / daysInWeek)
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
        case 'cell0-0': day = "Monday";
          break;
        case 'cell0-1': day = "Tuesday";
          break;
        case 'cell0-2': day = "Wednesday";
          break;
        case 'cell0-3': day = "Thursday";
          break;
        case 'cell0-4': day = "Friday";
          break;
        case 'cell0-5': day = "Saturday";
          break;
        case 'cell0-6': day = "Sunday";
          break;
        default: day = this.props.dayOfWeek;
      }
    }
    else {
      day = this.props.dayOfWeek;
    }

    return day;
  }

  render() {
    let rows = [];
    let monthLength = 0;
    for (let i = 0; i < this.state.rows; i++) {
      let rowID = 'row' + i;
      let columns = [];
      for (let j = 0; j < this.state.column; j++) {
        let cellID = 'cell' + i + '-' + j;
        if (monthLength <= this.props.monthLength) {

          columns.push(<Cell date={21} dayOfWeek={this.chooseDayOfWeek(cellID)} key={monthLength} />);
          monthLength++;
        }

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
