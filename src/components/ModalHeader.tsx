import * as React from "react";
import { Button } from "./Button";

const ModalHeader: React.SFC<{
  header: string;
  handleClose: (e?: Event) => void;
}> = ({ header, handleClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title">{header}</h5>
      <Button
        onClick={handleClose}
        value="✘"
        classes="btn-light close-button"
      />
    </div>
  );
};

export default ModalHeader;
