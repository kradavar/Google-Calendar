import { getDuration, formatDate } from "../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../constants/DateFormats";
import moment from "moment";

const checkDate = date =>
  getDuration(formatDate(moment(), DATE_FORMATS.DATE), date, "day") < 0
    ? "The date is already passed."
    : undefined;

const checkTime = date =>
  getDuration(
    formatDate(moment(), DATE_FORMATS.DATE_WITH_TIME),
    date,
    "minute"
  ) < 0
    ? "The time is already passed."
    : undefined;

const checkDuration = (start, end) =>
  getDuration(start, end, "minute") < 15
    ? "The duration of the event must be more than 15 minutes."
    : undefined;

const checkName = name => (name ? undefined : "Please, enter event name.");

export const validate = values => {
  const start = values.start.date + " " + values.start.time;
  const end = values.end.date + " " + values.end.time;
  return {
    name: checkName(values.name),
    start: {
      date: checkDate(start),
      time: checkTime(start)
    },
    end: {
      date: checkDate(end),
      time: checkTime(end) || checkDuration(start, end)
    }
  };
};
