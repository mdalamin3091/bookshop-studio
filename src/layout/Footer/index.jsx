import React from "react";
import {
    Button,
    Container,
    Flex,
    Grid,
    Input,
    Stack,
    Text,
} from "@mantine/core";
import Image from "next/image";
import { HiMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import useResponsive from "@/hooks/useResponsive";

const Footer = () => {
    const { isMobile } = useResponsive();
    return (
        <Container size="xl" py="xl">
            <Grid>
                <Grid.Col span={isMobile ? 12 : 5}>
                    <Image
                        src="https://i.ibb.co/YZ1SDCR/logo.jpg"
                        width={250}
                        height={65}
                        objectFit="cover"
                        alt="logo"
                        priority
                    />
                    <Text c="#444444" lh="32px" mt="25px" pr="50px">
                        A bookshop is a specialized retail establishment that
                        primarily sells books, both fiction and non-fiction,
                        across various genres and subjects. Often a sanctuary
                        for bibliophiles, a bookshop might also offer related
                        items such as magazines, newspapers, stationery, and
                        sometimes music or movies.
                    </Text>
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 3}>
                    <Text fz="36px" c="#222222" fw="bold" lh="37px" mb="5px">
                        KNOW IT ALL FIRST!
                    </Text>
                    <Input placeholder="Enter your email" mb="lg" />

                    <Button uppercase color="primaryColors.0" variant="filled">
                        Subscribe
                    </Button>
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 2}>
                    <Stack mt="lg" gap="md">
                        <Flex
                            align="center"
                            justify="flex-start"
                            gap="sm"
                            c="#999999"
                        >
                            <HiMapPin />
                            <Text fz="sm">Dhaka, Bangladesh</Text>
                        </Flex>
                        <Flex
                            align="center"
                            justify="flex-start"
                            gap="sm"
                            c="#999999"
                        >
                            <IoMdCall />
                            <Text fz="sm">01700705293</Text>
                        </Flex>
                        <Flex
                            align="center"
                            justify="flex-start"
                            gap="sm"
                            c="#999999"
                        >
                            <HiOutlineEnvelope />
                            <Text fz="sm">info@webmanza.com</Text>
                        </Flex>
                    </Stack>
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 2}>
                    <Text c="#222222" fz="18px" fw="bold" mb="lg">
                        COMPANY
                    </Text>
                    <Stack gap="sm">
                        <Link href="/">About Us</Link>
                        <Link href="/">Contact Us</Link>
                        <Link href="/">FAQ</Link>
                        <Link href="/">Return Policy</Link>
                        <Link href="/">Tearms & Condisions</Link>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    );
};

export default Footer;
