import React from "react";
import ModalHeader from "../ModalIems/ModalHeader";
import ModalBody from "../ModalIems/ModalBody";
import ModalBottom from "../ModalIems/ModalBottom";

export function Modal({ header, handleClose, children, bottom }) {
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader header={header} handleClose={handleClose} />
          <ModalBody>{children}</ModalBody>
          <ModalBottom>{bottom}</ModalBottom>
        </div>
      </div>
    </div>
  );
}
