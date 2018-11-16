import React from "react";
import { compose } from "redux";
import { reduxForm, formValueSelector } from "redux-form";
import { FormInputWithLabel } from "./FormInputWithLabel";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import "../../Styles/Modal.css";

const SignUpFormComponent = ({ reset, id, handleSubmit }) => {
  const submit = values => {
    // POST
    // username must be unic!
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

const mapStateToProps = state => {
  const selector = formValueSelector("signUpForm");
  return {
    password: selector(state, "password"),
    correctPassword: selector(state, "correctPassword")
  };
};

export default compose(
  reduxForm({
    form: "signUpForm"
  }),
  connect(mapStateToProps)
)(SignUpFormComponent);
