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
    let date = this.props.currentDate;
    switch (this.props.calendarToRender) {
      case "month":
        startDate = moment(date.year() + '-' + (date.month() + 1) + '-01');
        break;
      case "week":
        startDate = date;
        break;
      case "day":
        return date;
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

  componentDidUpdate(prevProps) {
    //debugger;
    if (this.props.calendarToRender !== prevProps.calendarToRender) {
      let startDate;
      let date = this.props.currentDate;
      switch (this.props.calendarToRender) {
        case "month":
          startDate = moment(date.year() + '-' + (date.month() + 1) + '-01');
          if (startDate.isoWeekday() !== 1) {
            startDate = startDate.subtract(
              startDate.isoWeekday() - 1,
              "day"
            );
          }
          this.setState({
            columns: 7,
            rows: 5,
            start: startDate
          });
          break;
        case "week":
          startDate = date;
          if (startDate.isoWeekday() !== 1) {
            startDate = startDate.subtract(
              startDate.isoWeekday() - 1,
              "day"
            );
          }
          this.setState({
            columns: 7,
            rows: 1,
            start: startDate
          });
          break;
        case "day":
          this.setState({
            columns: 1,
            rows: 1,
            start: date
          });
          break;
        default:
          break;
      }
    }
  }

  render() {

    let rows = [];
    //let startDate = this.getStartDate();
    for (let i = 0; i < this.state.rows; i++) {
      const columns = [];

      for (let j = 0; j < this.state.columns; j++) {
        columns.push(
          <Cell
            dayOfMonth={this.state.start.date()}
            key={this.state.start.date()}
            events={[]}
          />
        );
        this.state.start.add(1, "day");
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
