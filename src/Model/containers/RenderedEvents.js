import { connect } from "react-redux";
import EventList from "../../View/Events/EventList";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../DateFormats";

// TODO use reselect !
const filterByDate = (eventStart, date) =>
  formatDate(eventStart, DATE_FORMATS.DATE) ===
  formatDate(date, DATE_FORMATS.DATE);

const filterByHour = (eventStart, date, hour) => {
  const dateWithTime = date.clone().set({ hour: hour });
  return (
    formatDate(eventStart, DATE_FORMATS.DATE_WITH_HOUR) ===
    formatDate(dateWithTime, DATE_FORMATS.DATE_WITH_HOUR)
  );
};
const getRenderedDateEvents = (events, date, view, hour) => {
  if (view === "month") {
    return events.filter(event => filterByDate(event.start, date));
  } else {
    return events.filter(event => filterByHour(event.start, date, hour));
  }
};

const mapStateToProps = (state, props) => {
  return {
    events: getRenderedDateEvents(
      state.events,
      props.date,
      props.view,
      props.hour
    )
  };
};

export default connect(mapStateToProps)(EventList);
