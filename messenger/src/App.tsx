import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";

import Messenger from "Messenger/Messenger";

import "./index.scss";

function App() {
  return <Messenger />;
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
