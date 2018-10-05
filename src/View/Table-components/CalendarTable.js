import React, { Component } from 'react';

import moment from 'moment';
import Cell from './Cell';

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 0,
      rows: 0,
      renderedMonth: 10
    }
  }

  chooseTableToCreate(date) {
    const daysInWeek = 7;
    switch (this.props.calendarToRender) {
      case 'month': this.setState({
        column: daysInWeek,
        rows: (date.daysInMonth() / daysInWeek)
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

  render() {

    let month = this.state.renderedMonth;
    let date = moment('2018-' + month + '-01');
    this.chooseTableToCreate(date);
    console.log(this.state);
    let rows = [];
    let monthLength = 0;
    for (let i = 0; i < this.state.rows; i++) {
      let rowID = 'row' + i;
      let columns = [];
      for (let j = 0; j < this.state.column; j++) {

        if (monthLength < date.daysInMonth()) {
          columns.push(<Cell date={date.date()} dayOfWeek={date.day()} key={monthLength} events={[]} />);
          date.add(1, 'day');
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
