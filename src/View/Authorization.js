import React from "react";
import { Modal } from "./ModalIems/Modal";
import SignInForm from "../Model/FormItems/SignInForm";
import SignUpForm from "../Model/FormItems/SignUpForm";
import SignOutForm from "../Model/FormItems/SignOutForm";
import { SIGN } from "../constants/constants";

export const SignModal = ({ handleClose, type }) => {
  console.log(handleClose);
  return (
    <Modal header={type} handleClose={handleClose}>
      {type === SIGN.IN ? (
        <SignInForm />
      ) : (
        <React.Fragment>
          {type === SIGN.UP ? (
            <SignUpForm />
          ) : (
            <SignOutForm handleClose={handleClose} />
          )}
        </React.Fragment>
      )}
    </Modal>
  );
};
