import React from "react";

import "../../Styles/Event.css";

import ModalShowEvent from "../../Model/containers/ModalShowEvent";

import { getDuration } from "../../Model/getRenderedDateInfo";
import moment from "moment";
import { formatDate } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../Model/DateFormats";

const Event = ({
  start,
  end,
  view,
  onClick,
  handleClose,
  name,
  id,
  showModal,
  eventsClassName
}) => {
  const getHeight = () => {
    const minutes = getDuration(start, end, "minutes");
    return (
      minutes * 0.05
    ); /* 0.05rem - height of 1 minute, 'cause height of hour cell is 3rem  */
  };

  const getTopOfEvent = () => {
    const startTime = moment(start).minute();
    return 0.05 * startTime - 2.2; /* rise event on the top of its start */
  };

  const getStyles = () => {
    const heightRem = getHeight() + "rem";
    const topRem = getTopOfEvent() + "rem";
    if (view === "day") {
      return {
        height: heightRem,
        top: topRem
      };
    }
  };

  const getClassName = () => (view === "month" ? "event" : eventsClassName);

  const eventInput = () =>
    view === "month"
      ? formatDate(start, DATE_FORMATS.TIME) + "-" + name
      : name + ", " + start + "-" + end;

  return (
    <li className="event-list-item">
      <div className={getClassName()} onClick={onClick} style={getStyles()}>
        {showModal && (
          <ModalShowEvent
            handleClose={handleClose}
            start={start}
            end={end}
            name={name}
            id={id}
            view={view}
          />
        )}
        {eventInput()}
      </div>
    </li>
  );
};

export default Event;
