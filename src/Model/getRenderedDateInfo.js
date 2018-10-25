import moment from "moment";

// isMoment(date) ? .. : ...
export const formatDate = (date, format) => moment(date).format(format);

export const getDuration = (start, end, type) =>
  moment(end).diff(moment(start), type);
