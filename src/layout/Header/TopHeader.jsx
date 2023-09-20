import React from "react";
import { Box, Container, Flex, Grid, Text } from "@mantine/core";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import { MdCall } from "react-icons/md";
import { BsPersonFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import useResponsive from "@/hooks/useResponsive";
import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import Link from "next/link";
const TopHeader = () => {
  const { isTablet } = useResponsive();
  const { data: { header: { body } = {}, hotline = {} } = {} } =
    useSelector(selectThemeInfo) || {};
  return (
    <Box bg="#F8F8F8">
      <Container size="xl">
        <Grid py="sm" align="center" m={0}>
          {isTablet ||
            (body?.hotline_section && (
              <Grid.Col md={6} p={0}>
                <Flex gap="md" justify="flex-start" align="center" p={0}>
                  <Text fz="sm" c="#999">
                    {hotline?.text}
                  </Text>
                  <Flex align="center" gap="10px">
                    <Box c="#ff5900">
                      <MdCall />
                    </Box>
                    <Text fz="sm" c="#999">
                      Call Us:{" "}
                      <Text span c="#7F786D">
                        {hotline?.mobile}
                      </Text>
                    </Text>
                  </Flex>
                </Flex>
              </Grid.Col>
            ))}
          <Grid.Col md={6} p={0}>
            <Flex
              gap="5px"
              justify="flex-end"
              align="center"
              p={0}
              c="#999"
              sx={{ cursor: "pointer" }}
              className={styles.my_account}
            >
              <Box>
                <BsPersonFill />
              </Box>
              <Text>My account</Text>
              <IoIosArrowDown />
              <Box component="ul" className={styles.dropdown}>
                <Link href="/">Login</Link>
                <Link href="/">Register</Link>
              </Box>
            </Flex>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default TopHeader;
