import React from 'react'
import { Box, Rating, Stack, Text } from '@mantine/core'
import Link from 'next/link'
import styles from "./index.module.scss";

const ProductCard = () => {
    return (
        <Box className={styles.product_items}>
            <Link href={`product/1`}>
                <img
                    src="https://api.admin.webmanza.com/assets/product/gallery/139_20_1663570856356_313229747_product_gallery.jpeg"
                    alt="product"
                />
            </Link>
            <Stack justify="center" align="center" spacing="4px" mt="15px">
                <Rating readOnly c="#777777" />
                <Text c="#777777" fz="md">I Am Watching you</Text>
                <Text fw="bold">৳600</Text>
            </Stack>
        </Box>
    )
}

export default ProductCard