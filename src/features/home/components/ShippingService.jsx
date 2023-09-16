import React from "react";
import { Box, Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import useResponsive from "@/hooks/useResponsive";
import styles from "../index.module.scss";

const ShippingService = () => {
    const { isMobile } = useResponsive();

    return (
        <Container size="xl" py="xl">
            <SimpleGrid
                cols={isMobile ? 1 : 3}
                className={styles.shipping_service_wrap}
            >
                <Flex
                    align="center"
                    justify="center"
                    className={styles.shipping_service_item}
                >
                    <Box>
                        <Title size="h1" c="#007bff" mb="sm" fz="md">
                            FREE SHIPPING
                        </Title>
                        <Text color="#444444" fz="sm">
                            Free Shipping World Wide
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    align="center"
                    justify="center"
                    className={styles.shipping_service_item}
                >
                    <Box>
                        <Title size="h1" c="#007bff" mb="sm" fz="md">
                            24 X 7 SERVICE
                        </Title>
                        <Text color="#444444" fz="sm">
                            Online Service For New Customer
                        </Text>
                    </Box>
                </Flex>
                <Flex
                    align="center"
                    justify="center"
                    className={styles.shipping_service_item}
                >
                    <Box>
                        <Title size="h1" c="#007bff" mb="sm" fz="md">
                            FESTIVAL OFFER
                        </Title>
                        <Text color="#444444" fz="sm">
                            New Online Special Festival Offer
                        </Text>
                    </Box>
                </Flex>
            </SimpleGrid>
        </Container>
    );
};

export default ShippingService;
