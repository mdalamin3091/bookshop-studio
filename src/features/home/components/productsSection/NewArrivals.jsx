import React, { Fragment } from "react";
import { Box, Divider, Flex, Rating, Stack, Text } from "@mantine/core";
import styles from "../../index.module.scss";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";

const NewArrivals = ({ data }) => {
    let defaultSrc =
        "https://api.admin.webmanza.com/assets/product/gallery/139_20_1663570909172_675365760_product_gallery.jpeg";

    // Chunk the data into groups of 4 products
    const chunkedData = data ? data.reduce((acc, product, index) => {
        if (index % 4 === 0) {
            acc.push([product]);
        } else {
            acc[acc.length - 1].push(product);
        }
        return acc;
    }, []) : [];

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
                slideSize="100%"
                withControls={true}
                slideGap="lg"
                loop
                align="start"
                slidesToScroll={1} // Scroll one slide at a time
            >
                {chunkedData.map((chunk, index) => (
                    <Carousel.Slide key={index}>
                        <Stack spacing="lg">
                            {chunk.map((product, productIndex) => {
                                const { slug, name, thumbnail, rating, price } =
                                    product || {};
                                return (
                                    <Link key={productIndex} href={`product/${slug}`} className={styles.new_arrivals}>
                                        <img
                                            src={thumbnail?.src || defaultSrc}
                                            alt={thumbnail?.alt}
                                        />
                                        <Stack
                                            justify="center"
                                            align="flex-start"
                                            spacing="4px"
                                            mt="15px"
                                        >
                                            <Rating
                                                readOnly
                                                c="#777777"
                                                value={rating?.avg}
                                            />
                                            <Text c="#777777" fz="md">
                                                {name}
                                            </Text>
                                            <Text fw="bold">
                                                ৳{price?.base_sale}
                                            </Text>
                                        </Stack>
                                    </Link>
                                );
                            })}
                        </Stack>
                    </Carousel.Slide>
                ))}
            </Carousel>
        </Fragment>
    );
};

export default NewArrivals;
