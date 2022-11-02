import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";

const collectionType = "userChats";
export const userChatsApi = createApi({
    reducerPath: "userChatsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        createUserChat: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        { ...data, singleDoc: true },
                        collectionType,
                        "POST"
                    );
                    return { data: res };
                } catch (error) {
                    return { error };
                }
            }
        }),
        updateUserChats: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        { singleDoc: true, id: data?.id, ...data },
                        collectionType,
                        "PUT"
                    );

                    return { data: res };
                } catch (error) {}
            }
        }),
        getUserChats: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        {
                            id: data?.id,
                            ...data,
                            singleDoc: true
                        },
                        collectionType
                    );
                    return { data: res };
                } catch (error) {
                    return { error };
                }
            }
        })

        // updateUserDetails: builder.query({
        //   queryFn(id, data) {
        //     let res = updateDB({}, collectionType, "PUT");
        //     return { data: res };
        //   },
        // }),
    })
});

export const {
    useCreateUserChatMutation,
    useUpdateUserChatsMutation,
    useGetUserChatsMutation
} = userChatsApi;
