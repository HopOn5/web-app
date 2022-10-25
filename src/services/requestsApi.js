import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import dbHandler from "./dbHandler";

const collectionType = "route_requests";
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
                try {
                    let res = await dbHandler({ id }, collectionType, "DELETE");
                    return { data: res };
                } catch (error) {
                    console.log(err);
                    return { error: err };
                }
            }
        }),
        createRequests: builder.mutation({
            async queryFn(payloadData) {
                console.log(payloadData, "DATA");
                let res = await dbHandler(payloadData, collectionType, "POST");
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
