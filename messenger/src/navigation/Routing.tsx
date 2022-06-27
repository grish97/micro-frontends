import { FC } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// ** Route types
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

// ** Layouts
import MainLayout from "components/MainLayout";

// ** Pages
import Messenger from "pages/Messenger";

const Routing: FC = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Navigate to="/messenger" replace />} />
          <Route path="/messenger" element={<Messenger />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default Routing;
