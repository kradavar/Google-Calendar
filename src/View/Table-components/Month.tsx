import * as React from "react";
import { Week } from "./Week";
import "../../Styles/Cell.css";
import { MonthHeader } from "./MonthHeader";
import * as moment from "moment";

export const Month: React.SFC<{ renderedDate: moment.Moment }> = ({
  renderedDate
}) => {
  const getWeekCount = (date: moment.Moment): number => {
    // week number of 1st day of the month
    const start: number = date.date(1).isoWeek();
    // week number of the last day of the month
    const end: number = date.date(date.daysInMonth()).isoWeek();
    const duration: number = end - start + 1;
    if (duration < 0) {
      return date.isoWeeksInYear() + duration;
    }
    return duration;
  };

  const renderMonth = () => {
    const currentDate: moment.Moment = renderedDate.clone().startOf("month");
    const weeks: Array<JSX.Element> = [];
    const duration: number = getWeekCount(renderedDate.clone());

    for (let i = 0; i < duration; i++) {
      weeks.push(<Week renderedDate={currentDate.clone()} key={i} />);
      currentDate.add(1, "week");
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
