import React from "react";

import { Field, reduxForm } from "redux-form";

export default function InputForm(props) {
  return (
    <div className="form-group">
      <label htmlFor={"event-" + props.type} className="col-form-label">
        {props.name}
      </label>
      <div id={"event-" + props.type}>
        <div className="form-group input-form">
          <label
            htmlFor={"event-" + props.type + "-date"}
            className="col-form-label"
          >
            Date:
          </label>
          <input
            type="date"
            className="form-control"
            id={"event-" + props.type + "-date"}
            defaultValue={props.date}
          />
        </div>
        <div className="form-group">
          <label
            htmlFor={"event-" + props.type + "-time"}
            className="col-form-label"
          >
            Time:
          </label>
          {props.view === "month" ? (
            <input
              type="time"
              className="form-control"
              id={"event-" + props.type + "-time"}
            />
          ) : (
            <input
              type="time"
              className="form-control"
              id={"event-" + props.type + "-time"}
              defaultValue={props.hour}
            />
          )}
        </div>
      </div>
    </div>
  );
}
