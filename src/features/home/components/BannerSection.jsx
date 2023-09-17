/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mantine/core";
import styles from "../index.module.scss";
import { useSelector } from "react-redux";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";

const BannerSection = () => {
    const { data: { theme_info: { image_osrc9o } = {} } = {} } = useSelector(selectThemeInfo) || {};
    return (
        <Box py="50px">
            <img
                src={image_osrc9o?.url}
                alt="banner"
                className={styles.banner_image}
            />
        </Box>
    );
};

export default BannerSection;
