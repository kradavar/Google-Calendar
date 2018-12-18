import React from "react";
import { Button } from "../components/buttons/Button/Button";

export const UnsignedMessage = ({ handleClose }) => (
  <React.Fragment>
    <p>Please, sign in or sign up to create new event</p>
    <div className="modal-footer">
      <Button
        classes="btn-outline-secondary"
        data-dismiss="modal"
        onClick={handleClose}
        value="Close"
      />
    </div>
  </React.Fragment>
);
