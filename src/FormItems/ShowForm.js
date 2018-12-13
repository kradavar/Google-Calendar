import React from "react";
import { reduxForm } from "redux-form";
import { FormInputWithLabel } from "./InputWithLabel";

// Can we do it more flex in order to use for example in CreateForm like a section?
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
