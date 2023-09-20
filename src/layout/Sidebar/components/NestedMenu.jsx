import React from "react";
import { NavLink } from "@mantine/core";

function createNestedMenu(data, parentId = 0) {
  const menu = [];
  for (const item of data) {
    if (item.parent === parentId) {
      const subMenu = createNestedMenu(data, item.id);
      const menuItem = { ...item };
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

const NestedMenu = ({ categoryMenu }) => {
  const nestedMenu = createNestedMenu(categoryMenu);
  return renderNestedLinks(nestedMenu);
};

export default NestedMenu;
