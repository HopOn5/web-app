import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";

const collectionType = "requests";
export const requestsApi = createApi({
    reducerPath: "requestsApi",
    baseQuery: fakeBaseQuery(),
    endpoints: (builder) => ({
        getRequests: builder.query({
            queryFn() {
                return { data: "ok" };
            }
        }),
        updateRequests: builder.mutation({
            async queryFn(id, data) {
                let res = await dbHandler({ data, id }, collectionType, "PUT");
                return { data: res };
            }
        }),
        deleteRequests: builder.mutation({
            async queryFn(id) {
                let res = await dbHandler({ id }, collectionType, "DELETE");
                return { data: res };
            }
        }),
        createRequests: builder.mutation({
            async queryFn(data) {
                let res = await dbHandler({ data }, collectionType, "POST");
                return { data: res };
            }
        })
    })
});

export const {
    useGetRequestsQuery,
    useCreateRequestsMutation,
    useDeleteRequestsMutation,
    useUpdateRequestsMutation
} = requestsApi;
