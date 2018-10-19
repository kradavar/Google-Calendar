import React from "react";
import { Field, reduxForm, FormSection } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { NameInput } from "./NameInput";

let CreateForm = ({ handleSubmit, handleCheckBoxChange, handleClose }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={NameInput}
        props={{ value: "event-name" }}
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
        <DateTimeSection label="Start: " />
      </FormSection>
      <FormSection name="end">
        <DateTimeSection label="End: " />
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
        <button type="submit" className="btn btn-primary" onClick={handleClose}>
          Create Event
        </button>
      </div>
    </form>
  );
};

CreateForm = reduxForm({
  form: "createEvent"
})(CreateForm);

export default CreateForm;
