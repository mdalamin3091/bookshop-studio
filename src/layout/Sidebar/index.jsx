import { Divider, Drawer } from "@mantine/core";
import { useDispatch, useSelector } from "react-redux";
import { selectOpendrawer } from "@/redux/features/sidebar/sidebarSelector";
import SidebarHeader from "./SidebarHeader";
import { selectThemeInfo } from "@/redux/features/themeData/themeSelector";
import SideBarMenu from "./components/SideBarMenu";
import { setOpenDrawer } from "@/redux/features/sidebar/sidebarSlice";
import useResponsive from "@/hooks/useResponsive";
import MobileSidebarMenu from "./components/MobileSidebarMenu";

const Sidebar = () => {
  const openDrawer = useSelector(selectOpendrawer);
  const { data: { header: { body } = {} } = {} } =
    useSelector(selectThemeInfo) || {};

  const { isMobile } = useResponsive();

  const dispatch = useDispatch();

  const handleDrawer = () => {
    dispatch(setOpenDrawer(false));
  };

  return (
    <>
      <Drawer
        opened={openDrawer}
        size="300px"
        title={<SidebarHeader />}
        onClose={handleDrawer}
        withCloseButton={false}
        closeOnEscape
        closeOnClickOutside
        transitionProps={{ duration: 300, timingFunction: "linear" }}
      >
        <Divider c="#dee2e6" mb={"lg"} />
        {isMobile ? <MobileSidebarMenu /> : <SideBarMenu />}
      </Drawer>
    </>
  );
};

export default Sidebar;
