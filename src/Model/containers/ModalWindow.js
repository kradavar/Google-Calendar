import React from "react";
import "../../Styles/Modal.css";
import { Modal } from "../../View/ModalIems/Modal";
import CreateForm from "../FormItems/CreateForm";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats.js";

const ModalWindow = ({ handleClose, dayDate, hour }) => (
  <Modal header="Create New Event" handleClose={handleClose}>
    {
      <CreateForm
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
              dayDate.clone().set({ hour: hour + 1, minute: 0 }),
              DATE_FORMATS.TIME
            )
          }
        }}
      />
    }
  </Modal>
);

export default ModalWindow;
