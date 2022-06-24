import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { RootState } from "storage";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/",
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }

      return headers;
    }
  }),
  tagTypes: ["Auth", "Employee", "Task"],
  endpoints: () => ({}),
});
