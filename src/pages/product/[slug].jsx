import React from "react";
import { Container} from "@mantine/core";
import DetailsSection from "@/features/productDetails/components/DetailsSection";
import RelatedProduct from "@/features/productDetails/components/RelatedProduct";

const ProductDetails = () => {
    return (
        <Container size="xl" py="50px">
            <DetailsSection />
            <RelatedProduct />
        </Container>
    );
};

export default ProductDetails;
