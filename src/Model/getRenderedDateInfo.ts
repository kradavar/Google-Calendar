import * as moment from "moment";

export const formatDate = (
  date: string | moment.Moment,
  format: string
): string =>
  moment.isMoment(date) ? date.format(format) : moment(date).format(format);

export const getDuration = (
  start: string,
  end: string,
  type: moment.unitOfTime.Diff
) => moment(end).diff(moment(start), type);
