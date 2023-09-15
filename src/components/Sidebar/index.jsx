import {
  Stack,
  Flex,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Drawer,
} from "@chakra-ui/react";
import { NavButton } from "../NavButton";
import React from "react";

const SidebarContent = ({ variant, nav }) => {
  return (
    <Box w="300px">
      <Flex
        flex="1"
        minH={variant !== "drawer" ? "100vh" : ""}
        border={variant !== "drawer" ? "1px solid" : ""}
        borderColor="gray.200"
        borderRight="none"
        borderTop="none"
        borderBottom="none"
        py={{
          base: "6",
          sm: "8",
        }}
        pr={{
          base: "4",
          sm: "6",
        }}
      >
        <Stack justify="space-between" spacing="1" width="fit-content">
          <Stack spacing="8" shouldWrapChildren>
            <Stack spacing="1">
              {nav.map((item) => (
                <NavButton
                  key={item.id}
                  label={item.title}
                  url={item.href}
                  icon={item.icon}
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

const Sidebar = function ({ isOpen, variant, onClose, menu }) {
  return variant === "sidebar" ? (
    <Box>
      <SidebarContent nav={menu} onClick={onClose} />
    </Box>
  ) : (
    <Drawer placement="right" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <SidebarContent variant={variant} nav={menu} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
