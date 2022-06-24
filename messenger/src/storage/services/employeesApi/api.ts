import { sourceApi } from "storage/services/sourceApi";
import { IEmployee } from "@employee-api";

export const api = sourceApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<IEmployee[], void>({
      query: () => "/employees",
      providesTags: (result) => {
        return result
          ? [
            ...result.map(({ id }) => ({ type: "Employee" as const, id })),
            {type: "Employee", id: "LIST"}
          ]
          : [{type: "Employee", id: "LIST"}]
      },
    }),

  }),
});