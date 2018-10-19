import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import { Modal } from "../../View/Modal";
import CreateForm from "../FormItems/CreateForm";

function ModalWindow(props) {
  const handleFormSubmit = values => {
    const name = values.name;
    const start = values.start.date + " " + values.start.time;
    const end = values.end.date + " " + values.end.time;

    props.addEvent(name, start, end);
  };

  const handleCheckBoxChange = values => {
    if (values.allDay) {
    } else {
    }
  };

  const getRenderedHour = hour => {
    if (hour === undefined) {
      return "00:00";
    } else {
      if (hour < 10) {
        hour = `0${hour}`;
      }
      return hour + ":00";
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
            handleClose={props.handleClose}
            handleCheckBoxChange={handleCheckBoxChange}
            initialValues={{
              "event-type": false,
              start: {
                date: props.renderedDate.clone().format("YYYY-MM-DD"),
                time: getRenderedHour(+props.target)
              },
              end: {
                date: props.renderedDate.clone().format("YYYY-MM-DD"),
                time: getRenderedHour(+props.target + 1)
              }
            }}
          />
        </div>
      </Modal>
    </div>
  );
}

export default connect(
  null,
  {
    addEvent
  }
)(ModalWindow);
