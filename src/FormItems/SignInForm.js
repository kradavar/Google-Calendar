import React from "react";
import { reduxForm, SubmissionError } from "redux-form";

import { FormInputWithLabel } from "./InputWithLabel";
import { Button } from "../components/buttons/Button/Button";
import { signIn } from "../actions/users";
import { connect } from "react-redux";
import { SIGN } from "../constants/constants";

const SignInFormComponent = ({
  handleSubmit,
  reset,
  signIn,
  handleClose,
  showSuccessToast,
  loading
}) => {
  const submit = values =>
    signIn(values)
      .then(() => {
        showSuccessToast();
        return handleClose();
      })
      .catch(error => {
        if (error.field) {
          throw new SubmissionError({
            [error.field]: error.message,
            _error: "Sign in failed"
          });
        } else {
          throw new SubmissionError({
            password: "Server is not aviable",
            _error: "Sign in failed."
          });
        }
      });

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(submit)}>
        <FormInputWithLabel
          name="username"
          label="Your username: "
          type="text"
        />
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
            disabled={loading}
          />
          <Button
            classes="btn-outline-success"
            value={SIGN.IN}
            loading={loading}
            type="submit"
          />
        </div>
      </form>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.user.meta.loading
  };
};

const sign = connect(
  mapStateToProps,
  { signIn }
)(SignInFormComponent);

export default reduxForm({
  form: "signIn"
})(sign);
