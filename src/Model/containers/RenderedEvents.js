import { connect } from "react-redux";
import EventList from "../../View/Events/EventList";
import { formatDate, getDuration } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats";
import { createSelector } from "reselect";
import moment from "moment";

const eventsSelector = state => state.events;
const propsSelector = (state, props) => props;

const getRenderedDateEvents = createSelector(
  [eventsSelector, propsSelector],
  (events, props) =>
    Number.isInteger(props.hour)
      ? events.filter(event =>
          filterByHour(event.start, props.date, props.hour)
        )
      : events.filter(event => filterByDate(event.start, props.date))
);

const filterByDate = (eventStart, date) =>
  formatDate(eventStart, DATE_FORMATS.DATE) ===
  formatDate(date, DATE_FORMATS.DATE);

const filterByHour = (eventStart, date, hour) => {
  const dateWithTime = date.clone().set({ hour });
  return (
    formatDate(eventStart, DATE_FORMATS.DATE_WITH_HOUR) ===
    formatDate(dateWithTime, DATE_FORMATS.DATE_WITH_HOUR)
  );
};

const sortEvents = events =>
  events.sort((a, b) => {
    if (a.start > b.start) {
      return 1;
    }
    if (a.start < b.start) {
      return -1;
    }
    return 0;
  });

const mapStateToProps = (state, props) => {
  return {
    events: sortEvents(getRenderedDateEvents(state, props))
  };
};

export default connect(mapStateToProps)(EventList);
