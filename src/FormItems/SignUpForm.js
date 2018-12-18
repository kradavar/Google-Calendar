import React from "react";
import { reduxForm } from "redux-form";
import { FormInputWithLabel } from "./InputWithLabel";
import { connect } from "react-redux";
import { Button } from "../components/buttons/Button/Button";
import { signUp } from "../redux/actions/users";
import { SIGN } from "../constants/constants";
import { validate } from "../validation/sign";

import "../Styles/Form.css";

const SignUpFormComponent = ({
  reset,
  handleSubmit,
  signUp,
  handleClose,
  showSuccessToast,
  loading
}) => {
  const submit = values =>
    signUp(values)
      .then(() => {
        showSuccessToast();
        return handleClose();
      })
      .catch(error => {
        throw error;
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
          disabled={loading}
        />

        <Button
          classes="btn-outline-success"
          value={SIGN.UP}
          loading={loading}
          type="submit"
        />
      </div>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.user.meta.loading
  };
};

const signUpForm = connect(
  mapStateToProps,
  { signUp }
)(SignUpFormComponent);

export default reduxForm({
  form: "signUp",
  validate
})(signUpForm);
