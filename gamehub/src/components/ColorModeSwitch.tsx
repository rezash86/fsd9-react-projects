import { HStack, Switch, useColorMode, Text } from "@chakra-ui/react";

// https://chakra-ui.com/docs/components/stack/usage#notes-on-stack-vs-flex
const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
