import React from "react";
import { Box, Rating, Stack, Text } from "@mantine/core";
import Link from "next/link";
import styles from "./index.module.scss";

const ProductCard = ({ product }) => {
  const { slug, name, thumbnail, rating, price } = product || {};
  let defaultSrc = "https://i.ibb.co/fNC7L5Z/No-Image-Placeholder.png";
  return (
    <Box className={styles.product_items}>
      <Link href={`product/${slug}`}>
        <img src={thumbnail?.src || defaultSrc} alt={thumbnail?.alt} />
      </Link>
      <Link href={`product/${slug}`}>
        <img
          src={thumbnail?.src || defaultSrc}
          alt={thumbnail?.alt}
          className={styles.product_items_two}
        />
      </Link>
      <Stack justify="center" align="center" spacing="4px" mt="15px">
        <Rating readOnly c="#777777" value={rating?.avg} />
        <Text c="#777777" fz="md">
          {name}
        </Text>
        <Text fw="bold">৳{price?.base_sale}</Text>
      </Stack>
    </Box>
  );
};

export default ProductCard;
