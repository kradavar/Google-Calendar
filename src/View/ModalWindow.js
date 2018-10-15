import React, { Component } from "react";

import { connect } from "react-redux";
import { addEvent } from "../Model/actions/actions.js";
import "../Styles/Modal.css";

function ModalWindow(props) {
  return (
    <div className="modal">
      <section className="modal-main">
        <button
          onClick={e => {
            e.preventDefault();
            const name = prompt("Name: ");
            const end = props.renderedDate.clone().add(1, "hour");
            const start = props.renderedDate.clone();

            props.dispatch(addEvent(name, start, end));
          }}
        >
          create
        </button>
        <button onClick={props.handleClose}>close</button>
      </section>
    </div>
  );
}

export default connect()(ModalWindow);
