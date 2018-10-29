import React from "react";
import { Field, reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";

const ShowFormComponent = () => {
  return (
    <form>
      <FormInputWithLabel name="start" label="Start: " type="text" disabled />
      <FormInputWithLabel name="end" label="End: " type="text" disabled />
    </form>
  );
};

const ShowForm = reduxForm({
  form: "showForm"
})(ShowFormComponent);

export default ShowForm;
