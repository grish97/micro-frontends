import {
  combineReducers,
  configureStore,
  ReducersMapObject,
  Middleware,
  EnhancedStore,
} from "@reduxjs/toolkit";

import { TRootState } from "@store";

/**
 *
 * Initialize micro-frontend applications store
 * This should be source store
 * All applications can connect to this store
 * Other applications can share their own reducers and middlewares too
 *
 * @param {ReducersMapObject} reducers
 * @param {Middleware[]} middlewares
 * @returns {EnhancedStore}
 */
export const initializeStore = (
  reducers: ReducersMapObject = {},
  middlewares: Middleware[] = []
): EnhancedStore => {
  const rootReducer = combineReducers(reducers);

  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
  });
};

export type RootState = ReturnType<TCallback<TRootState>>;
