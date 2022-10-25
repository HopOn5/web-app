import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";
import updateDB from "./dbHandler";

const collectionType = "userChats";
export const userChatsApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    updateUserChats: builder.mutation({
      async queryFn(data) {
        try {
          console.log(data);
          let res = await dbHandler(
            { singleDoc: true, id: data?.id, ...data },
            collectionType,
            "PUT"
          );

          return { data: res };
        } catch (error) {}
      },
    }),
    // updateUserDetails: builder.query({
    //   queryFn(id, data) {
    //     let res = updateDB({}, collectionType, "PUT");
    //     return { data: res };
    //   },
    //   invalidatesTags: ["UserChats"],
    // }),
  }),
});

export const { useUpdateUserChatsMutation } = userChatsApi;
