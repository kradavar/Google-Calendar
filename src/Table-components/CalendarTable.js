import React, { Component } from 'react';

import moment from 'moment';
import Cell from './Cell';

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      column: 7,
      rows: Math.ceil(this.props.monthLength / 7),
    }
  }

  createMonth() {
    let month = 10;
    let days = [];
    let date = moment('2018-' + month + '-01');

    /*if (date.add(30, 'day').isValid()) {
      monthLength = 31;
    }
    else {
      monthLength = 30;
    }
    if (month = 2) {
      monthLength = 28;
    }
*/
    for (let i = 0; i < 31; i++) {
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

  /* chooseDayOfWeek(id) {
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
 */
  render() {
    let days = this.createMonth();
    let rows = [];
    let monthLength = 0;
    for (let i = 0; i < this.state.rows; i++) {
      let rowID = 'row' + i;
      let columns = [];
      for (let j = 0; j < this.state.column; j++) {


        let cellID = 'cell' + i + '-' + j;
        if (monthLength < this.props.monthLength) {
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
