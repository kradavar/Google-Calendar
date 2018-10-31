import React from "react";

export const SharedViewContext = React.createContext({
  view: "month",
  changeViewType: () => {}
});
