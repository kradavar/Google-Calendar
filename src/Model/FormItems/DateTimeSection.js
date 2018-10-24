import React, { Component } from "react";

import { Field } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";

import "../../Styles/Modal.css";
export class DateTimeSection extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="event" className="col-form-label">
          {this.props.label}
        </label>
        <div id="event">
          <Field
            name="date"
            component={FormInputWithLabel}
            props={{
              type: "date",
              label: "Date: "
            }}
          />
          <Field
            name="time"
            component={FormInputWithLabel}
            props={{
              type: "time",
              label: "Time: ",
              disabled: this.props.isAllDayEvent
            }}
          />
        </div>
      </div>
    );
  }
}
