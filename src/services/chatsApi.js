import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";

const collectionType = "chats";
export const chatsApi = createApi({
    reducerPath: "chatsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getChatMessage: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        {
                            id: data?.id,
                            ...data
                        },
                        collectionType
                    );
                    return { data: res ?? [] };
                } catch (err) {
                    return { error: err };
                }
            }
        }),
        postChat: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        {
                            id: data?.id,
                            ...data
                        },
                        collectionType,
                        "POST"
                    );

                    return { data: res ?? { status: "Success" } };
                } catch (error) {
                    return { error: err };
                }
            }
        }),
        sendMessage: builder.mutation({
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        {
                            id: data?.id,
                            ...data,
                            singleDoc: true
                        },
                        collectionType,
                        "PUT"
                    );
                    return { data: res };
                } catch (err) {
                    return { error: err };
                }
            }
        })
    })
});

export const {
    useGetChatMessageMutation,
    usePostChatMutation,
    useSendMessageMutation
} = chatsApi;
