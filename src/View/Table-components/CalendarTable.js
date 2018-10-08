import React, { Component } from "react";
import Cell from "./Cell";
import TableHeader from "./TableHeader";

export default class CalendarTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: 7,
      rows: 5
    }
  }

  /*componentWillUpdate() {
    if () { }
    switch (this.props.calendarToRender) {
      case "month":
        this.setState({
          columns: 7,
          rows: 5
        });
        break;
      case "week":
        this.setState({
          columns: 7,
          rows: 1
        });
        break;
      case "day":
        this.setState({
          columns: 1,
          rows: 1
        });
        break;
      default:
        break;
    }
  }
*/

  componentDidUpdate(prevProps) {
    if (this.props.calendarToRender !== prevProps.calendarToRender) {
      switch (this.props.calendarToRender) {
        case "month":
          this.setState({
            columns: 7,
            rows: 5
          });
          break;
        case "week":
          this.setState({
            columns: 7,
            rows: 1
          });
          break;
        case "day":
          this.setState({
            columns: 1,
            rows: 1
          });
          break;
        default:
          break;
      }
    }
  }

  render() {

    let rows = [];
    for (let i = 0; i < this.state.rows; i++) {
      const columns = [];
      let startDate;
      if (this.props.renderedDate.isoWeekday() === 1) {
        startDate = this.props.renderedDate;
      } else {
        startDate = this.props.renderedDate.subtract(
          this.props.renderedDate.isoWeekday() - 1,
          "day"
        );
      }
      for (let j = 0; j < this.state.columns; j++) {
        columns.push(
          <Cell
            dayOfMonth={startDate.date()}
            key={startDate.date()}
            events={[]}
          />
        );
        startDate.add(1, "day");
      }
      rows.push(<tr key={i}>{columns}</tr>);
    }
    return (
      <div>
        <table>
          <TableHeader />
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}
