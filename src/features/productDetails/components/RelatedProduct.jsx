import React from 'react'
import { Box, Divider, Title } from '@mantine/core'
import { Carousel } from '@mantine/carousel'
import ProductCard from '@/components/ProductCard'
import useResponsive from '@/hooks/useResponsive'

const RelatedProduct = () => {
    const { isMobile } = useResponsive();
    return (
        <Box mt="xl">
            <Title size="h2" tt="uppercase" fz="xl" fw="bold" mb="md">Related Products</Title>
            <Divider mb="md" />
            <Carousel
                mx="auto"
                slideSize={isMobile ? "50%" : "25%"}
                withControls={false}
                slideGap="lg"
                loop
                align="start"
                slidesToScroll={1}
            >
                {Array(5)
                    .fill(null)
                    .map((_, index) => (
                        <Carousel.Slide key={index}>
                            <ProductCard key={index} />
                        </Carousel.Slide>
                    ))}
            </Carousel>
        </Box>
    )
}

export default RelatedProduct