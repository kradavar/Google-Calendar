import moment from "moment";

export const formatDate = (date, format) => moment(date).format(format);

export const createMoment = dateStr => moment(dateStr);

export const getDuration = (start, end, type) =>
  moment(end).diff(moment(start), type);
