import * as React from "react";
import { ModalMouseEvent } from "./Day";

export interface IHourCell {
  children: Array<JSX.Element>;
  hour: string | number;
  onClick: (e: ModalMouseEvent) => void;
  hourClass?: string;
  ref?: React.RefObject<JSX.Element>;
}

export class HourCell extends React.Component<IHourCell> {
  render() {
    const { hourClass, onClick, hour, children } = this.props;
    return (
      <div className={"hour" + hourClass} onClick={onClick} data-hour={hour}>
        {children}
      </div>
    );
  }
}
