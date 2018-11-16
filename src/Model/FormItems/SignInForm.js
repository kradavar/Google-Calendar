import React from "react";
import { reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { Button } from "../../View/Switchers/Button";

const SignInFormComponent = ({ handleSubmit, reset }) => {
  const submit = values => {
    //check if this user is in the DB
    //and correspondence on his password
    // if everything is correct => send his id
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInputWithLabel name="username" label="Your username: " type="text" />
      <FormInputWithLabel
        name="password"
        label="Your password: "
        type="password"
      />
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
  );
};

const SignInForm = reduxForm({
  form: "showForm"
})(SignInFormComponent);

export default SignInForm;
