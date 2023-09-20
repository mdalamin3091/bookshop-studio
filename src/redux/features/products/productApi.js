import { apiSlice } from "../../app/api/apiSlice";

const productApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProductByCategory: builder.query({
      query: (categoryId = 858) => ({
        url: `product/v2/list/by/category/${categoryId}/?page=1&items_per_page=10`,
      }),
    }),

    getProductDetails: builder.query({
      query: (slug) => ({
        url: `product/v2/detail/${slug}`,
      }),
    }),
  }),
});

// Export hooks for usage in functional components
export const { useGetProductByCategoryQuery, useGetProductDetailsQuery } =
  productApi;

// export endpoints for use in SSR
export const { getProductByCategory, getProductDetails } = productApi.endpoints;
