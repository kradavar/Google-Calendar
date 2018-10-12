import { connect } from "react-redux";
import events, { addEvent } from "../actions/actions";
import EventList from "../../View/Events/EventList";

const formatDate = date => date.format("YYYY-MM-DD HH:mm");

const getDate = date => date.split(" ")[0];

const getHour = date => date.split(" ")[1].split(":")[0];

const filterByDate = (eventStart, date) =>
  getDate(eventStart) === getDate(formatDate(date));

const filterByHour = (eventStart, date, hour) => {
  if (filterByDate(eventStart, date)) {
    if (hour < 10) {
      hour = `0${hour}`;
    }
    return getHour(eventStart) === getHour(formatDate(date));
  }
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
/*
const mapDispatchToProps = dispatch => {
  onClick: start, name => dispatch(addEvent(start, name));
};*/
export default connect(mapStateToProps)(EventList);
