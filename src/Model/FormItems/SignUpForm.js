import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import { signUp } from "../actions/users";
import { SIGN } from "../../constants/SignTypes";
import { validate } from "../../validation/sign";
import "../../Styles/Modal.css";

const SignUpFormComponent = ({ reset, handleSubmit, signUp, handleClose }) => {
  const submit = values => {
    const fullName = values.firstName + " " + values.lastName;
    return signUp(values.username, values.password, fullName)
      .then(() => handleClose())
      .catch(error => {
        throw new SubmissionError({
          username: "User with this username is already exists.",
          _error: "Sign up failed"
        });
      });
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
          value="Cancel"
        />

        <Button classes="btn-outline-success" value={SIGN.UP} type="submit" />
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
