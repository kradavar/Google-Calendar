import * as React from "react";
import "../Styles/Cell.css";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../constants/constants";
import * as moment from "moment";

export const DayWeekHeader: React.SFC<{
  className: string;
  dayDate: moment.Moment;
}> = ({ className, dayDate }) => (
  <header className={className}>
    {formatDate(dayDate, DATE_FORMATS.DATE_OF_MONTH)},
    {formatDate(dayDate, DATE_FORMATS.DAY)}
  </header>
);
