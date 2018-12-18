import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import App from "./App/App";
import registerServiceWorker from "./registerServiceWorker";

import { Provider } from "react-redux";
import { configureStore } from "./store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
