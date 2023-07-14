import {
  Stack,
  Flex,
  Text,
  useDisclosure,
  useColorModeValue,
  Button,
  Icon,
} from "@chakra-ui/react";

import Link from "next/link";
import { FaAd, FaUser } from "react-icons/fa";

const MobileNav = ({ NAV_ITEMS }) => {
  return (
    <Stack
      width={"100%"}
      boxShadow="md"
      pos={"absolute"}
      zIndex={1}
      bg={useColorModeValue("white", "gray.800")}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      <Stack
        my={5}
        flex={{ base: 1, md: 0 }}
        justify={"center"}
        direction={"row"}
        gap={3}
        spacing={6}
      >
        <Button
          as={Link}
          fontSize={"sm"}
          fontWeight={600}
          variant={"link"}
          href={"/auth/login"}
          _hover={{
            textDecoration: "none",
            color: "gray.600",
          }}
        >
          ورود
        </Button>
        <Button
          as={Link}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"red.500"}
          href={"/auth/register"}
          _hover={{
            bg: "red.600",
          }}
        >
          ثبت نام
        </Button>
      </Stack>
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        p={2}
        as={Link}
        borderBottom="2px"
        borderColor={"red.500"}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
      >
        <Text
          width={"100%"}
          p={3}
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
          _groupHover={{
            textDecoration: "none",
            bgColor: "red.500",
            color: "white",
          }}
        >
          <Icon as={FaUser} color={"red.600"} />
          {label}
        </Text>
      </Flex>
    </Stack>
  );
};
export default MobileNav;
