import { Center, Loader } from "@mantine/core";
import React from "react";

const Preloader = () => {
  return (
    <Center mih="100vh">
      <Loader variant="bars" color="#ff5900" />
    </Center>
  );
};

export default Preloader;
