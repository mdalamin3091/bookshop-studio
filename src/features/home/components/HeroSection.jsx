/* eslint-disable @next/next/no-img-element */
import React, { Fragment } from "react";
import styles from "../index.module.scss";
import useResponsive from "@/hooks/useResponsive";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import { useSelector } from "react-redux";

const HeroSection = () => {

    const { isMobile } = useResponsive();
    const { data: { theme_info: { slider_g5BCN7 } = {} } = {} } = useSelector(selectThemeInfo) || {};

    return (
        <Fragment>
            <img
                src={
                    isMobile
                        ? slider_g5BCN7?.list[0].mobile_banner_url
                        : slider_g5BCN7?.list[0].banner_url
                }
                alt="banner"
                className={styles.banner_image}
            />
        </Fragment>
    );
};

export default HeroSection;
