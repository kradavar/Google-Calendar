import React from "react";
import { reduxForm } from "redux-form";

import { FormInputWithLabel } from "./InputWithLabel";
import { Button } from "../components/Button";
import { signIn } from "../redux/actions/users";
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
        throw error;
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
