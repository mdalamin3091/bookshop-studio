import Link from "next/link";
import { useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { Center, Flex, NavLink, SegmentedControl } from "@mantine/core";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";

const MobileSidebarMenu = () => {
  const [selectMenu, setSelectMenu] = useState("All Category");
  const { data: { header: { body } = {} } = {} } =
    useSelector(selectThemeInfo) || {};
  const { category_menu, primary_menu } = body || {};
  return (
    <Fragment>
      <Center mb="lg">
        <SegmentedControl
          size="lg"
          color="primaryColors.0"
          data={["All Category", "Main Menu"]}
          tt="uppercase"
          value={selectMenu}
          onChange={(value) => setSelectMenu(value)}
        />
      </Center>

      {selectMenu === "All Category" &&
        category_menu &&
        category_menu.map((menu) => (
          <Flex key={menu.id} align="center" justify="flex-start">
            <img width="20px" src={menu.icon} alt={menu.text} />
            <NavLink label={menu.text}></NavLink>
          </Flex>
        ))}

      {selectMenu === "Main Menu" &&
        primary_menu &&
        primary_menu.map((menu) => (
          <NavLink
            key={menu.id}
            label={menu.text}
            component={Link}
            href="/"
          ></NavLink>
        ))}
    </Fragment>
  );
};

export default MobileSidebarMenu;
