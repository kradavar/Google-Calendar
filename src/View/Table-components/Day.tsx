import * as React from "react";
import { CellHeader } from "./Cells/CellHeader";
import "../../Styles/Cell.css";
import RenderedEvents from "../../Model/containers/RenderedEvents";
import ModalWindow from "../../Model/containers/ModalWindow";
import { DayWeekHeader } from "./DayWeekHeader";
import * as moment from "moment";
import TimeLine from "../TimeLine";
import { formatDate, getDuration } from "../../Model/getRenderedDateInfo";
import { DATE_FORMATS, VIEW } from "../../constants/constants";
import { SharedViewContext } from "../../Context";
import { findDOMNode } from "react-dom";
import { HourList } from "./HourList";

export interface IDayProps {
  dayDate: moment.Moment;
}

export interface IDayState {
  showModal: boolean;
  hour: number;
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
      hour: moment().hour() + 1
    };
    this.hour0Ref = React.createRef();
    this.hour7Ref = React.createRef();
    this.hour18Ref = React.createRef();
  }
  hour0Ref?: React.RefObject<JSX.Element>;
  hour7Ref?: React.RefObject<JSX.Element>;
  hour18Ref?: React.RefObject<JSX.Element>;

  showModal = (e: ModalMouseEvent): void => {
    const attr: string | null = e.target.getAttribute("data-hour");
    this.setState({
      showModal: true,
      hour: attr ? +attr : moment().hour() + 1
    });
  };

  hideModal = (e: Event): void => {
    e && e.stopPropagation();
    this.setState({
      showModal: false
    });
  };

  getDayCellMonthClassNames = (
    dayDate: moment.Moment,
    renderedDate: moment.Moment
  ): string => {
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
    return dayClassName;
  };

  handleScroll = (ref?: React.RefObject<JSX.Element>) => {
    if (ref && ref.current) {
      //@ts-ignore
      const node = findDOMNode(ref.current) as Element;
      node.scrollIntoView();
    }
  };

  componentDidMount = () => {
    const currentHour = +formatDate(moment(), DATE_FORMATS.HOUR);
    let ref;
    if (currentHour >= 0 && currentHour < 8) {
      ref = this.hour0Ref;
    }
    if (currentHour > 7 && currentHour < 18) {
      ref = this.hour7Ref;
    }
    if (currentHour > 17 && currentHour < 24) {
      ref = this.hour18Ref;
    }
    this.handleScroll(ref);
  };

  render() {
    const { dayDate } = this.props;
    return (
      <SharedViewContext.Consumer>
        {({ view }: { view: string }) => (
          <React.Fragment>
            {view === VIEW.MONTH ? (
              <div
                className={this.getDayCellMonthClassNames(dayDate, moment())}
                onClick={this.showModal}
              >
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
            ) : (
              <div className="flex-container">
                <DayWeekHeader
                  dayDate={dayDate}
                  className={
                    this.state.showModal
                      ? "day-week-header sticky-top hide"
                      : "day-week-header sticky-top"
                  }
                />
                {formatDate(dayDate, DATE_FORMATS.DATE) ===
                  formatDate(moment(), DATE_FORMATS.DATE) && <TimeLine />}

                <div className="day-flex">
                  <HourList
                    dayDate={dayDate}
                    showModal={this.showModal}
                    hour0Ref={this.hour0Ref}
                    hour18Ref={this.hour18Ref}
                    hour7Ref={this.hour7Ref}
                  />
                  {this.state.showModal && (
                    <ModalWindow
                      dayDate={dayDate}
                      handleClose={this.hideModal}
                      hour={this.state.hour}
                    />
                  )}
                </div>
              </div>
            )}
          </React.Fragment>
        )}
      </SharedViewContext.Consumer>
    );
  }
}
