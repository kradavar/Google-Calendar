import React from "react";
import "../../Styles/Modal.css";
import { Modal } from "../../View/ModalIems/Modal";
import CreateForm from "../FormItems/CreateForm";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats";

// Move to ts
const ModalWindow = ({ handleClose, dayDate, hour }) => (
  <Modal header="Create New Event" handleClose={handleClose}>
    {
      <CreateForm
        handleClose={handleClose}
        initialValues={{
          eventType: false,
          start: {
            date: formatDate(dayDate, DATE_FORMATS.DATE),
            time: formatDate(
              dayDate.clone().set({ hour, minute: 0 }),
              DATE_FORMATS.TIME
            )
          },
          end: {
            date: formatDate(dayDate, DATE_FORMATS.DATE),
            time: formatDate(
              dayDate.clone().set({ hour, minute: 15 }),
              DATE_FORMATS.TIME
            )
          }
        }}
      />
    }
  </Modal>
);

export default ModalWindow;
