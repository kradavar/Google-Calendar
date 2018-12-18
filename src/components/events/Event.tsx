import * as React from "react";
import "../../Styles/Event.css";
import ModalShowEvent from "../modals/ModalShowEvent";
import { getDuration } from "../../getRenderedDateInfo";
import * as moment from "moment";
import { formatDate } from "../../getRenderedDateInfo";
import { DATE_FORMATS, VIEW } from "../../constants/constants";
import { SharedViewContext } from "../../Context";
import { IEvent } from "../../redux/actions/events";
import { ModalMouseEvent } from "../calendar-table/cells/Day";

export interface IEventState {
  showModal: boolean;
}
export interface IEventProps extends IEvent {
  color: string;
}

export default class Event extends React.Component<IEventProps, IEventState> {
  state = { showModal: false };

  handleClose = (e: ModalMouseEvent) => {
    this.setState({ showModal: false });
    e && e.stopPropagation();
  };

  handleOpen = (e: ModalMouseEvent) => {
    this.setState({ showModal: true });
    e && e.stopPropagation();
  };

  getHeight = (start: string, end: string) => {
    const minutes = getDuration(start, end, "minutes");
    return (
      minutes * 0.05
    ); /* 0.05rem - height of 1 minute, 'cause height of hour cell is 3rem  */
  };

  getTopOfEvent = (start: string) => {
    const startTime = moment(start).minute();
    return 0.05 * startTime - 2.2; /* rise event on the top of its start */
  };

  getColor = (user_id?: number) => this.props.color;

  getStyles = (start: string, end: string, view: string, user_id?: number) => {
    const heightRem = this.getHeight(start, end) + "rem";
    const topRem = this.getTopOfEvent(start) + "rem";
    if (view !== VIEW.MONTH) {
      return {
        background: this.getColor(user_id),
        height: heightRem,
        top: topRem
      };
    }
    return {};
  };

  getClassName = (view: string) =>
    view === VIEW.MONTH
      ? "event"
      : this.state.showModal
      ? "event-day hide"
      : "event-day";

  eventInput = (start: string, end: string, name: string, view: string) =>
    view === VIEW.MONTH
      ? formatDate(start, DATE_FORMATS.TIME) + "-" + name
      : name +
        "," +
        formatDate(start, DATE_FORMATS.TIME) +
        "-" +
        formatDate(end, DATE_FORMATS.TIME);

  render() {
    const { start, end, user_id } = this.props;
    const name = this.props.event_name;
    return (
      <SharedViewContext.Consumer>
        {({ view }: { view: string }) => (
          <li className="event-list-item">
            <div
              className={this.getClassName(view)}
              onClick={this.handleOpen}
              style={this.getStyles(start, end, view, user_id)}
            >
              {this.state.showModal && (
                <ModalShowEvent
                  handleClose={this.handleClose}
                  {...this.props}
                />
              )}
              {this.eventInput(start, end, name, view)}
            </div>
          </li>
        )}
      </SharedViewContext.Consumer>
    );
  }
}
