import * as React from "react";
import { CellHeader } from "./Cells/CellHeader";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents.js";
import ModalWindow from "../../Model/containers/ModalWindow";
import { DayWeekHeader } from "./DayWeekHeader";
import * as moment from "moment";
import TimeLine from "../TimeLine.js";
import { HourCell } from "./Cells/HourCell";
import { formatDate, getDuration } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS } from "../../constants/DateFormats.js";
import { SharedViewContext } from "../../Context.js";
import { VIEW } from "../../constants/ViewTypes";
import { findDOMNode } from "react-dom";

export interface IDayProps {
  dayDate: moment.Moment;
}

export interface IDayState {
  showModal: boolean;
  hour: string | number;
  headerClassName: string;
}

interface ModalValueEventTarget extends EventTarget {
  getAttribute: (str: string) => string | null;
}

export interface ModalMouseEvent extends React.MouseEvent<HTMLDivElement> {
  target: ModalValueEventTarget;
}

export default class Day extends React.Component<IDayProps, IDayState> {
  constructor(props: IDayProps) {
    super(props);
    this.state = {
      showModal: false,
      hour: 0,
      headerClassName: "day-week-header sticky-top"
    };
    this.hour0Ref = React.createRef();
    this.hour8Ref = React.createRef();
    this.hour18Ref = React.createRef();
  }
  hour0Ref?: React.RefObject<JSX.Element>;
  hour8Ref?: React.RefObject<JSX.Element>;
  hour18Ref?: React.RefObject<JSX.Element>;

  showModal = (e: ModalMouseEvent): void => {
    const attr: string | null = e.target.getAttribute("data-hour");
    this.setState({
      showModal: true,
      hour: attr ? attr : 0,
      headerClassName: "day-week-header sticky-top hide"
    });
  };

  hideModal = (e: Event): void => {
    e.stopPropagation();
    this.setState({
      showModal: false,
      headerClassName: "day-week-header sticky-top"
    });
  };

  createDayCellMonth = (renderedDate: moment.Moment): JSX.Element => {
    const { dayDate } = this.props;

    let dayClassName: string =
      formatDate(dayDate, DATE_FORMATS.DATE) ===
      formatDate(moment(), DATE_FORMATS.DATE)
        ? "current-day cell day"
        : "cell day";
    dayClassName +=
      formatDate(dayDate, DATE_FORMATS.NUMBER_MONTH) ===
      formatDate(renderedDate, DATE_FORMATS.NUMBER_MONTH)
        ? ""
        : " not-current-month";
    dayClassName +=
      getDuration(
        formatDate(moment(), DATE_FORMATS.DATE),
        formatDate(dayDate, DATE_FORMATS.DATE),
        "day"
      ) < 0
        ? " disabled"
        : "";

    return (
      <div className={dayClassName} onClick={this.showModal}>
        {this.state.showModal && (
          <ModalWindow
            dayDate={dayDate}
            handleClose={this.hideModal}
            hour={+this.state.hour}
          />
        )}
        <CellHeader
          headerInfo={formatDate(dayDate, DATE_FORMATS.DATE_OF_MONTH)}
        />
        <RenderedEvents date={dayDate} />
      </div>
    );
  };

  handleScroll = (ref: React.RefObject<JSX.Element> | undefined) => {
    if (ref !== undefined && ref.current !== null) {
      const refNotUndef = ref as React.RefObject<JSX.Element>;
      const currentRef = refNotUndef.current as Element | null;
      const current = currentRef as Element;
      const node = findDOMNode(current) as Element;
      node.scrollIntoView();
    }
  };

  componentDidMount = () => {
    const currentHour = +formatDate(moment(), DATE_FORMATS.HOUR);

    let ref;
    switch (true) {
      case currentHour >= 0 && currentHour < 8:
        break;
      case currentHour > 7 && currentHour < 18:
        ref = this.hour8Ref;
        break;
      case currentHour > 17 && currentHour < 24:
        ref = this.hour18Ref;
        break;
      default:
        ref = this.hour0Ref;
        break;
    }
    this.handleScroll(ref);
  };

  createDayCell = (): JSX.Element => {
    const { dayDate } = this.props;
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
          ? this.hour0Ref
          : hour === 8
          ? this.hour8Ref
          : hour === 18
          ? this.hour18Ref
          : undefined;

      console.log(refValue);
      hours.push(
        <HourCell
          key={hour}
          onClick={this.showModal}
          hour={hour}
          classes={hourClass}
          ref={refValue}
        >
          <CellHeader headerInfo={hour} hour={hour} />
          <RenderedEvents date={dayDate} hour={hour} />
        </HourCell>
      );
      renderedHour.add(1, "hour");
    }

    return (
      <div className="flex-container">
        <DayWeekHeader
          dayDate={dayDate}
          className={this.state.headerClassName}
        />
        {formatDate(dayDate, DATE_FORMATS.DATE) ===
          formatDate(moment(), DATE_FORMATS.DATE) && <TimeLine />}

        <div className="day-flex">
          {hours}
          {this.state.showModal && (
            <ModalWindow
              dayDate={dayDate}
              handleClose={this.hideModal}
              hour={+this.state.hour}
            />
          )}
        </div>
      </div>
    );
  };
  render() {
    return (
      <SharedViewContext.Consumer>
        {({
          view,
          renderedDate
        }: {
          view: string;
          renderedDate: moment.Moment;
        }) => (
          <React.Fragment>
            {view === VIEW.MONTH ? (
              <React.Fragment>
                {this.createDayCellMonth(renderedDate)}
              </React.Fragment>
            ) : (
              <React.Fragment>{this.createDayCell()}</React.Fragment>
            )}
          </React.Fragment>
        )}
      </SharedViewContext.Consumer>
    );
  }
}
