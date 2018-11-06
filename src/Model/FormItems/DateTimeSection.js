import React from "react";

import { FormInputWithLabel } from "./FormInputWithLabel";

import "../../Styles/Modal.css";

export const DateTimeSection = ({ label, isAllDayEvent }) => {
  return (
    <div className="form-group">
      <label htmlFor="event" className="col-form-label">
        {label}
      </label>
      <div id="event">
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
};
