import ReactDOM from "react-dom";
import StoreProvider from "./storage/StoreProvider";
import React from "react";
import App from "./App";

ReactDOM.render((
  <StoreProvider>
    <App />
  </StoreProvider>
), document.getElementById("app"));