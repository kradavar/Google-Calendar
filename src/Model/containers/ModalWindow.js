import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import Modal from "../../View/Modal";
import CreateForm from "../FormItems/CreateForm";

function ModalWindow(props) {
  const handleFormSubmit = values => {
    console.log(values);
    const name = values.name;
    const start = values.start.date + " " + values.start.time;
    const end = values.end.date + " " + values.end.time;

    props.dispatch(addEvent(name, start, end));
  };

  const handleCheckBoxChange = values => {
    if (values.allDay) {
    } else {
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
          <CreateForm
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
