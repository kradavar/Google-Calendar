import React from "react";
import { reduxForm, SubmissionError } from "redux-form";

import { FormInputWithLabel } from "./FormInputWithLabel";
import { Button } from "../../View/Switchers/Button";
import { signIn } from "../actions/users";
import { connect } from "react-redux";
import { SIGN } from "../../constants/constants";

const SignInFormComponent = ({ handleSubmit, reset, signIn, handleClose }) => {
  const submit = values =>
    signIn(values)
      .then(() => {
        // add notification like toast.js or something?
        //  YES :)
        console.log("MODAL IS CLOSING,BYE");
        return handleClose();
      })
      .catch(error => {
        throw new SubmissionError({
          [error.field]: error.message,
          _error: "Sign in failed"
        });
      });

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

        <Button classes="btn-outline-success" value={SIGN.IN} type="submit" />
      </div>
    </form>
  );
};

const sign = connect(
  null,
  { signIn }
)(SignInFormComponent);

export default reduxForm({
  form: "signIn"
})(sign);
