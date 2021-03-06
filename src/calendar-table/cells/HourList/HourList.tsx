import * as moment from "moment";
import * as React from "react";

import { DATE_FORMATS } from "../../../constants/constants";
import { formatDate, getDuration } from "../../../getRenderedDateInfo";
import { HourCell } from "../HourCell";
import { ModalMouseEvent } from "../Day";
import { CellHeader } from "../CellHeader";
import RenderedEvents from "../../../events/RenderedEvents";

import "./HourList.css";

export const HourList: React.SFC<{
  showModal: (e: ModalMouseEvent) => void;
  dayDate: moment.Moment;
  hour0Ref?: React.RefObject<JSX.Element>;
  hour7Ref?: React.RefObject<JSX.Element>;
  hour18Ref?: React.RefObject<JSX.Element>;
}> = ({ showModal, dayDate, hour0Ref, hour7Ref, hour18Ref }) => {
  const hours: Array<JSX.Element> = [];
  const renderedHour: moment.Moment = moment(dayDate.startOf("day"));

  for (let hour = 0; hour < 24; hour++) {
    const hourClass =
      getDuration(
        formatDate(moment(), DATE_FORMATS.DATE_WITH_HOUR),
        formatDate(
          moment(dayDate.set("hour", hour)),
          DATE_FORMATS.DATE_WITH_HOUR
        ),
        "hour"
      ) < 0
        ? " disabled"
        : "";

    // type for refValue:
    /* string | (((instance: HourCell | null) => any) & RefObject<Element>)
     | (RefObject<HourCell> & RefObject<Element>) |
      undefined */
    //////////
    /*
      RefObject<Element>)
      */
    /////////
    // React.RefObject<Element>
    // React.RefObject<JSX.Element>

    const refValue: any =
      hour === 0
        ? hour0Ref
        : hour === 7
        ? hour7Ref
        : hour === 18
        ? hour18Ref
        : undefined;

    hours.push(
      <HourCell
        key={hour}
        onClick={showModal}
        hour={hour}
        hourClass={hourClass}
        ref={refValue}
      >
        <CellHeader headerInfo={hour} hour={hour} />
        <RenderedEvents date={dayDate} hour={hour} />
      </HourCell>
    );
    renderedHour.add(1, "hour");
  }

  return <React.Fragment>{hours}</React.Fragment>;
};
