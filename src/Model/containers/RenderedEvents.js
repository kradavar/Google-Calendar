import { connect } from "react-redux";
import EventList from "../../View/Events/EventList";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../DateFormats";
/*---------functions for getRenderedDateEvents---------------*/

const filterByDate = (eventStart, date) =>
  formatDate(eventStart, DATE_FORMATS.DATE) === date.format(DATE_FORMATS.DATE);

const filterByHour = (eventStart, date, hour) => {
  if (filterByDate(eventStart, date)) {
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return formatDate(eventStart, DATE_FORMATS.HOUR) === hour.toString();
  }
};
/*------------------------------------------------------*/
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
