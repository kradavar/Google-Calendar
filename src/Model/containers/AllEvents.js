import { connect } from "react-redux";
import events from "../actions/actions";
import Event from "../../View/Events/Event";
import Cell from "../../View/Table-components/CalendarTable";
import CalendarTable from "../../View/Table-components/CalendarTable";

const getRenderedDateEvents = (events, date) => {
  return events.filter(event => event.start === date);
};

const mapStateToProps = state => {
  return {
    events: getRenderedDateEvents(state.events, state.renderedDate)
  };
};
const mapDispatchToProps = dispatch => {
  onClick: (date, name) => dispatch(addEvent(date, name));
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CalendarTable);
