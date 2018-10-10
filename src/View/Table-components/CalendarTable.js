import React, { Component } from "react";
import "../../Styles/CalendarTable.css";
import TableHeader from "./TableHeader";
import Month from "../Month";
import Week from "../Week";

export default class CalendarTable extends Component {
  render() {
    return (
      <div className="calendar">
        <hr />
        <div>{this.props.renderedDate.format()}</div>
        <table className="table table-bordered">
          {this.props.view === "month" ? (
            <Month
              renderedDate={this.props.renderedDate}
              view={this.props.view}
            />
          ) : (
            <Week
              renderedDate={this.props.renderedDate}
              view={this.props.view}
            />
          )}
        </table>
      </div>
    );
  }
}
