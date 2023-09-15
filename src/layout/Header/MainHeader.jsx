import React from "react";
import { Box, Burger, Container, Grid } from "@mantine/core";
import Link from "next/link";
import Image from "next/image";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { selectOpendrawer } from "@/redux/features/sidebar/sidebarSelector";
import { setOpenDrawer } from "@/redux/features/sidebar/sidebarSlice";
import styles from "./index.module.scss";
import Sidebar from "../Sidebar";

const MainHeader = () => {
    const dispatch = useDispatch();
    const openDrawer =  useSelector(selectOpendrawer);

    const handleDrawer = () =>{
        dispatch(setOpenDrawer(true))
    }
    return (
        <Box component="nav" bg="white" py="6px">
            <Container size="xl">
                <Grid align="center" m={0}>
                    <Grid.Col md={6}>
                        <Burger opened={openDrawer} onClick={handleDrawer}/>
                        <Image
                            src="https://i.ibb.co/YZ1SDCR/logo.jpg"
                            width={250}
                            height={65}
                            objectFit="cover"
                            alt="logo"
                            priority
                        />
                    </Grid.Col>
                    <Grid.Col md={6}>
                        <ul className={styles.nav_menu}>
                            <li>
                                <Link href="/">About Us</Link>
                            </li>
                            <li>
                                <Link href="/contact">Contact Us</Link>
                            </li>
                            <li>
                                <Link href="/faq">FAQ</Link>
                            </li>
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
