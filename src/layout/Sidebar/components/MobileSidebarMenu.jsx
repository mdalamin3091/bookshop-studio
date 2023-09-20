/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { Center, NavLink, SegmentedControl } from "@mantine/core";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import NestedMenu from "./NestedMenu";

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

      {selectMenu === "All Category" && category_menu && (
        <NestedMenu categoryMenu={category_menu} />
      )}
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
