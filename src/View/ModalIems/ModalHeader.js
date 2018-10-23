import React from "react";

const ModalHeader = ({ header, handleClose }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="showModalLabel">
        {header}
      </h5>
      <button onClick={handleClose} className="btn btn-outline-light">
        close
      </button>
    </div>
  );
};

export default ModalHeader;
