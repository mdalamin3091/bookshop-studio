import { apiSlice } from "../../app/api/apiSlice";

const productApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProductByCategory: builder.query({
            query: () => ({
                url: "product/v2/list/by/category/858/?page=1&items_per_page=10",
            }),
        }),

        getProductDetails: builder.query({
            query: () => ({
                url: "product/v2/detail/04888ac8-85e2-11ed-9717-00155d212c06",
            }),
        }),
    }),
});

// Export hooks for usage in functional components
export const { useGetProductByCategoryQuery, useGetProductDetailsQuery } = productApi;

// export endpoints for use in SSR
export const { getProductByCategory, getProductDetails } = productApi.endpoints;
