import React from "react";
import { VIEW } from "./constants/ViewTypes";

export const SharedViewContext = React.createContext({
  view: VIEW.MONTH,
  changeViewType: () => {}
});
