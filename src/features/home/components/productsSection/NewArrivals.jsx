import React, { Fragment } from "react";
import { Box, Divider, Flex, Rating, Stack, Text } from "@mantine/core";
import styles from "../../index.module.scss";
import { Carousel } from "@mantine/carousel";

const NewArrivals = () => {
    return (
        <Fragment>
            <Flex>
                <Text fz="lg" fw="bold">
                    NEW ARRIVALS
                </Text>
            </Flex>
            <Divider my="10px" />
            <Carousel
                mx="auto"
                slideSize="25%"
                withControls={false}
                slideGap="lg"
                loop
                align="start"
                slidesToScroll={3}
            >
                <Stack spacing="lg">
                    {Array(4)
                        .fill(null)
                        .map((_, index) => (
                            <Carousel.Slide key={index}>
                                <Box className={styles.new_arrivals}>
                                    <img
                                        src="https://api.admin.webmanza.com/assets/product/gallery/139_20_1660221632022_634312141_product_gallery.jpeg"
                                        alt="product"
                                    />
                                    <Stack
                                        justify="center"
                                        align="flex-start"
                                        spacing="4px"
                                        mt="15px"
                                    >
                                        <Rating readOnly c="#777777" />
                                        <Text c="#777777" fz="md">
                                            I Am Watching you. I Am Watching you
                                        </Text>
                                        <Text fw="bold">৳600</Text>
                                    </Stack>
                                </Box>
                            </Carousel.Slide>

                        ))}
                </Stack>
            </Carousel>

        </Fragment>
    );
};

export default NewArrivals;
