import React from "react";
import { compose } from "redux";
import {
  reduxForm,
  FormSection,
  formValueSelector,
  SubmissionError
} from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { DateTimeSection } from "./DateTimeSection";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import "../../Styles/Form.css";
import { addEvent, editEvent } from "../actions/events";
import { validate } from "../../validation/index";
import { REQUEST_TYPES } from "src/constants/constants";

const CreateFormComponent = ({
  reset,
  isAllDayEvent,
  id,
  addEvent,
  editEvent,
  handleSubmit,
  handleClose,
  loading,
  pressedButton
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
            // add success toast
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
            return handleClose();
          })
          .catch(err => {
            throw new SubmissionError({
              name: "Sorry, something went wrong",
              _error: "Event creation was failed"
            });
          });
  };

  const getButtonValue = value =>
    value === pressedButton && loading ? (
      <FontAwesomeIcon icon={faSync} />
    ) : (
      value
    );

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
          {pressedButton === REQUEST_TYPES.ADD ? (
            <Button
              classes="btn-outline-success"
              value={getButtonValue(REQUEST_TYPES.ADD)}
              type="submit"
            />
          ) : (
            <Button
              classes="btn-outline-success"
              value={getButtonValue(REQUEST_TYPES.EDIT)}
              type="submit"
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
    loading: loadingState.isLoading,
    pressedButton: loadingState.actionType
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
