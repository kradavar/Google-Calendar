import React from "react";
import { connect } from "react-redux";
import { Button } from "../../View/Switchers/Button";
import { signOut } from "../actions/users";

const SignOutComponent = ({ signOut, handleClose }) => {
  const handleSignOut = () => {
    return signOut()
      .then(() => handleClose())
      .catch(error => {
        console.log(error);
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
        />

        <Button
          classes="btn-outline-success"
          value="Yes"
          onClick={handleSignOut}
        />
      </div>
    </div>
  );
};

export default connect(
  null,
  { signOut }
)(SignOutComponent);
