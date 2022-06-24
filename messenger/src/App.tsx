import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "storage";
import Routing from "navigation/Routing";
import "./index.scss";

function App() {
  return <Routing />;
}

const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
