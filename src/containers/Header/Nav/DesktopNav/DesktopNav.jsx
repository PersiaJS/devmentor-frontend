import { Box, Link, Stack, useColorModeValue } from "@chakra-ui/react";

const DesktopNav = ({ NAV_ITEMS }) => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4} display={{ base: "none", md: "flex" }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label} display={"flex"} alignItems={"center"}>
          <Link
            p={2}
            href={navItem.href ?? "#"}
            fontSize={"sm"}
            fontWeight={600}
            color={linkColor}
            _hover={{
              textDecoration: "none",
              color: linkHoverColor,
            }}
          >
            {navItem.label}
          </Link>
        </Box>
      ))}
    </Stack>
  );
};
export default DesktopNav;
