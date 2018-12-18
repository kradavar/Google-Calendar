import React from "react";

import { FormInputWithLabel } from "./InputWithLabel";

import "../Styles/Form.css";

export const DateTimeSection = ({ label, isAllDayEvent }) => (
  <div className="form-group">
    <label htmlFor="event" className="col-form-label">
      {label}
    </label>
    <div className="date-time-section">
      <FormInputWithLabel
        name="date"
        label="Date: "
        type="date"
        classes="date-input form-group"
      />
      <FormInputWithLabel
        name="time"
        type="time"
        label="Time: "
        classes="time-input form-group"
        disabled={isAllDayEvent}
      />
    </div>
  </div>
);
