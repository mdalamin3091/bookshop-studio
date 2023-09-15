import React from "react";
import {
    Box,
    Button,
    Center,
    Container,
    Divider,
    Flex,
    Rating,
    SimpleGrid,
    Stack,
    Text,
} from "@mantine/core";
import TabButton from "@/components/TabButton";
import { BsArrowRightShort } from "react-icons/bs";
import useResponsive from "@/hooks/useResponsive";
import styles from "../home.module.scss";

const SpecialProducts = () => {
    const { isMobile } = useResponsive();
    return (
        <Container size="xl" py="50px">
            <Box>
                <Text align="center" size="36px" mb="sm">
                    Special Product
                </Text>
                <Center>
                    <Divider size="md" w="80px" color="#ff5900" />
                </Center>
            </Box>
            <Flex my="lg" justify="center" align="center" gap="md">
                <TabButton title="Story" />
                <TabButton title="Academic" />
            </Flex>
            <SimpleGrid cols={isMobile ? 2 : 5} spacing="lg">
                {Array(10)
                    .fill(null)
                    .map((_, index) => (
                        <Box className={styles.product_items} key={index}>
                            <img
                                src="https://api.admin.webmanza.com/assets/product/gallery/139_20_1663570856356_313229747_product_gallery.jpeg"
                                alt="product"
                            />
                            <Stack justify="center" align="center" spacing="4px" mt="15px">
                                <Rating readOnly c="#777777" />
                                <Text c="#777777" fz="md">I Am Watching you</Text>
                                <Text fw="bold">৳600</Text>
                            </Stack>
                        </Box>
                    ))}
            </SimpleGrid>
            <Center mt="lg">
                <Button rightIcon={<BsArrowRightShort />} variant="outline" uppercase fz="md">
                    More Products
                </Button>
            </Center>
        </Container>
    );
};

export default SpecialProducts;
