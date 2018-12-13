import * as React from "react";
import { connect } from "react-redux";
import { deleteEvent } from "../../actions/events";
import { Modal } from "./modalItems/Modal";
import { ModalMouseEvent } from "../calendar-table/Cells/Day";
import CreateForm from "../../FormItems/CreateEditEvent";
import ShowForm from "../../FormItems/ShowForm";
import { formatDate, getDuration } from "../../getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/constants";
import { Button } from "../Switchers/Button";
import { SharedViewContext } from "../../Context";

import "../Styles/Modal.css";
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
    const { start, end, handleClose, loading }: any = this.props;
    const name = this.props.event_name;
    const { editMode } = this.state;
    return (
      <SharedViewContext.Consumer>
        {({
          showSuccessToast
        }: {
          showSuccessToast: (message: string) => any;
        }) => (
          <Modal
            header={editMode ? "Edit Event" : name}
            handleClose={handleClose}
            bottom={
              <div className="show-modal-buttons">
                {!editMode && (
                  <Button
                    onClick={this.editCurrentEvent}
                    classes="btn-outline-info show-modal-button"
                    value="Edit"
                    disabled={loading}
                  />
                )}
                <Button
                  onClick={() => {
                    this.props.deleteEvent(this.props.id);
                    handleClose();
                    showSuccessToast("Your event has been deleted");
                  }}
                  classes="btn-outline-primary show-modal-button"
                  value="Delete"
                  loading={loading}
                />
                <Button
                  classes="btn-outline-dark show-modal-button"
                  onClick={handleClose}
                  value="Close"
                  disabled={loading}
                />
              </div>
            }
          >
            {editMode ? (
              <CreateForm
                showSuccessToast={showSuccessToast}
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
        )}
      </SharedViewContext.Consumer>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.events.meta.loading
  };
};

export default connect(
  mapStateToProps,
  {
    deleteEvent
  }
)(ModalShowEvent);
