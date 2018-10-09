import React, { Component } from "react";
import "../../Styles/CalendarTable.css";
import Cell from "./Cells/Cell";
import TableHeader from "./TableHeader";
import moment from "moment";

export default class CalendarTable extends Component {
  getStartDate() {
    let startDate;
    let date = this.props.renderedDate.clone();
    switch (this.props.view) {
      case "month":
        startDate = date.clone().date(1);
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
      startDate = startDate.subtract(startDate.isoWeekday() - 1, "day");
    }
    return startDate;
  }

  getTableSize(viewType) {
    switch (viewType) {
      case "month":
        return {
          columns: 7,
          rows: 5
        };
      case "week":
        return {
          columns: 7,
          rows: 1
        };
      case "day":
        return {
          columns: 1,
          rows: 1
        };
      default:
        return {
          columns: 7,
          rows: 5
        };
    }
  }

  createTable() {
    let rows = [];
    let startDate = this.getStartDate();
    let tableSize = this.getTableSize(this.props.view);
    for (let i = 0; i < tableSize.rows; i++) {
      const columns = [];

      for (let j = 0; j < tableSize.columns; j++) {
        columns.push(
          <Cell
            dayOfMonth={startDate.date()}
            key={startDate.date()}
            events={[]}
            view={this.props.view}
            date={startDate}
          />
        );
        startDate.add(1, "day");
      }
      rows.push(<tr key={i}>{columns}</tr>);
    }
    return rows;
  }

  render() {
    let rows = this.createTable();
    return (
      <div className="calendar">
        <hr />
        <table className="table table-bordered">
          <tbody>
            <TableHeader
              view={this.props.view}
              renderedDay={this.props.renderedDate.format("ddd")}
              day={this.props.renderedDate.date()}
            />
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}
