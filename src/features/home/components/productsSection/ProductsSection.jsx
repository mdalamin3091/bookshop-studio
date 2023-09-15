import React from 'react'
import { Box, Container, Flex, Grid, Rating, Stack, Text } from '@mantine/core';
import { Carousel } from '@mantine/carousel';
import useResponsive from '@/hooks/useResponsive';
import NewArrivals from './NewArrivals';
import TabButton from '@/components/TabButton';
import styles from "../../home.module.scss";

const ProductsSection = () => {
    const { isMobile } = useResponsive();
    return (
        <Container size="xl">
            <Grid gutter="xl">
                <Grid.Col span={isMobile ? 12 : 3}>
                    <NewArrivals />
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 9}>
                    <Flex my="lg" justify="center" align="center" gap="md">
                        <TabButton title="Featured" />
                        <TabButton title="Best Seller" />
                        <TabButton title="Most Popular" />
                    </Flex>
                    <Carousel
                        mx="auto"
                        slideSize="16.66%"
                        withControls={false}
                        slideGap="lg"
                        loop
                        align="start"
                        slidesToScroll={3}
                    >
                        {Array(10)
                            .fill(null)
                            .map((_, index) => (
                                <Carousel.Slide key={index}>
                                    <Box className={styles.product_items} key={index}>
                                        <img
                                            src="https://api.admin.webmanza.com/assets/product/gallery/139_20_1660221632022_634312141_product_gallery.jpeg"
                                            alt="product"
                                        />
                                        <Stack justify="center" align="center" spacing="4px" mt="15px">
                                            <Rating readOnly c="#777777" />
                                            <Text c="#777777" fz="md">I Am Watching you</Text>
                                            <Text fw="bold">৳600</Text>
                                        </Stack>
                                    </Box>
                                </Carousel.Slide>
                            ))}
                    </Carousel>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default ProductsSection