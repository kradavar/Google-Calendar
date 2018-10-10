import React, { Component } from "react";

export default class WeekDayView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countWeek: getWeekCount()
    };
  }

  getWeekCount() {
    let date = this.props.renderedDate.clone();
    const start = date.date(1).isoWeek();
    const end = date.date(date.daysInMonth()).isoWeek();
    return end - start;
  }

  renderDay(date) {
    return <Day renderedDate={date} events={[]} />;
  }

  renderWeek() {
    const date = moment(this.props.renderedDate);
    const startDate = date.clone().startOf("isoWeek");
    const endDate = date.clone().endOf("isoWeek");

    const week = [];
    for (
      let currDate = startDate.clone();
      currDate <= endDate;
      currDate.add(1, "day")
    ) {
      week.push(this.renderDay(currDate));
    }

    return week;
  }

  render() {
    return (
      <div>
        {this.props.view === "week" ? {} : renderDay(this.props.renderedDate)}
      </div>
    );
  }
}
