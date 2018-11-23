import React from "react";
import { reduxForm, SubmissionError } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { Button } from "../../View/Switchers/Button";
import { signIn } from "../actions/users";
import { connect } from "react-redux";

const SignInFormComponent = ({ handleSubmit, reset, signIn }) => {
  const submit = values => {
    signIn(values.username, values.password);
    console.log(signIn);
    console.log("-----------");
    console.log(signIn(values.username, values.password));
    throw new SubmissionError({
      password: "Invalid username or password",
      _error: "Sign in failed"
    });
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
const sign = connect(
  null,
  { signIn }
)(SignInFormComponent);

export default reduxForm({
  form: "signIn"
})(sign);
