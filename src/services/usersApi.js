import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";
import updateDB from "./dbHandler";

const collectionType = "users";
export const usersApi = createApi({
    reducerPath: "usersApi",
    baseQuery: fakeBaseQuery(),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUserDetails: builder.query({
            async queryFn(id) {
                try {
                    let data = await dbHandler(
                        { singleDoc: true, id },
                        collectionType
                    );
                    return { data };
                } catch (error) {}
            },
            invalidatesTags: ["User"]
        }),
        updateUserDetails: builder.query({
            queryFn(id, data) {
                let res = updateDB({}, collectionType, "PUT");
                return { data: res };
            },
            invalidatesTags: ["User"]
        })
    })
});

export const { useGetUserDetailsQuery, useUpdateUserDetailsQuery } = usersApi;
