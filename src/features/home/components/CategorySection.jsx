/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Carousel } from "@mantine/carousel";
import { Box } from "@mantine/core";
import { useSelector } from "react-redux";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import useResponsive from "@/hooks/useResponsive";
import styles from "../index.module.scss";

const CategorySection = () => {
    const { isMobile } = useResponsive();
    const { data: { theme_info: { category_1JXLtF } = {} } = {} } = useSelector(selectThemeInfo) || {};
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
            {category_1JXLtF?.list &&
                category_1JXLtF?.list?.map((category, index) => (
                    <Carousel.Slide key={index}>
                        <Box className={styles.category_item} my="xl">
                            <Box className={styles.category_item_img}>
                                <img src={category.thumb} alt="category" />
                            </Box>
                            <Box
                                component="a"
                                bg="white"
                                p="md"
                                fz="md"
                                className={styles.category_item_title}
                                href="#"
                            >
                                {category.name}
                            </Box>
                        </Box>
                    </Carousel.Slide>
                ))}
        </Carousel>
    );
};

export default CategorySection;
