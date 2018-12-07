import * as React from "react";
import { connect } from "react-redux";
import { deleteEvent } from "../actions/events";
import { Modal } from "../../View/ModalIems/Modal";
import { ModalMouseEvent } from "../../View/Table-components/Day";
import CreateForm from "../FormItems/CreateForm";
import ShowForm from "../FormItems/ShowForm";
import { formatDate, getDuration } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/constants";
import { Button } from "../../View/Switchers/Button";
export interface IModalShowEventProps {
  deleteEvent: (id: number) => void;
  id: number;
  event_name: string;
  handleClose: (e: ModalMouseEvent) => void;
}

export interface IModalShowEventState {
  editMode: boolean;
}
class ModalShowEvent extends React.Component<
  IModalShowEventProps,
  IModalShowEventState
> {
  state: IModalShowEventState = {
    editMode: false
  };

  editCurrentEvent = () => {
    this.setState({
      editMode: true
    });
  };

  render() {
    const { start, end, handleClose }: any = this.props;
    const name = this.props.event_name;
    const { editMode } = this.state;
    return (
      <Modal
        header={editMode ? "Edit Event" : name}
        handleClose={handleClose}
        bottom={
          <div>
            {!editMode && (
              <Button
                onClick={this.editCurrentEvent}
                classes="btn-outline-info show-modal-button"
                value="Edit"
              />
            )}
            <Button
              onClick={() => {
                this.props.deleteEvent(this.props.id);
              }}
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
              eventType: getDuration(start, end, "hour") === 24,
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
            {...this.props}
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
