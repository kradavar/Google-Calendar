import React from "react";
import "../../Styles/Cell.css";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../Model/DateFormats";

export const DayWeekHeader = ({ className, renderedDate }) => (
  <header className={className}>
    {formatDate(renderedDate, DATE_FORMATS.DATE_OF_MONTH)},
    {formatDate(renderedDate, DATE_FORMATS.DAY)}
  </header>
);
