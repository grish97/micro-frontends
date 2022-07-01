import ReactDOM from "react-dom/client";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { reducers, middlewares } from "storage";
import React from "react";
import App from "./App";

import StoreProvider from "store/StoreProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <StoreProvider reducers={reducers} middlewares={middlewares}>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </StoreProvider>
  </BrowserRouter>
);
