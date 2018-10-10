import React, { Component } from "react";
import "../../Styles/CalendarTable.css";
import TableHeader from "./TableHeader";
import Month from "../Month";
import Week from "../WeekDayView";

export default class CalendarTable extends Component {
  render() {
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
            {this.props.view === "month" ? (
              <Month renderedDate={this.props.renderedDate} />
            ) : (
              <Week
                renderedDate={this.props.renderedDate}
                view={this.props.view}
              />
            )}
          </tbody>
        </table>
      </div>
    );
  }
}
