import * as React from "react";
import { Week } from "./Week";
import "../../Styles/Cell.css";
import { MonthHeader } from "./MonthHeader";
import * as moment from "moment";

export const Month: React.SFC<{ monthDate: string }> = ({ monthDate }) => {
  const getWeekCount = (date: string): number => {
    const cloneDate = moment(date);
    // week number of 1st day of the month
    const start: number = cloneDate.date(1).isoWeek();
    // week number of the last day of the month
    const end: number = cloneDate.date(cloneDate.daysInMonth()).isoWeek();
    const duration: number = end - start + 1;
    if (duration < 0) {
      return cloneDate.isoWeeksInYear() + duration;
    }
    return duration;
  };

  const renderMonth = () => {
    const currentDate: moment.Moment = moment(monthDate).startOf("month");
    const weeks: Array<JSX.Element> = [];
    const duration: number = getWeekCount(monthDate);

    for (let i = 0; i < duration; i++) {
      weeks.push(
        <Week weekDate={currentDate.clone().add(i, "week")} key={i} />
      );
    }

    return weeks;
  };

  return (
    <div className="flex-container month">
      <MonthHeader />
      {renderMonth()}
    </div>
  );
};
