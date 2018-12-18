import * as React from "react";
import { Modal } from "../components/Modal";
import SignInForm from "../FormItems/SignInForm";
import SignUpForm from "../FormItems/SignUpForm";
import SignOutForm from "../FormItems/SignOut";
import { SIGN } from "../constants/constants";
import { SharedViewContext } from "../Context";

export const SignModal: React.SFC<{
  handleClose: (e: Event) => void;
  type: string;
}> = ({ handleClose, type }) => (
  <SharedViewContext.Consumer>
    {({ showSuccessToast, showErrorToast }) => (
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
    )}
  </SharedViewContext.Consumer>
);
