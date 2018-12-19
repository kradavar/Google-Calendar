import * as React from "react";
import * as moment from "moment";

import { DATE_FORMATS } from "../../constants/constants";
import { formatDate } from "../../getRenderedDateInfo";

import "./DayWeekHeader.css";

export const DayWeekHeader: React.SFC<{
  className: string;
  dayDate: moment.Moment;
}> = ({ className, dayDate }) => (
  <header className={className}>
    {formatDate(dayDate, DATE_FORMATS.DATE_OF_MONTH)},
    {formatDate(dayDate, DATE_FORMATS.DAY)}
  </header>
);
