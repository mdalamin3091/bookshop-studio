import React from "react";
import { Container } from "@mantine/core";
import DetailsSection from "@/features/productDetails/components/DetailsSection";
import RelatedProduct from "@/features/productDetails/components/RelatedProduct";
import { getProductDetails, useGetProductDetailsQuery } from "@/redux/features/products/productApi";
import { skipToken } from "@reduxjs/toolkit/dist/query";
import { wrapper } from "@/redux/app/store";
import { useRouter } from "next/router";
import { getRunningQueriesThunk } from "@/redux/app/api/apiSlice";

const ProductDetails = () => {
    const router = useRouter();

    const slug = router.query.slug;
    const result = useGetProductDetailsQuery(
        typeof slug === "string" ? slug : skipToken,
        {
            // If the page is not yet generated, router.isFallback will be true
            // initially until getStaticProps() finishes running
            skip: router.isFallback,
        }
    );
    const { isLoading, error, data } = result;
    console.log("result", data?.data)
    return (
        <Container size="xl" py="50px">
            <DetailsSection data={data?.data}/>
            {/* <RelatedProduct /> */}
        </Container>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(
    (store) => async (context) => {
        const slug = context.params?.slug;
        if (typeof slug === "string") {
            store.dispatch(getProductDetails.initiate(slug));
        }

        await Promise.all(store.dispatch(getRunningQueriesThunk()));
        return {
            props: {},
        };
    }
);

export default ProductDetails;
