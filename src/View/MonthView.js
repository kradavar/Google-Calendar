import React, { Component } from "react";

export default class MonthView extends Component {
  constructor(props) {
    super(props);
    weekCount: this.getWeekCount();
  }

  getWeekCount() {
    let date = this.props.renderedDate.clone();
    const start = date.date(1).isoWeek();
    const end = date.date(date.daysInMonth()).isoWeek();
    return end - start;
  }
}