import { Suspense } from "react";
import { Routes, Route, Navigate, useRoutes } from "react-router-dom";
import useAuth from "hooks/useAuth";

// Route types
import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import PrivateRoutes from "./PrivateRoutes";
import RequireAuth from "./RequireAuth";

import { Auth, Dashboard, Unknown, Unauthorized } from "application/components";
import Layout from "application/components/Layout/Layout";
import Index from "application/components/Layout/AuthLayout";

import Messenger from "messenger/Messenger";

export default function Routing() {
  const auth = useAuth();

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/** Public routes */}
        <Route path="/auth" element={<PublicRoutes />}>

          <Route element={<Index />}>
            <Route path="login" element={<Auth.Login />} />
            <Route path="register" element={<Auth.Register />} />
          </Route>

          <Route path="unauthorized" element={<Unauthorized />} />
        </Route>

        {/** Require to auth routes */}
        <Route element={<Auth.PersistLogin />}>
          <Route path="/" element={<RequireAuth allowedRoles={auth.roles} />}>
            <Route path="" element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />

            <Route path="messenger" element={<Messenger />} />
          </Route>
        </Route>

        {/** Unknown routes */}
        <Route path="*" element={<Unknown />} />
      </Route>
    </Routes>
  );
}
