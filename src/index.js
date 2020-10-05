import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/rootReducer.js";

// Import Bootstrap
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/popper.js/dist/umd/popper.min.js";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,

  document.getElementById("root")
);
