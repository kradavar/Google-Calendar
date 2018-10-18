import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
export default function DateTime({ name, date, type, hour }) {
  return (
    <div className="form-group">
      <label htmlFor="event" className="col-form-label">
        {name}
      </label>
      <div id="event">
        <div className="form-group input-form">
          <label htmlFor={"event-date"} className="col-form-label">
            Date:
          </label>
          <Field
            component="input"
            type="date"
            className="form-control"
            id={"event-date"}
            defaultValue={date}
          />
        </div>
        <div className="form-group">
          <label htmlFor={"event-time"} className="col-form-label">
            Time:
          </label>
          {props.view === "month" ? (
            <Field
              component="input"
              type="time"
              className="form-control"
              id={"event-time"}
            />
          ) : (
            <Field
              component="input"
              type="time"
              className="form-control"
              id={"event-time"}
              defaultValue={props.hour}
            />
          )}
        </div>
      </div>
    </div>
  );
}
