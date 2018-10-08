import { connect } from 'react-redux';
import CalendarTable from "../../View/Table-components/CalendarTable";
import { tableActions } from '../actions/tableActions';

const getViewType = (tableSize, viewType) => {
  switch (viewType) {
    case 'day':
      tableSize = {
        rows: 1,
        columns: 1
      };
      break;
    case 'week':
      tableSize = {
        rows: 1,
        columns: 7
      };
      break;
    case 'month':
      tableSize = {
        rows: 5,
        colums: 7
      }
      break;
    default:
      tableSize = {
        rows: 5,
        colums: 7
      }
      break;
  }
  return tableSize;
}

const mapStateToProps = (state) => {
  return {
    tableSize: getViewType(state.tableSize, state.viewType)
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onViewTypeButtonClick: (view) => {
      dispatch(tableActions(view));
    }
  }
}

const RenderedViewType = connect(
  mapStateToProps, mapDispatchToProps
)(CalendarTable);

export default RenderedViewType;
