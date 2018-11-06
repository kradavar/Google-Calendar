import React from "react";
import { VIEW } from "./constants/ViewTypes";
import moment from "moment";

export const SharedViewContext = React.createContext({
  view: VIEW.MONTH,
  renderedDate: moment(),
  changeViewType: () => {},
  previousPeriod: () => {},
  nextPeriod: () => {}
});
