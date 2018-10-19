import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import Modal from "../../View/Modal";
import FormDate from "../FormItems/FormDate";

function ModalWindow(props) {
  const getInputValue = id => document.getElementById(id).value;
  const handleFormSubmit = e => {
    console.log(e);
    debugger;
    e.preventDefault();
    const name = getInputValue("event-name");
    let end;
    let start;

    const allDay = document.getElementById("all-day").checked;

    if (allDay) {
      end = getInputValue("event-end-date") + " 24:00";
      start = getInputValue("event-start-date") + " 00:00";
    } else {
      end =
        getInputValue("event-end-date") + " " + getInputValue("event-end-time");
      start =
        getInputValue("event-start-date") +
        " " +
        getInputValue("event-start-time");
    }

    props.dispatch(addEvent(name, start, end));

    document.getElementById("event-name").value = "";
    document.getElementById("event-end").value = "";
    document.getElementById("event-start").value = "";
  };

  const handleCheckBoxChange = () => {
    if (document.getElementById("all-day").checked) {
      document.getElementById("event-start-time").disabled = true;
      document.getElementById("event-end-time").disabled = true;
    } else {
      document.getElementById("event-start-time").disabled = false;
      document.getElementById("event-end-time").disabled = false;
    }
  };

  return (
    <div className="modal" role="dialog">
      <Modal>
        <div className="modal-header">
          <h5 className="modal-title" id="createModalLabel">
            Create New Event
          </h5>
          <button onClick={props.handleClose}>close</button>
        </div>
        <div className="modal-body">
          <FormDate
            onSubmit={handleFormSubmit}
            date={props.renderedDate.clone().format("YYYY-MM-DD")}
            view={props.view}
            hour={+props.target}
            handleCheckBoxChange={handleCheckBoxChange}
          />
        </div>
      </Modal>
    </div>
  );
}

export default connect()(ModalWindow);
