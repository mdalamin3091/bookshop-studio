import React from 'react'
import { Box, Center, Container, Divider, Text } from '@mantine/core'

const ProductSection = () => {
  return (
    <Container size="xl" py="lg">
        <Box>
            <Text align="center" size="36px" mb="sm">Special Product</Text>
            <Center>
                <Divider size="md" w="80px" color="#ff5900" />
            </Center>
        </Box>
    </Container>
  )
}

export default ProductSection