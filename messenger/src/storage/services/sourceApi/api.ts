import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { environment } from "services";
import { RootState } from "storage";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_DOMAIN,
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token;

      if (token) {
        headers.set("authentication", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ["Auth", "Group", "Task"],
  endpoints: () => ({}),
});
