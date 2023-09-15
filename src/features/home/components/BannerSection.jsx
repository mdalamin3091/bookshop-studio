/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mantine/core";
import styles from "../home.module.scss";

const BannerSection = () => {
    return (
        <Box py="50px">
            <img
                src="https://api.admin.webmanza.com/4571dbd0-2cd7-11ed-9717-00155d212c06/uploads/20_1685939726683-untitled-design-17jpg.jpeg"
                alt="banner"
                className={styles.banner_image}
            />
        </Box>
    );
};

export default BannerSection;
