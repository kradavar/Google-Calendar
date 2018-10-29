import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteEvent } from "../actions/actions.js";
import { Modal } from "../../View/ModalIems/Modal";

import "../../Styles/Modal.css";
import CreateForm from "../FormItems/CreateForm.js";
import ShowForm from "../FormItems/ShowForm.js";
import { formatDate, getDuration } from "../getRenderedDateInfo";
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

  getValueOfEventType = (start, end) => getDuration(start, end, "hour") === 24;

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
                classes="btn-outline-info show-modal-button"
                value="Edit"
              />
            )}
            <Button
              onClick={this.deleteCurrentEvent}
              classes="btn-outline-primary show-modal-button"
              value="Delete"
            />
            <Button
              classes="btn-outline-dark show-modal-button"
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
              eventType: this.getValueOfEventType(start, end),
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
    deleteEvent
  }
)(ModalShowEvent);
