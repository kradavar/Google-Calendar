import React from "react";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import { signOut } from "../actions/users";

const SignOutComponent = ({
  signOut,
  handleClose,
  showSuccessToast,
  showErrorToast,
  loading
}) => {
  const handleSignOut = () => {
    return signOut()
      .then(() => {
        showSuccessToast("See you next time!");
        return handleClose();
      })
      .catch(error => {
        showErrorToast();
      });
  };
  return (
    <div>
      <p>Are you sure you want to sign out? </p>
      <div className="modal-footer">
        <Button
          classes="btn-outline-secondary"
          data-dismiss="modal"
          onClick={handleClose}
          value="No"
          disabled={loading}
        />

        <Button
          classes="btn-outline-success"
          value="Yes"
          loading={loading}
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.user.meta.loading
  };
};

export default connect(
  mapStateToProps,
  { signOut }
)(SignOutComponent);
