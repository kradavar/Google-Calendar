import React from "react";
import ModalHeader from "../ModalIems/ModalHeader";

export const Modal = ({ header, handleClose, children, bottom }) => {
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader header={header} handleClose={handleClose} />
          <div className="modal-body">{children}</div>
          <div className="modal-footer">{bottom}</div>
        </div>
      </div>
    </div>
  );
};
