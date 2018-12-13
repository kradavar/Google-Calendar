import * as React from "react";
import { Modal } from "../components/ModalIems/Modal";
import CreateForm from "../FormItems/CreateEditEvent";
import { formatDate } from "../getRenderedDateInfo";
import { DATE_FORMATS } from "../constants/constants";
import * as moment from "moment";
import { connect } from "react-redux";
import { UnsignedMessage } from "../FormItems/Unsigned";
import { SharedViewContext } from "../Context";

const ModalWindow: React.SFC<{
  handleClose: (e: Event) => void;
  dayDate: moment.Moment;
  hour: number;
  isSigned: boolean;
}> = ({ handleClose, dayDate, hour, isSigned }) => (
  <SharedViewContext.Consumer>
    {({ showSuccessToast }: { showSuccessToast: (message: string) => any }) => (
      <Modal header="Create New Event" handleClose={handleClose}>
        {isSigned ? (
          <CreateForm
            showSuccessToast={showSuccessToast}
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
        ) : (
          <UnsignedMessage handleClose={handleClose} />
        )}
      </Modal>
    )}
  </SharedViewContext.Consumer>
);

const mapStateToProps = (state: any) => {
  const userSelector = (state: any) => state.user.isSigned;
  return {
    isSigned: userSelector(state)
  };
};

export default connect(mapStateToProps)(ModalWindow);
