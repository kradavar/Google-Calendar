import React from "react";

const ModalHeader = ({ header, handleClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="showModalLabel">
        {header}
      </h5>
      <button onClick={handleClose}>close</button>
    </div>
  );
};

export default ModalHeader;
