import React from "react";
import { compose } from "redux";
import { reduxForm, FormSection, formValueSelector } from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import "../../Styles/Modal.css";
import { addEvent, editEvent } from "../actions/events";
import { validate } from "../../validation/index";

const CreateFormComponent = ({
  reset,
  isAllDayEvent,
  id,
  addEvent,
  editEvent,
  handleSubmit,
  handleClose
}) => {
  const submit = values => {
    const name = values.name;

    // ?????
    let start = values.start.date + " ";
    let end = values.end.date + " ";

    // Do it in onEventTypeChange
    if (values.eventType) {
      start += "00:00";
      end += "24:00";
    } else {
      start += values.start.time;
      end += values.end.time;
    }
    id ? editEvent(id, name, start, end, 1) : addEvent(name, start, end, 1);
  };
  // Move a case !isSigned to a separate component and don't use it here
  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submit)}>
        <FormInputWithLabel
          name="name"
          label="Name: "
          placeholder="Event Name"
          type="text"
        />
        <FormInputWithLabel
          name="eventType"
          label="All Day"
          value={false}
          type="checkbox"
          classes="checkbox-form"
        />

        <FormSection name="start">
          <DateTimeSection label="Start: " isAllDayEvent={isAllDayEvent} />
        </FormSection>
        <FormSection name="end">
          <DateTimeSection label="End: " isAllDayEvent={isAllDayEvent} />
        </FormSection>

        <div className="modal-footer">
          <Button
            classes="btn-outline-secondary"
            data-dismiss="modal"
            onClick={reset}
            value="Clear"
          />

          <Button classes="btn-outline-success" value="Create" type="submit" />
        </div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const eventType = formValueSelector("createEvent");
  return {
    isAllDayEvent: eventType(state, "eventType")
  };
};

export default compose(
  reduxForm({
    form: "createEvent",
    validate
  }),
  connect(
    mapStateToProps,
    { editEvent, addEvent }
  )
)(CreateFormComponent);
