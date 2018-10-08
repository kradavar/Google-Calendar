import React, { Component } from "react";
import Cell from "./Cell";
import TableHeader from "./TableHeader";
import moment from "moment";

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 7,
      rows: 5,
      start: moment(this.props.currentDate.year() + '-' + (this.props.currentDate.month() + 1) + '-01')
    }
  }

  getStartDate() {
    let startDate;
    let date = this.props.renderedDate;
    switch (this.props.calendarToRender) {
      case "month":
        startDate = moment(date.year() + '-' + (date.month() + 1) + '-01');
        break;
      case "week":
        startDate = date;

        break;
      case "day": return date;
      default:
        break;
    }
    if (startDate.isoWeekday() !== 1) {
      startDate = startDate.subtract(
        startDate.isoWeekday() - 1,
        "day"
      );
    }
    return startDate;
  }



  getTableSize(viewType) {
    switch (viewType) {
      case 'month':
        return {
          columns: 7,
          rows: 5
        };
      case 'week':
        return {
          columns: 7,
          rows: 1
        };
      case 'day':
        return {
          columns: 1,
          rows: 1
        };
    }
  }

  render() {

    let rows = [];
    let startDate = this.getStartDate();
    let tableSize = this.getTableSize(this.props.calendarToRender);
    for (let i = 0; i < tableSize.rows; i++) {
      const columns = [];

      for (let j = 0; j < tableSize.columns; j++) {
        columns.push(
          <Cell
            dayOfMonth={startDate.date()}
            key={startDate.date()}
            events={[]}
          />
        );
        startDate.add(1, "day");
      }
      rows.push(<tr key={i}>{columns}</tr>);

    }
    return (
      <div>
        <table>
          <TableHeader />
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
