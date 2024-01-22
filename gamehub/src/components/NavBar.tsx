import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    // https://chakra-ui.com/docs/components/stack/usage#notes-on-stack-vs-flex
    <HStack>
      <Image src={logo} boxSize={"60px"}></Image>
      <Text>Nav bar</Text>
    </HStack>
  );
};

export default NavBar;
