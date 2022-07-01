/// <reference types="react" />

type Nullable<T> = T | null;

type TCallback<TR = void> = (...args: any[]) => void;

declare module "app/useAuth" {
  const useAuth: TCallback<any>;
  export default useAuth;
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