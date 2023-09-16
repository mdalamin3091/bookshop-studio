/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import styles from "../index.module.scss";
const HeroSection = () => {
    return (
        <Fragment>
            <img
                src="https://sg-api.admin.webmanza.com/4571dbd0-2cd7-11ed-9717-00155d212c06/uploads/20_1680588807441-bookshopjpg.jpeg"
                alt="banner"
                className={styles.banner_image}
            />
        </Fragment>
    );
};

export default HeroSection;
