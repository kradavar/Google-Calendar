import { connect } from "react-redux";
import { events } from "../actions/actions";
import Event from "../../View/Event";
import Cell from "../../View/Table-components/Cells/Cell";

const getRenderedDateEvents = (events, date) => {
  return events.filter(event => event.start === date);
};

const mapStateToProps = state => {
  return {
    events: getRenderedDateEvents(state.events, state.renderedDate)
  };
};
export default connect(mapStateToProps)(Cell);
