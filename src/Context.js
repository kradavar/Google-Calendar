import React from "react";
import { VIEW } from "./constants/constants";
import moment from "moment";

export const SharedViewContext = React.createContext({
  view: VIEW.MONTH,
  renderedDate: moment(),
  showToast: false,
  changeViewType: () => {},
  previousPeriod: () => {},
  nextPeriod: () => {},
  showSuccessToast: message => {},
  showErrorToast: () => {}
});
