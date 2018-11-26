import React from "react";
import ModalHeader from "../ModalIems/ModalHeader";

export const Modal = ({ header, handleClose, children, bottom }) => {
  const childrenWithProps = React.Children.map(children, child =>
    React.cloneElement(child, { handleClose: handleClose })
  );
  return (
    <div className="modal" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <ModalHeader header={header} handleClose={handleClose} />
          <div className="modal-body">{childrenWithProps}</div>
          {bottom && <div className="modal-footer custom-footer">{bottom}</div>}
        </div>
      </div>
    </div>
  );
};
