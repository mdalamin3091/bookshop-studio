import React from "react";
import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import { MdCall } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import useResponsive from "@/hooks/useResponsive";

const TopHeader = () => {
    const { isTablet } = useResponsive();

    return (
        <Box bg="#F8F8F8">
            <Container size="xl">
                <Grid py="sm" align="center" m={0}>
                    {isTablet || (
                        <Grid.Col md={6} p={0}>
                            <Flex
                                gap="md"
                                justify="flex-start"
                                align="center"
                                p={0}
                            >
                                <Text fz="sm" c="#999">
                                    Live Support
                                </Text>
                                <Flex align="center" gap="10px">
                                    <Box c="#ff5900">
                                        <MdCall />
                                    </Box>
                                    <Text fz="sm" c="#999">
                                        Call Us:{" "}
                                        <Text span c="#7F786D">
                                            8801708133969
                                        </Text>
                                    </Text>
                                </Flex>
                            </Flex>
                        </Grid.Col>
                    )}
                    <Grid.Col md={6} p={0}>
                        <Flex
                            gap="5px"
                            justify="flex-end"
                            align="center"
                            p={0}
                            c="#999"
                            sx={{ cursor: "pointer" }}
                        >
                            <Box>
                                <BsPersonFill />
                            </Box>
                            <Text>My account</Text>
                            <IoIosArrowDown />
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Container>
        </Box>
    );
};

export default TopHeader;
