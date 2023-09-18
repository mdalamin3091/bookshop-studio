import React from "react";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";
import styles from "../sidebar.module.scss";

const SideBarMenu = () => {
  return (
    <div className={styles.sidebar_menu}>
      <ul className={styles.sidebar_menu_ul}>
        <li>
          <Link href="/">
            <p>Story</p>
            <BsChevronRight />
          </Link>
          <ul className={styles.nested_dropdown}>
            <li>
              <Link href="/">Horror</Link>
            </li>
            <li>
              <Link href="/">Thiler</Link>
            </li>
            <li>
              <Link href="/">Romance</Link>
            </li>
            <li>
              <Link href="/">advanture</Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default SideBarMenu;

// import { Group, Code, ScrollArea, Text, Box } from "@mantine/core";
// // import { UserButton } from "../UserButton/UserButton";
// // import { LinksGroup } from "../NavbarLinksGroup/NavbarLinksGroup";
// import classes from "../sidebar.module.scss";
// import { useState } from "react";

// const mockdata = [
//   { label: "Dashboard" },
//   {
//     label: "Market news",
//     // icon: IconNotes,
//     initiallyOpened: true,
//     links: [
//       { label: "Overview", link: "/" },
//       { label: "Forecasts", link: "/" },
//       { label: "Outlook", link: "/" },
//       { label: "Real time", link: "/" },
//     ],
//   },
// ];
// export function LinksGroup({ icon: Icon, label, initiallyOpened, links }) {
//   const hasLinks = Array.isArray(links);
//   const [opened, setOpened] = useState(initiallyOpened || false);
//   const items = (hasLinks ? links : []).map((link) => (
//     <Text
//       component="a"
//       className={classes.link}
//       href={link.link}
//       key={link.label}
//       onClick={(event) => event.preventDefault()}
//     >
//       {link.label}
//     </Text>
//   ));
// }

// export function NavbarLinksGroup() {
//   return (
//     <Box mih={220} p="md">
//       <LinksGroup {...mockdata} />
//     </Box>
//   );
// }

// export default function NavbarNested() {
//   const links = mockdata.map((item) => (
//     <LinksGroup {...item} key={item.label} />
//   ));

//   return (
//     <nav className={classes.navbar}>
//       <div className={classes.header}>
//         <Group justify="space-between">
//           <Code fw={700}>v3.1.2</Code>
//         </Group>
//       </div>

//       <ScrollArea className={classes.links}>
//         <div className={classes.linksInner}>{links}</div>
//       </ScrollArea>

//       <div className={classes.footer}>{/* <UserButton /> */}</div>
//     </nav>
//   );
// }
