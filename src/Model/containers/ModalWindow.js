import React from "react";
import "../../Styles/Modal.css";
import { Modal } from "../../View/ModalIems/Modal";
import CreateForm from "../FormItems/CreateForm";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats.js";

const ModalWindow = ({ handleClose, renderedDate, hour }) => (
  <Modal header="Create New Event" handleClose={handleClose}>
    {
      <CreateForm
        initialValues={{
          eventType: false,
          start: {
            date: formatDate(renderedDate, DATE_FORMATS.DATE),
            time: formatDate(
              renderedDate.clone().set({ hour, minute: 0 }),
              DATE_FORMATS.TIME
            )
          },
          end: {
            date: formatDate(renderedDate, DATE_FORMATS.DATE),
            time: formatDate(
              renderedDate.clone().set({ hour: hour + 1, minute: 0 }),
              DATE_FORMATS.TIME
            )
          }
        }}
      />
    }
  </Modal>
);

export default ModalWindow;
