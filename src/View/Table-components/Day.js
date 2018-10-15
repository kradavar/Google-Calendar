import React from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import { connect } from "react-redux";
import { addEvent } from "../../Model/actions/actions.js";

function Day(props) {
  let day = <td />;

  if (props.view === "month") {
    day = (
      <td
        className="cell day-cell"
        onClick={e => {
          e.preventDefault();
          const name = prompt("Name: ");
          const end = props.renderedDate.clone().add(1, "hour");
          const start = props.renderedDate.clone();

          props.dispatch(addEvent(name, start, end));
        }}
      >
        <CellHeader headerInfo={props.renderedDate.date()} />
        <RenderedEvents date={props.renderedDate} view={props.view} />
      </td>
    );
  } else {
    const hours = [];

    for (let hour = 0; hour < 24; hour++) {
      //debugger;
      hours.push(
        <tr>
          <td className="hour-cell">
            <CellHeader headerInfo={hour} />
            <RenderedEvents
              date={props.renderedDate}
              view={props.view}
              hour={hour}
            />
          </td>
        </tr>
      );
    }
    day = (
      <td className="cell-with-hour">
        <table className="hour-table">
          <tbody>{hours}</tbody>
        </table>
      </td>
    );
  }

  return day;
}

export default connect()(Day);
