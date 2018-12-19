import { createSelector } from "reselect";
import * as moment from "moment";
import { connect } from "react-redux";

import { EventList } from "./EventList";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../constants/constants";

const eventsSelector = (state: any) => {
  const events = state.events.byIds;
  const keysArray = Object.keys(events);
  keysArray.forEach(key =>
    events[key] === undefined ? delete events[key] : ""
  );
  return Object.keys(events).map(key => events[key]);
};

const propsSelector = (state: any, props: any) => props;

const getRenderedDateEvents = createSelector(
  [eventsSelector, propsSelector],
  (events, props) =>
    Number.isInteger(props.hour)
      ? events.filter(event =>
          filterByHour(event.start, props.date, props.hour)
        )
      : events.filter(event => filterByDate(event.start, props.date))
);

const filterByDate = (eventStart: string, date: string | moment.Moment) =>
  formatDate(eventStart, DATE_FORMATS.DATE) ===
  formatDate(date, DATE_FORMATS.DATE);

const filterByHour = (
  eventStart: string,
  date: moment.Moment,
  hour: number
) => {
  const dateWithTime = date.clone().set({ hour });
  return (
    formatDate(eventStart, DATE_FORMATS.DATE_WITH_HOUR) ===
    formatDate(dateWithTime, DATE_FORMATS.DATE_WITH_HOUR)
  );
};

const sortEvents = (events: any) =>
  events.sort((a: any, b: any) => {
    if (a.start > b.start) {
      return 1;
    }
    if (a.start < b.start) {
      return -1;
    }
    return 0;
  });

const mapStateToProps = (state: any, props: any) => {
  return {
    events: sortEvents(getRenderedDateEvents(state, props))
  };
};

export default connect(mapStateToProps)(EventList);
