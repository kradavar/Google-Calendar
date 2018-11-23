import React from "react";
import { reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import { signUp } from "../actions/users";

import { validate } from "../../validation/sign";
import "../../Styles/Modal.css";

const SignUpFormComponent = ({ reset, handleSubmit, signUp }) => {
  const submit = values => {
    const fullName = values.firstName + " " + values.lastName;
    signUp(values.username, values.password, fullName);
  };
  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInputWithLabel name="firstName" label="First Name: " type="text" />
      <FormInputWithLabel name="lastName" label="Last Name: " type="text" />
      <FormInputWithLabel name="username" label="Username: " type="text" />
      <FormInputWithLabel name="password" label="Password: " type="password" />
      <FormInputWithLabel
        name="correctPassword"
        label="Password one more time: "
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

const signUpForm = connect(
  null,
  { signUp }
)(SignUpFormComponent);

export default reduxForm({
  form: "signUp",
  validate
})(signUpForm);
