import React from "react";
import { VIEW } from "./constants/constants";

export const SharedViewContext = React.createContext({
  view: VIEW.MONTH,
  renderedDate: undefined,
  changeViewType: () => {},
  previousPeriod: () => {},
  nextPeriod: () => {},
  showSuccessToast: message => {},
  showErrorToast: () => {}
});
