import React from "react";
import { Field, reduxForm, FormSection, formValueSelector } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import Button from "../../View/Switchers/Button";
import "../../Styles/Modal.css";

let CreateForm = ({ handleSubmit, reset, isAllDayEvent }) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        component={FormInputWithLabel}
        props={{
          label: "Name: ",
          placeholder: "Event Name",
          type: "text"
        }}
      />
      <Field
        name="eventType"
        component={FormInputWithLabel}
        props={{
          type: "checkbox",
          label: "All day",
          value: false,
          className: "eventType"
        }}
      />

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
