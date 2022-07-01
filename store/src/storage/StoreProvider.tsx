import React, { ReactNode } from "react";
import { ReducersMapObject, Middleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { initializeStore } from "./store";

interface IPropType {
  children: ReactNode;
  reducers: ReducersMapObject;
  middlewares: Middleware[];
}

function StoreProvider({ children, reducers, middlewares }: IPropType) {
  const store = initializeStore(reducers, middlewares);

  return <Provider store={store}>{children}</Provider>;
}

StoreProvider.defaultProps = {
  reducers: {},
  middlewares: [],
};

export default StoreProvider;
