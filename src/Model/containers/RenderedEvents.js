import { connect } from "react-redux";
import EventList from "../../View/Events/EventList";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../DateFormats";
import { createSelector } from "reselect";

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

const mapStateToProps = (state, props) => {
  return {
    events: getRenderedDateEvents(state, props)
  };
};

export default connect(mapStateToProps)(EventList);
