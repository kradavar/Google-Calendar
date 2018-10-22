import React from "react";
import { Field, reduxForm, FormSection, formValueSelector } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { NameInput } from "./NameInput";
import { connect } from "net";

let CreateForm = ({
  handleSubmit,
  reset,
  pristine,
  submitting,
  isAllDayEvent
}) => {
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
          name="eventType"
          value="all-day"
        />
      </div>
      <FormSection name="start">
        <DateTimeSection label="Start: " isAllDayEvent={isAllDayEvent} />
      </FormSection>
      <FormSection name="end">
        <DateTimeSection label="End: " />
      </FormSection>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={reset}
        >
          Close
        </button>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={pristine || submitting}
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

CreateForm = reduxForm({
  form: "createEvent"
})(CreateForm);

const selector = formValueSelector("createEvent");
console.log(selector);
CreateForm = connect(state => {
  debugger;
  const isAllDayEvent = selector(state, "eventType");
  return { isAllDayEvent };
})(CreateForm);

export default CreateForm;
