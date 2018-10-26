import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import Context from "./Context";

import { Provider } from "react-redux";
import store from "./Model/store/store";
ReactDOM.render(
  <Context>
    <Provider store={store}>
      <App.Consumer />
    </Provider>
  </Context>,
  document.getElementById("root")
);
serviceWorker.unregister();
