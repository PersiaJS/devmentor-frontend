import Link from "next/link";

import { Box, Button, Stack, useColorModeValue } from "@chakra-ui/react";

const DesktopNav = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} display={{ base: "none", md: "flex" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} display={"flex"} alignItems={"center"}>
          <Link href={navItem.href ?? "#"} style={{ padding: 2 }}>
            <Button
              fontSize={"sm"}
              fontWeight={600}
              color={linkColor}
              _hover={{
                color: "red.500",
              }}
              variant="link-on-accent"
            >
              {navItem.label}
            </Button>
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
export default DesktopNav;
