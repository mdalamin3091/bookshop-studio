import React, { Fragment } from "react";
import {
    Box,
    Button,
    Divider,
    Flex,
    Grid,
    Rating,
    Stack,
    Text,
    Title,
} from "@mantine/core";
import {
    BiLogoFacebook,
    BiLogoLinkedinSquare,
    BiLogoPinterestAlt,
    BiLogoTwitter,
    BiLogoWhatsapp,
} from "react-icons/bi";
import useResponsive from "@/hooks/useResponsive";
import QuantityInput from "./QuantityInput";
import styles from "../index.module.scss";
import { Carousel } from "@mantine/carousel";
import TabSection from "./TabSection";

const DetailsSection = () => {
    const { isMobile } = useResponsive();
    return (
        <Fragment>
            <Grid gutter="xl">
                <Grid.Col span={isMobile ? 12 : 4}>
                    <Box className={styles.thumbnail}>
                        <Carousel
                            mx="auto"
                            slideSize="100%"
                            withControls={true}
                            slideGap="xl"
                            align="start"
                            slidesToScroll={1}
                            dragFree={false}
                            draggable={false}
                        >
                            {Array(3)
                                .fill(null)
                                .map((_, index) => (
                                    <img
                                        src="https://api.admin.webmanza.com/assets/product/gallery/139_20_1663570856356_313229747_product_gallery.jpeg"
                                        alt="product"
                                        key={index}
                                    />
                                ))}
                        </Carousel>
                    </Box>
                </Grid.Col>
                <Grid.Col span={isMobile ? 12 : 5}>
                    <Stack spacing="md">
                        <Title size="h2" fz="25px" c="#222222">
                            I Am Watching you
                        </Title>
                        <Rating readOnly />

                        <Box>
                            <Text fz="md" c="#212529">
                                Price: ৳600
                            </Text>
                            <Divider variant="dotted" />
                        </Box>
                        <Text c="#00e600" fw="bold" fz="sm">
                            In Stock
                        </Text>
                        <Box>
                            <Text fz="sm" fw="bold" mb="sm">
                                Quantity
                            </Text>
                            <QuantityInput />
                        </Box>
                        <Box>
                            <Box fz="sm">
                                <Text fz="sm">Total Price:</Text>
                                <Text span fz="lg">
                                    ৳
                                </Text>
                                <Text span fz="24px">
                                    450
                                </Text>
                            </Box>
                        </Box>
                        <Flex gap="md">
                            <Button
                                uppercase
                                color="primaryColors.0"
                                variant="filled"
                                radius={"0"}
                                size="md"
                            >
                                Add to cart
                            </Button>

                            <Button
                                uppercase
                                color="primaryColors.0"
                                variant="filled"
                                radius={"0"}
                                size="md"
                            >
                                Buy Now
                            </Button>
                        </Flex>
                        <Divider variant="dotted" />
                        <Box>
                            <Text fz="sm" fw="bold">
                                Product Details
                            </Text>
                            <Text fz="14px" c="#212529">
                                Thriller by JAMES BLADWIN
                            </Text>
                        </Box>
                        <Divider variant="dotted" />
                        <Box>
                            <Text fz="sm" fw="bold" mb="sm">
                                Share It
                            </Text>
                            <Flex gap="lg">
                                <BiLogoFacebook />
                                <BiLogoPinterestAlt />
                                <BiLogoTwitter />
                                <BiLogoWhatsapp />
                                <BiLogoLinkedinSquare />
                            </Flex>
                        </Box>
                    </Stack>
                </Grid.Col>
                {isMobile || <Grid.Col span={3}></Grid.Col>}
            </Grid>
            <TabSection />
        </Fragment>
    );
};

export default DetailsSection;
