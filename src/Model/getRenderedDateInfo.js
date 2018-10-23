import moment from "moment";

export const formatDateWithTime = date =>
  moment(date).format("YYYY-MM-DD HH:mm");
export const formatTime = date => moment(date).format("HH:mm");
export const formatDate = date => moment(date).format("YYYY-MM-DD");

export const getValueOfMoment = (renderedDate, type) => {
  switch (type) {
    case "time":
      return formatTime(renderedDate);
    case "date":
      return formatDate(renderedDate);
    case "min":
      return moment(renderedDate).minute();
    case "day-start":
      return moment().startOf("day");
    default:
      return formatDateWithTime(renderedDate);
  }
};

export const getDuration = (start, end, type) =>
  moment(end).diff(moment(start), type);
