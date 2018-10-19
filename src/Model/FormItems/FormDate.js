import React from "react";
import { Field, reduxForm, FormSection } from "redux-form";
import LabeledInput from "./LabeledInput";
import DateTimeSection from "./DateTimeSection";

let FormDate = ({
  handleSubmit,
  handleCheckBoxChange,
  handleClose,
  date,
  hour,
  view
}) => {
  const getRenderedHour = hour => {
    if (hour === undefined) {
      return "00:00";
    } else {
      if (hour < 10) {
        hour = `0${hour}`;
      }
      return hour + ":00";
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LabeledInput
        labelText="Name: "
        id="event-name"
        inputType="text"
        content="name"
        name="name"
      />
      <div className="form-group">
        <label htmlFor="all-day" className="col-form-label">
          All day
        </label>
        <Field
          type="checkbox"
          component="input"
          id="all-day"
          name="event-type"
          value="all-day"
          onChange={handleCheckBoxChange}
        />
      </div>
      <FormSection name="start">
        <DateTimeSection
          label="Start: "
          date={date}
          hour={getRenderedHour(hour)}
          view={view}
        />
      </FormSection>

      <FormSection name="end">
        <DateTimeSection
          label="End: "
          hour={getRenderedHour(hour + 1)}
          date={date}
          view={view}
        />
      </FormSection>

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={handleClose}
        >
          Close
        </button>
        <button type="submit" className="btn btn-primary">
          Create Event
        </button>
      </div>
    </form>
  );
};

FormDate = reduxForm({
  form: "createEvent"
})(FormDate);

export default FormDate;
