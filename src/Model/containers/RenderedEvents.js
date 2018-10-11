import { connect } from "react-redux";
import events, { addEvent } from "../actions/actions";
import EventList from "../../View/Events/EventList";

const getRenderedDateEvents = (events, date) => {
  return events.filter(event => event.start === date);
};

const mapStateToProps = state => {
  return {
    events: getRenderedDateEvents(state.events, state.renderedDate)
  };
};
/*
const mapDispatchToProps = dispatch => {
  onClick: start, name => dispatch(addEvent(start, name));
};*/
export default connect(mapStateToProps)(EventList);
