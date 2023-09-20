/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useSelector } from "react-redux";
import React, { Fragment, useState } from "react";
import { Center, NavLink, SegmentedControl } from "@mantine/core";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";

function createNestedMenu(data, parentId = 0) {
  const menu = [];
  for (const item of data) {
    if (item.parent === parentId) {
      const subMenu = createNestedMenu(data, item.id);
      const menuItem = { ...item }; // Create a new object
      if (subMenu.length > 0) {
        menuItem.children = subMenu;
      }
      menu.push(menuItem);
    }
  }
  return menu;
}

// Recursive function to render nested links
function renderNestedLinks(items, depth = 1) {
  if (!items || items.length === 0 || depth > 3) {
    return null;
  }

  return (
    <ul>
      {items.map((item) => (
        <NavLink label={item.text} key={item.id}>
          {renderNestedLinks(item.children, depth + 1)}
        </NavLink>
      ))}
    </ul>
  );
}

const MobileSidebarMenu = () => {
  const [selectMenu, setSelectMenu] = useState("All Category");
  const { data: { header: { body } = {} } = {} } =
    useSelector(selectThemeInfo) || {};
  const { category_menu, primary_menu } = body || {};

  const nestedMenu = createNestedMenu(category_menu);
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
        renderNestedLinks(nestedMenu)}

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
