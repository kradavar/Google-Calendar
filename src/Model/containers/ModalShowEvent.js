import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent, editEvent } from "../actions/actions.js";
import { Modal } from "../../View/ModalIems/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";
import ShowForm from "../FormItems/ShowForm.js";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../DateFormats.js";
import Button from "../../View/Switchers/Button.js";

class ModalShowEvent extends Component {
  state = {
    editMode: false
  };

  deleteCurrentEvent = () => {
    this.props.deleteEvent(this.props.id);
  };

  editCurrentEvent = () => {
    this.setState({
      editMode: true
    });
  };

  render() {
    const { start, end, name, handleClose } = this.props;
    const { editMode } = this.state;
    return (
      <Modal
        header={editMode ? "Edit Event" : name}
        handleClose={handleClose}
        bottom={
          <div>
            {editMode === false && (
              <Button
                onClick={this.editCurrentEvent}
                classes="btn btn-outline-info show-modal-button"
                value="Edit"
              />
            )}
            <Button
              onClick={this.deleteCurrentEvent}
              classes="btn btn-outline-primary show-modal-button"
              value="Delete"
            />
            <Button
              classes="btn btn-outline-dark show-modal-button"
              onClick={handleClose}
              value="Close"
            />
          </div>
        }
      >
        {editMode ? (
          <CreateForm
            {...this.props}
            initialValues={{
              "event-type": false,
              name: name,
              start: {
                date: formatDate(start, DATE_FORMATS.DATE),
                time: formatDate(start, DATE_FORMATS.TIME)
              },
              end: {
                date: formatDate(end, DATE_FORMATS.DATE),
                time: formatDate(end, DATE_FORMATS.TIME)
              }
            }}
          />
        ) : (
          <ShowForm
            start={start}
            end={end}
            initialValues={{
              start: formatDate(start, DATE_FORMATS.DATE_WITH_TIME),
              end: formatDate(end, DATE_FORMATS.DATE_WITH_TIME)
            }}
          />
        )}
      </Modal>
    );
  }
}

export default connect(
  null,
  {
    deleteEvent,
    editEvent
  }
)(ModalShowEvent);
