import React from "react";
import { connect } from "react-redux";
import { addEvent } from "../actions/actions.js";
import "../../Styles/Modal.css";
import { Modal } from "../../View/ModalIems/Modal";
import CreateForm from "../FormItems/CreateForm";
import { DATE_FORMATS } from "../DateFormats.js";

function ModalWindow({ addEvent, handleClose, renderedDate, hour }) {
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
    addEvent(name, start, end);
  };

  const getRenderedHour = hour => {
    if (isNaN(hour)) {
      return "00:00";
    } else {
      if (hour < 10) {
        hour = `0${hour}`;
      }
      return hour + ":00";
    }
  };

  return (
    <Modal header="Create New Event" handleClose={handleClose}>
      {
        <CreateForm
          onSubmit={handleFormSubmit}
          initialValues={{
            eventType: false,
            start: {
              date: renderedDate.clone().format(DATE_FORMATS.DATE),
              time: getRenderedHour(+hour)
            },
            end: {
              date: renderedDate.clone().format(DATE_FORMATS.DATE),
              time: getRenderedHour(+hour + 1)
            }
          }}
        />
      }
    </Modal>
  );
}

export default connect(
  null,
  {
    addEvent
  }
)(ModalWindow);
