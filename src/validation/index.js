import { getDuration, formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../constants/constants";
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
  getDuration(start, end, "minute") < 15 &&
  getDuration(start, end, "minute") > 0
    ? "The duration of the event must be more than 15 minutes."
    : undefined;

const checkTimeSequence = (start, end, period) =>
  getDuration(start, end, period) < 0
    ? "The beginning of the event can not be later than its end."
    : undefined;

const checkName = name => (name ? undefined : "Please, enter event name.");

export const validate = values => {
  const start = values.start.date + " " + values.start.time;
  const end = values.end.date + " " + values.end.time;
  return {
    name: checkName(values.name),
    start: {
      date: checkDate(start) || checkTimeSequence(start, end, "hour"),
      time: checkTime(start) || checkTimeSequence(start, end, "minute")
    },
    end: {
      date: checkDate(end),
      time: checkTime(end) || checkDuration(start, end)
    }
  };
};
