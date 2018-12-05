import React from "react";
import { Modal } from "./ModalIems/Modal";
import SignInForm from "../Model/FormItems/SignInForm";
import SignUpForm from "../Model/FormItems/SignUpForm";
import SignOutForm from "../Model/FormItems/SignOut";
import { SIGN } from "../constants/constants";

export const SignModal = ({
  handleClose,
  type,
  showSuccessToast,
  showErrorToast
}) => (
  <Modal header={type} handleClose={handleClose}>
    {type === SIGN.IN ? (
      <SignInForm
        showSuccessToast={showSuccessToast}
        showErrorToast={showErrorToast}
      />
    ) : (
      <React.Fragment>
        {type === SIGN.UP ? (
          <SignUpForm
            handleClose={handleClose}
            showSuccessToast={showSuccessToast}
            showErrorToast={showErrorToast}
          />
        ) : (
          <SignOutForm
            handleClose={handleClose}
            showSuccessToast={showSuccessToast}
            showErrorToast={showErrorToast}
          />
        )}
      </React.Fragment>
    )}
  </Modal>
);
