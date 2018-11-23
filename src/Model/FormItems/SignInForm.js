import React from "react";
import { reduxForm } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { Button } from "../../View/Switchers/Button";
import { signIn } from "../actions/users";
import { connect } from "react-redux";

const SignInFormComponent = ({ handleSubmit, reset, signIn }) => {
  const submit = values => {
    const username = values.username;
    const pass = values.password;
    signIn(username, pass);
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
