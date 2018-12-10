import React from "react";
import { compose } from "redux";
import {
  reduxForm,
  FormSection,
  formValueSelector,
  SubmissionError
} from "redux-form";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import "../../Styles/Form.css";
import { addEvent, editEvent } from "../actions/events";
import { validate } from "../../validation/index";

const CreateFormComponent = ({
  pristine,
  reset,
  submitting,
  isAllDayEvent,
  id,
  addEvent,
  editEvent,
  handleSubmit,
  handleClose,
  showSuccessToast,
  loading
}) => {
  const submit = values => {
    const dates = onEventTypeChange(values);
    id
      ? editEvent({
          id,
          event_name: values.name,
          start: dates.start,
          end: dates.end
        })
          .then(() => {
            showSuccessToast("Your event was successfully changed");
            return handleClose();
          })
          .catch(err => {
            throw new SubmissionError({
              name: "Sorry, something went wrong",
              _error: "Event edition was failed"
            });
          })
      : addEvent({
          event_name: values.name,
          start: dates.start,
          end: dates.end
        })
          .then(() => {
            debugger;
            showSuccessToast("Your event was successfully created");
            return handleClose();
          })
          .catch(err => {
            throw new SubmissionError({
              name: "Sorry, something went wrong",
              _error: "Event creation was failed"
            });
          });
  };

  const onEventTypeChange = values => {
    if (values.eventType) {
      return {
        start: values.start.date.concat(" 00:00"),
        end: values.end.date.concat(" 24:00")
      };
    } else
      return {
        start: values.start.date.concat(" ", values.start.time),
        end: values.end.date.concat(" ", values.end.time)
      };
  };
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
          {id ? (
            <Button
              classes="btn-outline-success"
              value="Edit event"
              type="submit"
              disabled={loading}
            />
          ) : (
            <Button
              classes="btn-outline-success"
              value="Create event"
              type="submit"
              disabled={loading}
            />
          )}
        </div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  const eventType = formValueSelector("createEvent");
  const loadingState = state => state.meta;
  return {
    isAllDayEvent: eventType(state, "eventType"),
    loading: loadingState.isLoading
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
