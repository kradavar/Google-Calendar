import * as React from "react";
import { connect } from "react-redux";
import { Button } from "../Button";
import { signOut } from "../../redux/actions/users";

const SignOutComponent: React.SFC<{
  signOut: () => Promise<{}>;
  handleClose: () => void;
  showSuccessToast: (message?: string) => void;
  showErrorToast: () => void;
}> = ({ signOut, handleClose, showSuccessToast, showErrorToast }) => {
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
  //@ts-ignore
)(SignOutComponent);
