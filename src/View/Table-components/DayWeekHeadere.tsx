import * as React from "react";
import "../../Styles/Cell.css";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../Model/DateFormats";
import { Moment } from "moment";

export interface Props {
  className: string;
  renderedDate: Moment | string;
}

export const DayWeekHeader = ({ className, renderedDate }: Props) => (
  <header className={className}>
    {formatDate(renderedDate, DATE_FORMATS.DATE_OF_MONTH)},
    {formatDate(renderedDate, DATE_FORMATS.DAY)}
  </header>
);
