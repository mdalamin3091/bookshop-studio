import React, { Fragment } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setOpenDrawer } from "@/redux/features/sidebar/sidebarSlice";
import { Flex, Text } from "@mantine/core";
import styles from "./sidebar.module.scss";

const SidebarHeader = () => {
  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(setOpenDrawer(false));
  };

  return (
    <Fragment>
      <Flex
        gap="5px"
        align="center"
        justify="center"
        onClick={handleDrawer}
        className={styles.SidebarHeader}
      >
        <IoIosArrowBack />
        <Text fz="18px" fw="bold" c="#222222" tt="uppercase">
          Back
        </Text>
      </Flex>
    </Fragment>
  );
};

export default SidebarHeader;
