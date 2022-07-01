/// <reference types="react" />

declare module "messenger/Messenger" {
  const Messenger: React.ComponentType;

  export default Messenger;
}

declare module "messenger/routes" {
  import { RouteObject } from "react-router-dom";

  export const routes: RouteObject[];

  export const RouteElements: React.ComponentType;
}

declare module "store/StoreProvider" {
  import { ReducersMapObject, Middleware } from "@reduxjs/toolkit";

  const StoreProvider: React.FC<{
    children: React.ReactNode;
    reducers?: ReducersMapObject;
    middlewares?: Middleware[];
  }>;

  export default StoreProvider;
}

declare module "store/storeService";