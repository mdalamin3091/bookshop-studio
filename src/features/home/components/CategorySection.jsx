/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import styles from "../index.module.scss";

const CategorySection = () => {
    return (
        <Carousel
            mx="auto"
            slideSize="25%"
            withControls={false}
            slideGap="lg"
            loop
            align="start"
            slidesToScroll={1}
        >
            {Array(5)
                .fill(null)
                .map((_, index) => (
                    <Carousel.Slide key={index}>
                        <Box className={styles.category_item} my="xl">
                            <Box className={styles.category_item_img}>
                                <img
                                    src="https://api.admin.webmanza.com/4571dbd0-2cd7-11ed-9717-00155d212c06/uploads/20_1685613527566-books-300x199jpg.jpeg"
                                    alt="category"
                                />
                            </Box>
                            <Box component="a" bg="white" p="md" fz="md" className={styles.category_item_title} href="#">
                                story
                            </Box>
                        </Box>
                    </Carousel.Slide>
                ))}
        </Carousel>
    );
};

export default CategorySection;
