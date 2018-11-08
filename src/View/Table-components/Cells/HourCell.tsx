import * as React from "react";
import { ModalMouseEvent } from "../Day";

export interface IHourCell {
  children: Array<JSX.Element>;
  hour: string | number;
  onClick: (e: ModalMouseEvent) => void;
  classes?: string;
  ref?: React.RefObject<JSX.Element> | undefined;
}

export class HourCell extends React.Component<IHourCell> {
  render() {
    const { classes, onClick, hour, children } = this.props;
    return (
      <div className={"hour" + classes} onClick={onClick} data-hour={hour}>
        {children}
      </div>
    );
  }
}
