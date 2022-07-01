import { sourceApi } from "../sourceApi";
import { IUserResponse, ILoginRequest, IRegisterRequest } from "@auth-api";

export const api = sourceApi.injectEndpoints({
  endpoints: (builder) => ({
    signIn: builder.mutation<IUserResponse, ILoginRequest>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        withCredentials: true,
        body: credentials,
      }),
    }),
    signUp: builder.mutation<IUserResponse, IRegisterRequest>({
      query: (credentials) => ({
        url: "register",
        method: "POST",
        body: credentials,
      }),
    }),
    signOut: builder.query<void, void>({
      query: () => `logout`,
    }),
    refreshToken: builder.mutation<void, { accessToken: string }>({
      query: () => "refresh-token",
    }),
  }),
});
