import React from "react";
import { Field, reduxForm } from "redux-form";

let ContactForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="event-name" className="col-form-label">
          Name:
        </label>
        <Field
          component="input"
          type="text"
          className="form-control"
          id="event-name"
          placeholder="Event Name"
        />
      </div>
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

      <InputForm
        type="start"
        date={props.renderedDate.clone().format("YYYY-MM-DD")}
        view={props.view}
        hour={getRenderedHour(+props.target)}
        name={"Start: "}
      />
      <InputForm
        type="end"
        date={props.renderedDate.clone().format("YYYY-MM-DD")}
        view={props.view}
        hour={getRenderedHour(+props.target + 1)}
        name={"End: "}
      />

      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-dismiss="modal"
          onClick={props.handleClose}
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={createNewEvent}
        >
          Create Event
        </button>
      </div>
    </form>
  );
};

ContactForm = reduxForm({
  // a unique name for the form
  form: "contact"
})(ContactForm);

export default ContactForm;
