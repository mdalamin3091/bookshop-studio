import React from "react";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import { useSelector } from "react-redux";
import NestedMenu from "./NestedMenu";

const SideBarMenu = () => {
  const { data: { header: { body } = {} } = {} } =
    useSelector(selectThemeInfo) || {};
  const { category_menu, primary_menu } = body || {};

  return <NestedMenu categoryMenu={category_menu} />;
};

export default SideBarMenu;
