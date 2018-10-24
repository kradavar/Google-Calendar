import React from "react";
import { Field, reduxForm, FormSection, formValueSelector } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import Button from "../../View/Switchers/Button";

let CreateForm = ({ handleSubmit, reset, isAllDayEvent }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={FormInputWithLabel}
        props={{
          value: "event-name",
          label: "Name: ",
          placeholder: "Event Name"
        }}
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
          value="false"
        />
      </div>

      <FormSection name="start">
        <DateTimeSection label="Start: " isAllDayEvent={isAllDayEvent} />
      </FormSection>
      <FormSection name="end">
        <DateTimeSection label="End: " isAllDayEvent={isAllDayEvent} />
      </FormSection>
      <div className="modal-footer">
        <Button
          classes="btn btn-outline-secondary"
          data-dismiss="modal"
          onClick={reset}
          value="Clear"
        />
        <Button classes="btn btn-outline-success" value="Create" />
      </div>
    </form>
  );
};

CreateForm = reduxForm({
  form: "createEvent"
})(CreateForm);

const selector = formValueSelector("createEvent");
CreateForm = connect(state => {
  const isAllDayEvent = selector(state, "eventType");
  return { isAllDayEvent };
})(CreateForm);

export default CreateForm;
