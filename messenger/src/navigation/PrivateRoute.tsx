import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute: FC = () => {
  const isLogged = true;

  return isLogged ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
