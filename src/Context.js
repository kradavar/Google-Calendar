import React from "react";
import { VIEW } from "./constants/constants";

export const SharedViewContext = React.createContext({
  view: VIEW.MONTH,
  changeViewType: () => {},
  previousPeriod: () => {},
  nextPeriod: () => {},
  showSuccessToast: message => {},
  showErrorToast: () => {}
});
