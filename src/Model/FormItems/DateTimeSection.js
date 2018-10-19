import React, { Component } from "react";

import { Field, reduxForm, FormSection } from "redux-form";
import { DateInput } from "./DateInput";
import { TimeInput } from "./TimeInput";
export class DateTimeSection extends Component {
  render() {
    return (
      <div className="form-group">
        <label htmlFor="event" className="col-form-label">
          {this.props.label}
        </label>
        <div id="event">
          <Field name="date" component={DateInput} />
          <Field name="time" component={TimeInput} />
        </div>
      </div>
    );
  }
}
