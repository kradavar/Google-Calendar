import * as React from "react";
import ModalHeader from "./ModalHeader";

export const Modal: React.SFC<{
  header: string;
  handleClose: (e: Event) => void;
  children?: any;
  bottom?: any;
}> = ({ header, handleClose, children, bottom }) => {
  const childrenWithProps = React.Children.map(children, (child: any) =>
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
