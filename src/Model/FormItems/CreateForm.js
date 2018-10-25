import React from "react";
import { compose } from "redux";
import { Field, reduxForm, FormSection, formValueSelector } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import Button from "../../View/Switchers/Button";
import "../../Styles/Modal.css";
import { addEvent, editEvent } from "../actions/actions";

//
// <FormInputWithLabel
//     name="name"
//     label
//     type
//     placeholder
// />

// Add submit
const CreateFormComponent = ({
  reset,
  isAllDayEvent,
  id,
  addEvent,
  editEvent,
  handleSubmit
}) => {
  const submit = values => {
    const name = values.name;

    let start = values.start.date + " ";
    let end = values.end.date + " ";

    if (values.eventType) {
      start += "00:00";
      end += "24:00";
    } else {
      start += values.start.time;
      end += values.end.time;
    }

    id === undefined
      ? addEvent(name, start, end)
      : editEvent(id, name, start, end);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
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

// compose!
const mapStateToProps = state => {
  const selector = formValueSelector("createEvent");
  return {
    isAllDayEvent: selector(state, "eventType")
  };
};
const mapDispatchToProps = (dispatch, props, state, values) => {
  return {
    editEvent: () => {
      dispatch(editEvent(props.id, state.name, state.start, state.end));
    },
    addEvent: () => {
      debugger;
      dispatch(addEvent(state.name, state.start, state.end));
    }
  };
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),

  reduxForm({ form: "createEvent" })
)(CreateFormComponent);
