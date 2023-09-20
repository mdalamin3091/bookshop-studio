import React from "react";
import {
  Button,
  Container,
  Flex,
  Grid,
  Input,
  Stack,
  Text,
} from "@mantine/core";
import Image from "next/image";
import { HiMapPin, HiOutlineEnvelope } from "react-icons/hi2";
import { IoMdCall } from "react-icons/io";
import Link from "next/link";
import useResponsive from "@/hooks/useResponsive";
import { useSelector } from "react-redux";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import styles from "./index.module.scss";
const Footer = () => {
  const { isMobile } = useResponsive();
  const { data: { footer: { body } = {} } = {} } =
    useSelector(selectThemeInfo) || {};
  const { column1, column2, column3, column4 } = body || {};
  return (
    <Container size="xl" py="xl">
      <Grid>
        {/* col - 1 */}
        <Grid.Col span={isMobile ? 12 : 5} align={isMobile ? "center" : "left"}>
          {column1?.list.logo_4ECq53.allow && (
            <Image
              src={"https://i.ibb.co/YZ1SDCR/logo.jpg"}
              width={250}
              height={65}
              objectFit="cover"
              alt="logo"
              priority
            />
          )}
          <Text
            c="#444444"
            lh="32px"
            mt="25px"
            pr="50px"
            mb="md"
            dangerouslySetInnerHTML={{
              __html: column1?.list?.text_oaT6SY.content,
            }}
          ></Text>
        </Grid.Col>

        {/* col - 2 */}
        <Grid.Col span={isMobile ? 12 : 3} align={isMobile ? "center" : "left"}>
          <Text fz="36px" c="#222222" fw="bold" lh="37px" mb="5px">
            {column2?.list?.newsletter_nvABLM?.title}
          </Text>
          <Input placeholder="Enter your email" mb="lg" />

          <Button uppercase color="primaryColors.0" variant="filled">
            Subscribe
          </Button>
        </Grid.Col>

        {/* col - 3 */}
        <Grid.Col span={isMobile ? 12 : 2} align={isMobile ? "center" : "left"}>
          <Stack mt="lg" gap="md">
            <Flex
              align="center"
              justify={isMobile ? "center" : "flex-start"}
              gap="sm"
              c="#999999"
            >
              <HiMapPin />
              <Text fz="sm">Dhaka, Bangladesh</Text>
            </Flex>
            <Flex
              align="center"
              justify={isMobile ? "center" : "flex-start"}
              gap="sm"
              c="#999999"
            >
              <IoMdCall />
              <Text fz="sm">01700705293</Text>
            </Flex>
            <Flex
              align="center"
              justify={isMobile ? "center" : "flex-start"}
              gap="sm"
              c="#999999"
            >
              <HiOutlineEnvelope />
              <Text fz="sm">info@webmanza.com</Text>
            </Flex>
          </Stack>
        </Grid.Col>

        {/* col - 4 */}
        <Grid.Col span={isMobile ? 12 : 2} align={isMobile ? "center" : "left"}>
          <Text c="#222222" fz="18px" fw="bold" mb="lg" tt="uppercase">
            {column4?.title}
          </Text>
          <Stack gap="sm">
            {column4?.list?.menubar_87srO8?.list.map((link) => (
              <Link href="/" key={link.id} className={styles.footer_link}>
                {link.text}
              </Link>
            ))}
          </Stack>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default Footer;
