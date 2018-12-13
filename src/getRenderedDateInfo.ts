import * as moment from "moment";

export const formatDate = (
  date: string | moment.Moment,
  format: string
): string =>
  moment.isMoment(date) ? date.format(format) : moment(date).format(format);

export const getDuration = (
  start: string | moment.Moment,
  end: string | moment.Moment,
  type: moment.unitOfTime.Diff
) => moment(end).diff(moment(start), type);
