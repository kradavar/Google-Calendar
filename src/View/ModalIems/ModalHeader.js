import React from "react";
import { Button } from "../../View/Switchers/Button";

const ModalHeader = ({ header, handleClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="showModalLabel">
        {header}
      </h5>
      <Button onClick={handleClose} value="Close" classes="btn-outline-light" />
    </div>
  );
};

export default ModalHeader;
