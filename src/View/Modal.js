import React from "react";

export function Modal({ children }) {
  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content"> {children}</div>
    </div>
  );
}
