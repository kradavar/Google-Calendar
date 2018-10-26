import moment from "moment";

export const formatDate = (date, format) =>
  moment.isMoment(date) ? date.format(format) : moment(date).format(format);

export const getDuration = (start, end, type) =>
  moment(end).diff(moment(start), type);
