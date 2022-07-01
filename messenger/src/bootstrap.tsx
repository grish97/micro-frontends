import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {middlewares, reducers} from "./storage";
import App from "./App";

import StoreProvider from "store/StoreProvider";

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLElement);

root.render(
  <BrowserRouter>
    <StoreProvider reducers={reducers} middlewares={middlewares}>
      <App/>
    </StoreProvider>
  </BrowserRouter>
);