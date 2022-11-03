import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import filterRouteRequest from "./helpers/filterRouteRequest";
import dbHandler from "./dbHandler";
import { where } from "firebase/firestore";
import filterOwnerRoutes from "./helpers/filterOwnerRoutes";

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
            async queryFn(data) {
                try {
                    let res = await dbHandler(
                        { ...data, singleDoc: true },
                        collectionType,
                        "PUT"
                    );
                    console.log(res);
                    return { data: res };
                } catch (error) {
                    return { error };
                }
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
        }),
        filterSearchRequests: builder.mutation({
            async queryFn(queries) {
                let query = where("user.id", "!=", queries?.userId);
                try {
                    let res = await dbHandler(
                        { isDocFormat: true, isQuery: true, query },
                        collectionType
                    );
                    let filteredData = filterRouteRequest(res, queries);
                    return { data: filteredData };
                } catch (error) {
                    return { error };
                }
            }
        }),
        filterUserRequests: builder.mutation({
            async queryFn(queries) {
                let query = where("user.id", "==", queries?.userId);
                try {
                    let res = await dbHandler(
                        { isDocFormat: true, isQuery: true, query },
                        collectionType
                    );

                    let filteredOwnerRoutes = filterOwnerRoutes(res, queries);
                    console.log(res, filteredOwnerRoutes, "filtered");
                    return { data: filteredOwnerRoutes };
                } catch (error) {
                    return { error };
                }
            }
        })
    })
});

export const {
    useGetRequestsQuery,
    useCreateRequestsMutation,
    useDeleteRequestsMutation,
    useUpdateRequestsMutation,
    useFilterSearchRequestsMutation,
    useFilterUserRequestsMutation
} = requestsApi;
