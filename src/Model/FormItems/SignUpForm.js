import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import { signUp } from "../actions/users";
import { SIGN } from "../../constants/SignTypes";
import { validate } from "../../validation/sign";

// Modal.css everywhere ...
import "../../Styles/Modal.css";

const SignUpFormComponent = ({ reset, handleSubmit, signUp, handleClose }) => {
  const submit = values =>
    signUp(values.username, values.password, values.fullName)
      .then(() => handleClose())
      .catch(error => {
        throw new SubmissionError({
          username: "User with this username is already exists.",
          _error: "Sign up failed"
        });
      });

  return (
    <form onSubmit={handleSubmit(submit)}>
      <FormInputWithLabel
        classes="signup-form"
        name="fullName"
        label="Please, enter your name: "
        type="text"
      />
      <FormInputWithLabel
        classes="signup-form"
        name="username"
        label="Create a unique username: "
        type="text"
      />
      <FormInputWithLabel
        classes="signup-form"
        name="password"
        label="Create your secret password: "
        type="password"
      />
      <FormInputWithLabel
        classes="signup-form"
        name="correctPassword"
        label="Confirm your password: "
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
