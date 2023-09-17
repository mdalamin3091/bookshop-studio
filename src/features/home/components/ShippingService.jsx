import React from "react";
import { useSelector } from "react-redux";
import { Box, Container, Flex, SimpleGrid, Text, Title } from "@mantine/core";
import useResponsive from "@/hooks/useResponsive";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import styles from "../index.module.scss";

const ShippingService = () => {
    const { isMobile } = useResponsive();
    const { data: { theme_info: { service_PWt3Ot } = {} } = {} } = useSelector(selectThemeInfo) || {};
    return (
        <Container size="xl" py="xl">
            <SimpleGrid
                cols={isMobile ? 1 : 3}
                className={styles.shipping_service_wrap}
            >
                {service_PWt3Ot &&
                    service_PWt3Ot?.list.map((service, index) => (
                        <Flex
                            align="center"
                            justify="center"
                            className={styles.shipping_service_item}
                            key={index}
                        >
                            <Box>
                                <Title
                                    size="h1"
                                    c="#007bff"
                                    mb="sm"
                                    fz="md"
                                    tt="uppercase"
                                >
                                    {service.title}
                                </Title>
                                <Text
                                    color="#444444"
                                    fz="sm"
                                    dangerouslySetInnerHTML={{
                                        __html: service.content
                                    }}
                                ></Text>
                            </Box>
                        </Flex>
                    ))}
            </SimpleGrid>
        </Container>
    );
};

export default ShippingService;
