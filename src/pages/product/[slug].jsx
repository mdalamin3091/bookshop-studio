import React from "react";
import { Container} from "@mantine/core";
import DetailsSection from "@/features/productDetails/components/DetailsSection";

const ProductDetails = () => {
    return (
        <Container size="xl" py="50px">
            <DetailsSection />
        </Container>
    );
};

export default ProductDetails;
