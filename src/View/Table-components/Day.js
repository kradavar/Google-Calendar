import React from "react";
import CellHeader from "./Cells/CellHeader.js";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import { connect } from "react-redux";
import { addEvent } from "../../Model/actions/actions.js";
import DayWeekHeader from "./DayWeekHeader.js";

function Day(props, { dispatch }) {
  let day = <td />;

  if (props.view === "month") {
    day = (
      <div
        className="day cell"
        onClick={e => {
          e.preventDefault();
          const name = prompt("Name: ");
          const end = props.renderedDate.clone().add(1, "hour");
          dispatch(addEvent(name, props.renderedDate, end));
        }}
      >
        <CellHeader headerInfo={props.renderedDate.date()} />
        <RenderedEvents date={props.renderedDate} view={props.view} />
      </div>
    );
  } else {
    const hours = [];

    for (let hour = 0; hour < 24; hour++) {
      hours.push(
        <div className="hour">
          <CellHeader headerInfo={hour} />
          <RenderedEvents
            date={props.renderedDate}
            view={props.view}
            hour={hour}
          />
        </div>
      );
    }
    day = (
      <div className="flex-container">
        <DayWeekHeader
          renderedDate={props.renderedDate.date()}
          day={props.renderedDate.format("ddd")}
        />
        <div className="day-flex">{hours}</div>
      </div>
    );
  }

  return day;
}

export default connect()(Day);
