import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";

// let ?
let ShowForm = () => {
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

ShowForm = reduxForm({
  form: "showForm"
})(ShowForm);

export default ShowForm;
