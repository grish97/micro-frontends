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