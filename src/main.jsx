import React from "react";
import ReactDOM from "react-dom/client";

import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
