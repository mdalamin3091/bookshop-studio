import React from "react";
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  SimpleGrid,
  Text,
} from "@mantine/core";
import TabButton from "@/components/TabButton";
import { BsArrowRightShort } from "react-icons/bs";
import useResponsive from "@/hooks/useResponsive";
import { useGetProductByCategoryQuery } from "@/redux/features/products/productApi";
import ProductCard from "@/components/ProductCard";

const SpecialProducts = () => {
  const { isMobile } = useResponsive();
  const { data: { data } = {} } = useGetProductByCategoryQuery(undefined);
  return (
    <Container size="xl" py="50px">
      <Box>
        <Text align="center" size="36px" mb="sm" fw="bold">
          Special Product
        </Text>
        <Center>
          <Divider size="md" w="80px" color="#ff5900" />
        </Center>
      </Box>
      <Flex my="lg" justify="center" align="center" gap="md">
        <TabButton title="Story" />
        <TabButton title="Academic" />
      </Flex>
      <SimpleGrid cols={isMobile ? 2 : 5} spacing="lg">
        {data &&
          data?.map((product, index) => (
            <ProductCard product={product} key={index} />
          ))}
      </SimpleGrid>
      <Center mt="lg">
        <Button
          rightIcon={<BsArrowRightShort />}
          variant="outline"
          uppercase
          fz="md"
        >
          More Products
        </Button>
      </Center>
    </Container>
  );
};

export default SpecialProducts;
