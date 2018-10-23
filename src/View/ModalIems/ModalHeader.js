import React from "react";

const ModalHeader = ({ header, buttons }) => {
  return (
    <div className="modal-header">
      <h5 className="modal-title" id="showModalLabel">
        {header}
      </h5>
      {buttons}
    </div>
  );
};

export default ModalHeader;
