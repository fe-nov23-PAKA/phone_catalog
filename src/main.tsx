import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import { Root } from "./Root";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <Root />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
