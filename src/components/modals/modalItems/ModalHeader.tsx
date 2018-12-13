import * as React from "react";
import { Button } from "../../Switchers/Button";
import "../../../Styles/Button.css";

const ModalHeader: React.SFC<{
  header: string;
  handleClose: (e?: Event) => void;
}> = ({ header, handleClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="showModalLabel">
        {header}
      </h5>
      <Button
        onClick={handleClose}
        value="✘"
        classes="btn-light close-button"
      />
    </div>
  );
};

export default ModalHeader;
