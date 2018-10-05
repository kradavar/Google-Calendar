import React, { Component } from 'react';

import moment from 'moment';
import Cell from './Cell';
export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 7,
      rows: Math.ceil(this.props.monthLength / 7),
      renderedMonth: 10
    }
  }

  getRenderedMonthLength(month) {
    let monthLength;
    if (month == 2) {
      monthLength = 28;
    }
    if (moment('2018-' + month + '-31').isValid()) {
      monthLength = 31;
    }
    else {
      monthLength = 30;
    }

    return monthLength;
  }

  createMonth() {
    let month = this.state.renderedMonth;
    let days = [];
    let date = moment('2018-' + month + '-01');

    for (let i = 0; i < this.getRenderedMonthLength(); i++) {
      let day = {};
      day.dayOfWeek = date.format('dddd');
      day.date = date.date();
      day.events = [];
      /* вместо пустого списка сделать загрузку событий из JSON */
      days.push(day);
      date.add(1, 'day');
    }

    return days;
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

  render() {
    let days = this.createMonth();
    let rows = [];
    let monthLength = 0;
    for (let i = 0; i < this.state.rows; i++) {
      let rowID = 'row' + i;
      let columns = [];
      for (let j = 0; j < this.state.column; j++) {
        let cellID = 'cell' + i + '-' + j;
        if (monthLength < this.getRenderedMonthLength()) {
          columns.push(<Cell date={days[monthLength].date} dayOfWeek={days[monthLength].dayOfWeek} key={monthLength} events={days[monthLength].events} />);
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
