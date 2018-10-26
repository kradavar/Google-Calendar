import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";

const ShowFormComponent = () => {
  return (
    <form>
      <Field
        name="start"
        component={FormInputWithLabel}
        label="Start: "
        disabled
      />
      <Field name="end" component={FormInputWithLabel} label="End: " disabled />
    </form>
  );
};

const ShowForm = reduxForm({
  form: "showForm"
})(ShowFormComponent);

export default ShowForm;
