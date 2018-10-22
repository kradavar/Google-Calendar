import React from "react";

import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import { Modal } from "../../View/Modal";
import CreateForm from "../FormItems/CreateForm";

function ModalWindow(props) {
  const handleFormSubmit = values => {
    const name = values.name;
    let start = values.start.date + " ";
    let end = values.end.date + " ";

    if (values.eventType) {
      start += "00:00";
      end += "24:00";
    } else {
      start += values.start.time;
      end += values.end.time;
    }

    props.addEvent(name, start, end);
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
            initialValues={{
              eventType: false,
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
