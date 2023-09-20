import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Rating,
  Stack,
  Text,
} from "@mantine/core";
import { Carousel } from "@mantine/carousel";
import useResponsive from "@/hooks/useResponsive";
import NewArrivals from "./NewArrivals";
import { useGetProductByCategoryQuery } from "@/redux/features/products/productApi";
import styles from "../../index.module.scss";
import Link from "next/link";
import Image from "next/image";

const ProductsSection = () => {
  const { isMobile } = useResponsive();
  const { data: { data } = {} } = useGetProductByCategoryQuery(undefined);
  let defaultSrc = "https://i.ibb.co/fNC7L5Z/No-Image-Placeholder.png";
  return (
    <Container size="xl" py="xl">
      <Grid gutter="xl">
        <Grid.Col span={isMobile ? 12 : 3}>
          <NewArrivals data={data} />
        </Grid.Col>
        <Grid.Col span={isMobile ? 12 : 9}>
          <Flex my="lg" justify="center" align="center" gap="md">
            <Button variant="filled" bg="primaryColors.0">
              Featured
            </Button>
            <Button variant="filled" bg="primaryColors.0">
              Best Seller
            </Button>
            <Button variant="filled" bg="primaryColors.0">
              Most Popular
            </Button>
          </Flex>
          <Carousel
            mx="auto"
            slideSize={isMobile ? "33.33%" : "16.66%"}
            withControls={false}
            slideGap="lg"
            loop
            align="start"
            slidesToScroll={3}
          >
            {data &&
              data.map((product, index) => {
                const { slug, name, thumbnail, rating, price } = product || {};
                return (
                  <Carousel.Slide key={index}>
                    <Box className={styles.product_items}>
                      <Link href={`product/${slug}`}>
                        <Image
                          src={thumbnail?.src || defaultSrc}
                          alt={thumbnail?.alt}
                          width={100}
                          height={160}
                        />
                      </Link>
                      <Stack
                        justify="center"
                        align="center"
                        spacing="4px"
                        mt="15px"
                      >
                        <Rating readOnly c="#777777" value={rating?.avg} />
                        <Text c="#777777" fz="md">
                          {name}
                        </Text>
                        <Text fw="bold">৳{price?.base_sale}</Text>
                      </Stack>
                    </Box>
                  </Carousel.Slide>
                );
              })}
          </Carousel>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default ProductsSection;
