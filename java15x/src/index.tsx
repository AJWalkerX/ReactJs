import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import RouterPage from "./RouterPage";
import store from "./store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <RouterPage />
  </Provider>
);
