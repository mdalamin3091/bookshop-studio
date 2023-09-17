import React from "react";
import { Box, Burger, Container, Grid } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectOpendrawer } from "@/redux/features/sidebar/sidebarSelector";
import { setOpenDrawer } from "@/redux/features/sidebar/sidebarSlice";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import styles from "./index.module.scss";
import Sidebar from "../Sidebar";

const MainHeader = () => {
    const dispatch = useDispatch();
    const openDrawer = useSelector(selectOpendrawer);
    const { data: { header: { body } = {}, logo = {} } = {} } =
        useSelector(selectThemeInfo) || {};

    const handleDrawer = () => {
        dispatch(setOpenDrawer(true));
    };
    
    return (
        <Box component="nav" bg="white" py="6px">
            <Container size="xl">
                <Grid align="center" m={0}>
                    <Grid.Col md={6}>
                        <Burger opened={openDrawer} onClick={handleDrawer} />
                        {body?.logo_section && (
                            <Link href="/">
                                <Image
                                    src={logo?.light_logo}
                                    width={250}
                                    height={65}
                                    objectFit="cover"
                                    alt="logo"
                                    priority
                                />
                            </Link>
                        )}
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <ul className={styles.nav_menu}>
                            {body?.primary_menu &&
                                body.primary_menu.map((menu) => (
                                    <li key={menu.id}>
                                        <Link href={menu.path}>{menu.text}</Link>
                                    </li>
                                ))}
                            <li>
                                <BsSearch />
                            </li>
                            <li>
                                <AiOutlineShoppingCart />
                            </li>
                        </ul>
                    </Grid.Col>
                </Grid>
            </Container>
            <Sidebar />
        </Box>
    );
};

export default MainHeader;
