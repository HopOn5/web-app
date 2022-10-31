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
                    let data = await dbHandler(
                        { singleDoc: true, id },
                        collectionType
                    );
                    return { data };
                } catch (error) {}
            }
        }),
        updateUserDetails: builder.query({
            queryFn(id, data) {
                let res = updateDB({}, collectionType, "PUT");
                return { data: res };
            }
        })
    })
});

export const { useGetUserDetailsMutation, useUpdateUserDetailsQuery } =
    usersApi;
