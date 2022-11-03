import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";
import updateDB from "./dbHandler";

const collectionType = "users";
export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUserDetails: builder.mutation({
      async queryFn(id) {
        try {
          let data = await dbHandler({ singleDoc: true, id }, collectionType);
          return { data: data ?? {} };
        } catch (error) {
          return { error };
        }
      },
    }),

    updateUserDetails: builder.mutation({
      queryFn(data) {
        try {
          let res = updateDB(
            { ...data, singleDoc: true },
            collectionType,
            "PUT"
          );
          return { data: res };
        } catch (error) {
          return console.log("error", error);
        }
      },
    }),
  }),
});

export const { useGetUserDetailsMutation, useUpdateUserDetailsMutation } =
  usersApi;
