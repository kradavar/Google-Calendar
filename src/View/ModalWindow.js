import React from "react";

export default function ModalWindow(props) {
  const showHideClassName = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {props.event}
        <button onClick={props.handleClose}>close</button>
      </section>
    </div>
  );
}
