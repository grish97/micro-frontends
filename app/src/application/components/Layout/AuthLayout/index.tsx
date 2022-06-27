import { FC } from "react";
import { Outlet } from "react-router-dom";
import "./style.scss";

const Index: FC = () => {
  return (
    <div className="auth-layout">
      <div className="form-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Index;